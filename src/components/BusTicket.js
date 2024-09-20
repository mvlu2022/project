import React, { useState } from "react";
import SeatSelection from "./SeatSelection";
import "./BusTicket.css"

const BusTicket = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    busType: 'AC',
    selectedBus: '',
    passengerDetails: [],
  });
  
  const [busList, setBusList] = useState([]);
  const [passenger, setPassenger] = useState({
    name: '',
    gender: '',
    contact: ''
  });

  const mockBuses = [
    { name: 'Volvo AC', type: 'AC', price: 1200, driver: 'Ramesh', experience: '5 years', rating: 4.5, conductor: 'Suresh' },
    { name: 'Sleeper Bus', type: 'Sleeper', price: 1000, driver: 'Mahesh', experience: '7 years', rating: 4.6, conductor: 'Rajesh' },
    { name: 'Semi-Sleeper Bus', type: 'Seating', price: 900, driver: 'Prakash', experience: '6 years', rating: 4.3, conductor: 'Dinesh' },
    { name: 'Luxury AC Sleeper', type: 'AC', price: 1500, driver: 'Anil', experience: '8 years', rating: 4.8, conductor: 'Vinod' },
  ];

  const handleSearch = () => {
    // Validate inputs
    if (!formData.from || !formData.to || !formData.date) {
      alert("All fields must be filled out!");
      return;
    }
    if (formData.from.toLowerCase() === 'andheri' && formData.to.toLowerCase() === 'pali hill') {
      setBusList(mockBuses.filter(bus => bus.type === formData.busType));
    } else {
      alert('No buses found for the selected route!');
    }
  };

  const handleBusSelect = (bus) => {
    setFormData({ ...formData, selectedBus: bus });
  };

  const handlePassengerChange = (e) => {
    const { name, value } = e.target;
    setPassenger({ ...passenger, [name]: value });
  };

  const handleSubmit = () => {
    if (!passenger.name || !passenger.gender || !passenger.contact || passenger.contact.length !== 10) {
      alert("All fields are required and contact number must be 10 digits!");
      return;
    }
    alert('Bus Booking Successful! if you have any query plese contact : 7398415592');
  };

  return (
    <div className="bus-ticket-booking">
      <div className="booking-form">
        <h2>Bus Ticket Booking</h2>
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
          <label>Bus Type:</label>
          <select value={formData.busType} onChange={(e) => setFormData({ ...formData, busType: e.target.value })}>
            <option value="AC">AC</option>
            <option value="Sleeper">Sleeper</option>
            <option value="Seating">Seating</option>
          </select>
        </div>
        <button onClick={handleSearch}>Search Buses</button>
        <SeatSelection/>
      </div>

      {busList.length > 0 && (
        <div className="bus-list">
          <h3>Available Buses</h3>
          <ul>
            {busList.map((bus, index) => (
              <li key={index} onClick={() => handleBusSelect(bus)}>
                {bus.name} - ₹{bus.price} ({bus.type})
              </li>
            ))}
          </ul>
        </div>
      )}

      {formData.selectedBus && (
        <div className="passenger-form">
          <h3>Passenger Details for {formData.selectedBus.name}</h3>
          <p>Driver: {formData.selectedBus.driver}, Experience: {formData.selectedBus.experience}, Rating: {formData.selectedBus.rating} ★</p>
          <p>Conductor: {formData.selectedBus.conductor}</p>
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
            <label>Contact:</label>
            <input type="text" name="contact" value={passenger.contact} onChange={handlePassengerChange} maxLength={10} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default BusTicket;
