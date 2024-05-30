import React from 'react';
import {CssBaseline } from '@mui/material';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';



const Home = () => {

  return (
    <>
      <CssBaseline />
        <Header />
        <HomeContent />
        <Footer />
    </>
  );
};


export default Home;
