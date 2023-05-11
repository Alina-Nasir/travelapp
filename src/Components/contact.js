
import React from 'react';
import Header from './header';
import Footer from './footer'; 
function Contact (){
 return <>
 <Header></Header>
 <div>
 <img src="https://tripadvisor.mediaroom.com/images/Media_Center_Header_Image-V5.png" style={{width:'100%'}}></img>
 <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>CONTACT US</h3>
 <div style={{margin:'auto', width:'70%'}}>
 <p style={{fontFamily:'Helvetica', fontSize:'18px',fontWeight:'300', lineHeight:'24px', textAlign:'center'}}>
 <span style={{fontWeight:'bold'}}>Email Address: </span>muasafirPakistan@gmail.com<br></br>
 <span style={{fontWeight:'bold'}}>Contact Number: </span>03057864532<br></br>
 <span style={{fontWeight:'bold'}}>Office Address: </span>Saudi-Pak Tower, Blue Area<br></br>
 </p>
 </div>
 
 </div>
 <Footer></Footer>
</>
}
  
export default Contact;