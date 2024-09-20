import React, { useState } from 'react';
import './CarRental.css'; 

const CarRental = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    carType: '5-seater',
    selectedCar: '',
    passengerDetails: [],
  });
  const [carList, setCarList] = useState([]);
  const [passenger, setPassenger] = useState({
    name: '',
    gender: '',
    contact: ''
  });

  const mockCars = [
    { name: 'Honda City', type: '5-seater', price: 1000, driver: 'Ramesh', experience: '5 years', rating: 4.5 },
    { name: 'Toyota Innova', type: '7-seater', price: 1500, driver: 'Suresh', experience: '7 years', rating: 4.8 },
    { name: 'Maruti Swift', type: '5-seater', price: 800, driver: 'Manoj', experience: '3 years', rating: 4.3 },
    { name: 'Mahindra Scorpio', type: 'SUV', price: 1800, driver: 'Rajesh', experience: '10 years', rating: 4.7 },
    { name: 'Tata Safari', type: 'SUV', price: 2000, driver: 'Mahesh', experience: '8 years', rating: 4.6 },
    { name: 'Uber Prime', type: 'Prime', price: 2500, driver: 'Anil', experience: '9 years', rating: 4.9 },
    { name: 'Ola Prime', type: 'Prime', price: 2400, driver: 'Vijay', experience: '6 years', rating: 4.7 },
    { name: 'Uber SUV', type: 'SUV', price: 1900, driver: 'Sunil', experience: '8 years', rating: 4.8 },
    { name: 'Hyundai Verna', type: '5-seater', price: 1200, driver: 'Ajay', experience: '4 years', rating: 4.4 },
    { name: 'Maruti Ertiga', type: '7-seater', price: 1600, driver: 'Vinod', experience: '5 years', rating: 4.6 },
    { name: 'Ola Taxi', type: 'Taxi', price: 700, driver: 'Santosh', experience: '2 years', rating: 4.2 },
    { name: 'Uber Go', type: 'Taxi', price: 750, driver: 'Ganesh', experience: '3 years', rating: 4.3 },
    { name: 'Skoda Rapid', type: '5-seater', price: 1100, driver: 'Pradeep', experience: '6 years', rating: 4.5 },
    { name: 'Ford Endeavour', type: 'SUV', price: 2100, driver: 'Alok', experience: '12 years', rating: 4.8 },
    { name: 'Tata Indica', type: 'Taxi', price: 600, driver: 'Dinesh', experience: '4 years', rating: 4.1 },
  ];

  const handleSearch = () => {
    // Validate inputs
    if (!formData.from || !formData.to || !formData.date) {
      alert("All fields must be filled out!");
      return;
    }
    if (formData.from.toLowerCase() === 'andheri' && formData.to.toLowerCase() === 'navi mumbai') {
      setCarList(mockCars.filter(car => car.type === formData.carType));
    } else {
      alert('No cars found for the selected route!');
    }
  };

  const handleCarSelect = (car) => {
    setFormData({ ...formData, selectedCar: car });
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
    alert('Car Booking Successful!');
  };

  return (
    <div className="car-rental">
      <div className="booking-form">
        <h2>Car Rental Booking</h2>
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
          <label>Car Type:</label>
          <select value={formData.carType} onChange={(e) => setFormData({ ...formData, carType: e.target.value })}>
            <option value="5-seater">5-seater</option>
            <option value="7-seater">7-seater</option>
            <option value="SUV">SUV</option>
            <option value="Prime">Prime</option>
            <option value="Taxi">Taxi</option>
          </select>
        </div>
        <button onClick={handleSearch}>Search Cars</button>
      </div>

      {carList.length > 0 && (
        <div className="car-list">
          <h3>Available Cars</h3>
          <ul>
            {carList.map((car, index) => (
              <li key={index} onClick={() => handleCarSelect(car)}>
                {car.name} - ₹{car.price} ({car.type})
              </li>
            ))}
          </ul>
        </div>
      )}

      {formData.selectedCar && (
        <div className="passenger-form">
          <h3>Passenger Details for {formData.selectedCar.name}</h3>
          <p>Driver: {formData.selectedCar.driver}</p>
          <p>Experience: {formData.selectedCar.experience}</p>
          <p>Rating: {formData.selectedCar.rating} ★</p>
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

export default CarRental;
