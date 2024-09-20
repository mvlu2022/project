import React, { useState, useRef } from "react";
import './TravelPackage.css';

const travelPackages = [
  { id: 1, place: "Mumbai", price: { bus: 500, train: 800, car: 1200 } },
  { id: 2, place: "Goa", price: { bus: 600, train: 900, car: 1500 } },
  { id: 3, place: "Kashmir", price: { bus: 1200, train: 1500, car: 2500 } },
  { id: 4, place: "Jaipur", price: { bus: 700, train: 1000, car: 1300 } },
  { id: 5, place: "Agra", price: { bus: 800, train: 1100, car: 1400 } },
  { id: 6, place: "Kerala", price: { bus: 900, train: 1200, car: 1800 } },
  { id: 7, place: "Rajasthan", price: { bus: 950, train: 1300, car: 1600 } },
  { id: 8, place: "Ladakh", price: { bus: 1100, train: 1400, car: 2200 } },
];

const TravelPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({ name: "", contact: "", age: "", transport: "", totalPrice: 0 });
  const [showForm, setShowForm] = useState(false);

  // scroll to form
  const formRef = useRef(null);

  
  const handleBookPackage = (pkg) => {
    setSelectedPackage(pkg);
    setFormData({ name: "", contact: "", age: "", transport: "", totalPrice: 0 }); //previour data remove
    setShowForm(true);

    
    setTimeout(() => {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTransportChange = (e) => {
    const transportType = e.target.value;
    const price = selectedPackage.price[transportType];
    setFormData({ ...formData, transport: transportType, totalPrice: price });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your ticket to ${selectedPackage.place} is booked!`);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="homepage">
      <h1>Travel Packages</h1>
      <div className="package-grid">
        {travelPackages.map(pkg => (
          <div key={pkg.id} className="package-card" onClick={() => handleBookPackage(pkg)}>
            <img src={`images/${pkg.place.toLowerCase()}.png`} alt={pkg.place} />
            <h3>{pkg.place}</h3>
          </div>
        ))}
      </div>

      {/* Show the form*/}
      {showForm && selectedPackage && (
        <div ref={formRef} className="booking-form">
          <h2>Book a package to {selectedPackage.place}</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              maxLength={10}
            />
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <label>Transport:</label>
            <select
              name="transport"
              value={formData.transport}
              onChange={handleTransportChange}
              required
            >
              <option value="">Select Transport</option>
              <option value="bus">Bus - ₹{selectedPackage.price.bus}</option>
              <option value="train">Train - ₹{selectedPackage.price.train}</option>
              <option value="car">Car - ₹{selectedPackage.price.car}</option>
            </select>
            <p>Total Price: ₹{formData.totalPrice}</p>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TravelPackage;
