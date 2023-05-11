import '../App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import BackgroundSlider from './backgroundslider';
import CardComponent from './cardComponent';
import Footer from './footer';
import BlogList from './blog-listcomponent';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
class Home extends React.Component{
    constructor(props) {
        super(props)
      }
    render() {
    return (
        <div>
            <Header></Header>
      <BackgroundSlider></BackgroundSlider>
      <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>TRAVEL DESTINATIONS IN PAKISTAN</h3>
      <BlogList></BlogList>
      <br></br>
    <Footer></Footer> 
        </div>
    );
}
}
export default Home;
