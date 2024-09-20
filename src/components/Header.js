import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Mylogo from './assets/logo.png';
import home from './assets/home.png';
import bus from './assets/bus-icon.png';
import car from './assets/car.png';
import train from './assets/train.png';
import contact from './assets/contact.png';
const Header=()=>{
   // const Mylogo = require('./assests/logo.png');
    return(
    
        <header className='invisible-header'>
            <div className='logo'>
            <img src={Mylogo} alt="Abhishek Traveling" />

            </div>
            <div className='header-buttons'>
                <Link to ="HomePage">
                <button><img src={home} alt='Home'/>Home</button>
                </Link>
                <Link to ="BusTicket">
                <button><img src={bus} alt='Bus Ticket'/>Bus</button>
                </Link>
                <Link to ="TrainTicket">
                <button><img src={train} alt='Train Ticket'/>train</button>
                </Link>
                <Link to="CarRental">
                <button><img src={car} alt='Car Rental'/>car</button>
                </Link>
                <Link to="AboutUs">
                <button><img src={contact} alt='Contacto Us'/>contact</button>
                </Link>
            </div>
            
        </header>
        
    );
}
 export default Header;