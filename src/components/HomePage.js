import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    from: '',
    to: '',
    date: '',
    budget: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    if (!searchCriteria.from || !searchCriteria.to || !searchCriteria.date || !searchCriteria.budget) {
      alert("All fields are required!");
      return;
    }
    navigate('/TravelPackage', { state: { searchCriteria } });
  };

  return (
    <div className="home-page">
      <div className="background-overlay">
        <div className="search-bar">
          <input 
            type="text" 
            name="from" 
            value={searchCriteria.from}  
            onChange={handleChange} 
            placeholder="From"
          />
          <input 
            type="text" 
            name="to" 
            value={searchCriteria.to}  
            onChange={handleChange} 
            placeholder="To"
          />
          <input 
            type="date" 
            name="date" 
            value={searchCriteria.date}  
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="budget" 
            value={searchCriteria.budget}  
            onChange={handleChange} 
            placeholder="Budget"
          />
          
          <button onClick={handleSearch}>Search</button>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
