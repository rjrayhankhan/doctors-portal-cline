import React from 'react';
import Blogs from '../Blogs/Blogs';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeaturedService></FeaturedService>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;