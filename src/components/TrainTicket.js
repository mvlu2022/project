import React, { useState } from 'react';
import './TrainTicket.css'; 

const TrainTicket = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    compartment: 'sleeper',
    selectedTrain: '',
    passengerDetails: [],
  });
  const [trainList, setTrainList] = useState([]);
  const [passenger, setPassenger] = useState({
    name: '',
    gender: '',
    age: '',
    contact: ''
  });

  const mockTrains = [
    { name: 'Rajdhani Express', price: { sleeper: 500, ac: 1500, general: 300 } },
    { name: 'Shatabdi Express', price: { sleeper: 600, ac: 1600, general: 400 } },
    { name: 'Garib Rath', price: { sleeper: 400, ac: 1000, general: 200 } },
    { name: 'Duronto Express', price: { sleeper: 550, ac: 1550, general: 350 } },
    { name: 'Paschim Express', price: { sleeper: 650, ac: 1700, general: 450 } },
    { name: 'Gatiman Express', price: { sleeper: 600, ac: 1600, general: 400 } },
    { name: 'Intercity Express', price: { sleeper: 450, ac: 1350, general: 300 } },
    { name: 'Maharaja Express', price: { sleeper: 750, ac: 2500, general: 600 } },
    { name: 'Kota Jan Shatabdi', price: { sleeper: 480, ac: 1280, general: 320 } },
    { name: 'Mumbai Superfast', price: { sleeper: 520, ac: 1400, general: 340 } },
  ];

  const handleSearch = () => {
    // Validation
    if (!formData.from || !formData.to || !formData.date) {
      alert("All fields must be filled out!");
      return;
    }
    if (formData.from === 'Mumbai' && formData.to === 'Kota') {
      setTrainList(mockTrains);
    } else {
      alert('No trains found for the selected route!');
    }
  };

  const handleTrainSelect = (train) => {
    setFormData({ ...formData, selectedTrain: train });
  };

  const handlePassengerChange = (e) => {
    const { name, value } = e.target;
    setPassenger({ ...passenger, [name]: value });
  };

  const handleSubmit = () => {
    if (!passenger.name || !passenger.gender || !passenger.age || !passenger.contact || passenger.contact.length !== 10) {
      alert("All fields are required and contact number must be 10 digits!");
      return;
    }
    alert('Booking Successful!');
  };

  return (
    <div className="train-booking">
      <div className="booking-form">
        <h2>Train Ticket Booking</h2>
        <div className="form-group">
          <label>From:</label>
          <input type="text" value={formData.from} onChange={(e) => setFormData({ ...formData, from: e.target.value })} />
        </div>
        <div className="form-group">
          <label>To:</label>
          <input type="text" value={formData.to} onChange={(e) => setFormData({ ...formData, to: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Compartment:</label>
          <select value={formData.compartment} onChange={(e) => setFormData({ ...formData, compartment: e.target.value })}>
            <option value="sleeper">Sleeper</option>
            <option value="ac">AC</option>
            <option value="general">General</option>
          </select>
        </div>
        <button onClick={handleSearch}>Search Trains</button>
      </div>

      {trainList.length > 0 && (
        <div className="train-list">
          <h3>Available Trains</h3>
          <ul>
            {trainList.map((train, index) => (
              <li key={index} onClick={() => handleTrainSelect(train)}>
                {train.name} - ₹{train.price[formData.compartment]} ({formData.compartment.toUpperCase()})
              </li>
            ))}
          </ul>
        </div>
      )}

      {formData.selectedTrain && (
        <div className="passenger-form">
          <h3>Passenger Details for {formData.selectedTrain.name}</h3>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={passenger.name} onChange={handlePassengerChange} />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={passenger.gender} onChange={handlePassengerChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={passenger.age} onChange={handlePassengerChange} />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input type="text" name="contact" value={passenger.contact} onChange={handlePassengerChange} maxLength={10} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default TrainTicket;
