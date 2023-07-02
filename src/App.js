import React from 'react';
import NavBar from './components/NavBar';
import Home from './home';
import { HashRouter, Routes, Route } from "react-router-dom";

import News from './news';
import Browse from './browse';
import Movie from './movie';
import Login from './login';
import Membership from './membership';
import SignUpInfo from './signUpInfo';
import SignUpPay from './signUpPay';

import './App.css';
import './CustomScrollbar.css';


const App = () => {
  return (
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path='/login' element={<Login />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/personal-info' element={<SignUpInfo />} />
          <Route path='/payment-info' element={<SignUpPay />} />
        </Routes>
      </HashRouter>
  );
};

export default App;