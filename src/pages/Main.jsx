import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import './style/Main.css'
import Cards from '../components/Cards';

function Main2() {
  return (
    <>
    <Header />
    <FirstSection />
    <Cards />
    <SecondSection />
    <ThirdSection />
    <Footer />
    </>
  )
}

export default Main2;