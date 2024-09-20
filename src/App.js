import './App.css';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BusTicket from './components/BusTicket';
import TrainTicket from './components/TrainTicket';
import CarRental from './components/CarRental';
import AboutUs from './components/AboutUs';
import TravelPackage from './components/TravelPackage';

function App() {
  return (
    <Router>
      <Header/>
     
      <Routes>
      <Route path="/" element={<HomePage />}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/BusTicket" element={<BusTicket/>}/>
        <Route path="/TrainTicket" element={<TrainTicket/>} />
        <Route path="/CarRental" element={<CarRental/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/TravelPackage" element={<TravelPackage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
