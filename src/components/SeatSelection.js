import React, { useState } from 'react';
import './SeatSelection.css'; 

// Mock data for already booked seats
const bookedSeats = ['1A', '2B', '3C', '1D'];

const BusSeatSelection = () => {
  // State to store selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // all seats in the bus
  const rows = ['1', '2', '3', '4', '5'];
  const seatsPerRow = ['A', 'B', 'C', 'D'];

  // Handle seat selection
  const handleSeatClick = (seat) => {
    // If the seat is already booked, then
    if (bookedSeats.includes(seat)) return;

    // Toggle seat selection (select or deselect)
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="bus-container">
      <h2>Select Your Seats</h2>
      <div className="seats-grid">
        {rows.map((row) => (
          <div className="row" key={row}>
            {seatsPerRow.map((seatLetter) => {
              const seat = row + seatLetter;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <div
                  key={seat}
                  className={`seat ${isBooked ? 'booked' : ''} ${
                    isSelected ? 'selected' : ''
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="selection-summary">
        <h4>Selected Seats:</h4>
        {selectedSeats.length > 0 ? (
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
    </div>
  );
};

export default BusSeatSelection;
