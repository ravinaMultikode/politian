import logo from './logo.svg';
import './App.css';
import './scss/style.css'
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import AboutPage from './Component/AboutPage';
import CampaignPage from './Component/CampaignPage';
import Campaign2 from './Component/Campaign2';
import CampaignSinglePage from './Component/CampaignSinglePage';
import Gallery from './Component/Gallery';
import TestmonialPage from './Component/TestmonialPage';
import TeamPage from './Component/TeamPage';
import TeamSinglePage from './Component/TeamSinglePage';
import ServicePage from './Component/ServicePage';
import Service2Page from './Component/Service2Page';
import ShopPage from './Component/ShopPage';
import ShopSingle from './Component/ShopSingle';
import CartPage from './Component/CartPage';
import Donate from './Component/Donate';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/AboutUs' element={<AboutPage  mainTitle={`About Us`}/>}/>
        <Route  path='/CampaignPage' element={<CampaignPage  mainTitle={`Campaign`}/>}/>
        <Route  path='/campaign2' element={<Campaign2  mainTitle={`Campaign`}/>}/>
        <Route  path='/campaignSingle' element={<CampaignSinglePage  mainTitle={`New York: Support for Womans April 2023`}/>}/>
        <Route  path='/gallery' element={<Gallery  mainTitle={`Gallery`}/>}/>
        <Route  path='/testmonial' element={<TestmonialPage  mainTitle={`Testimonial`}/>}/>
        <Route  path='/teamPage' element={<TeamPage  mainTitle={`Team`}/>}/>
        <Route  path='/teamSingle' element={<TeamSinglePage  mainTitle={`Esther Howard`}/>}/>
        <Route  path='/service' element={<ServicePage  mainTitle={`Service`}/>}/>
        <Route  path='/service2' element={<Service2Page  mainTitle={`Economic Establishment`}/>}/>
        <Route  path='/shop' element={<ShopPage  mainTitle={`Shop`}/>}/>
        <Route  path='/shopsingle' element={<ShopSingle  mainTitle={`Product Single`}/>}/>
        <Route  path='/cart' element={<CartPage  mainTitle={`Cart`}/>}/>
        <Route  path='/Donate' element={<Donate  mainTitle={`Donate`}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
