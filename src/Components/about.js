import React from 'react';
import Header from './header';
import Footer from './footer';
import Team from './team';

function About () {
    return <>
        <Header></Header>
        <div>
        <img src="https://tripadvisor.mediaroom.com/images/Media_Center_Header_Image-V5.png" style={{width:'100%'}}></img>
        <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>ABOUT US</h3>
        <div style={{margin:'auto', width:'70%'}}>
        <p style={{fontFamily:'Helvetica', fontSize:'18px',fontWeight:'300', lineHeight:'24px', textAlign:'center'}}>
        Musafir-Pakistan, the Pakistan's largest travel guidance platform, helps hundreds of people each month
        become better travelers, from planning to booking to taking a trip. Travelers across the Pakistan use the Musafir-Pakistan 
        site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. 
        With more than 1 billion reviews and opinions of nearly 8 thousand businesses, 
        travelers turn to Musafir-Pakistan to find deals on accommodations, book experiences, 
        reserve tables at delicious restaurants and discover great places nearby. 
        As a travel guidance company available in 43 markets and 22 languages, Musafir-Pakistan makes planning easy no matter the trip type.
        </p>
        </div>
        
        </div>
        <br></br>
        <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>WHAT WE DO</h3>
        <div style={{display:'flex',justifyContent:'center', backgroundColor:'#faf1ed'}}>
        <Team title="Group Tours" description="Planning group tours and providing packages for family and freinds" 
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bb/bf/c9/7e1033dd-26af-44b4.jpg?w=400&h=-1&s=1"></Team>
        <Team title="Tailor Made" description="Customizing the tours according to your prefernces" 
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bb/c0/21/a619261e-93f5-454b.jpg?w=400&h=300&s=1"></Team>
        <Team title="Travel Destinations" description="Provide a complete list of destinations to plan your travel" 
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bb/bf/8a/878c29e6-a241-48e7.jpg?w=400&h=300&s=1"></Team>
        </div>
        <br></br>
        <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>MEET OUR TEAM</h3>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{margin:'2rem'}}>
            <img src="https://tripadvisor.mediaroom.com/image/Matt+Goldberg+200x200.png" alt="1"style={{width:'20', height:'20',borderRadius:'50%'}}></img>
            <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Cheif Executive Officer</p>
            <p style={{fontSize:'1.5rem'}}>Matt Goldberg</p>
        </div>
        <div style={{margin:'2rem'}}>
            <img src="https://tripadvisor.mediaroom.com/image/Michael+Noonan+1+200x200.png" alt="1"style={{width:'20', height:'20',borderRadius:'50%'}}></img>
            <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Cheif Financial Officer</p>
            <p style={{fontSize:'1.5rem'}}>Michael Noonan</p>
        </div>
        <div style={{margin:'2rem'}}>
            <img src="https://tripadvisor.mediaroom.com/image/Seth+1+200x200.png" alt="1"style={{width:'20', height:'20',borderRadius:'50%'}}></img>
            <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Cheif Legal Officer</p>
            <p style={{fontSize:'1.5rem'}}>Seth Calvert</p>
        </div>
        </div>
        
        <Footer></Footer>
    </>
}
export default About;