import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header';
import Footer from './footer';
import axios from "axios";
import {Route, Link, Routes, useParams} from 'react-router-dom';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    // State
    this.state = {
      title: '',
      text: '',
      image: '',
      description: '',
      pic2: '',
      pic3: '',
    }
  }
  componentDidMount() {
    //console.log(this.props.obj._id)
    //const { match } = this.props;
    

    
    console.log(window.location.pathname);
    const pathname = window.location.pathname.split("/");
    console.log(pathname[2])
    axios.get('http://localhost:4000/blogs/display-blog/' + pathname[2]).then(res => {
        this.setState({
          title: res.data.title,
           text: res.data.text,
          image: res.data.image,
          description: res.data.description,
          pic2: res.data.pic2,
          pic3: res.data.pic3
        });
       })
       .catch((error) => {
         console.log(error);
     })
  }
    render() {return (
    <>
    <Header></Header>
    <Row style={{margin:'5.5rem'}}>
        <Col sm={8}>
        <img  style={{height:'27rem',width:'55rem'}} src={this.state.image} alt="Responsive image"></img>
        </Col>
        <Col sm={4}>
        <div style={{paddingBottom:'0.6rem',position: 'relative', textAlign: 'center',color: 'white'}}>
            <img style={{height:'13rem',width:'30rem'}} src={this.state.pic2}  alt="Responsive image"></img>
          </div>
          <div style={{position: 'relative'}}>
            <img style={{height:'13rem',width:'30rem'}} src={this.state.pic3} alt="Responsive image"></img>
          </div>
        </Col>
    </Row>
    <div style={{margin:'5.5rem',textAlign:'left'}}>
      <h2>{this.state.title}</h2>
      <p style={{fontSize:'1.2rem'}}>{this.state.text}</p>
      <p style={{fontSize:'1.2rem'}}>{this.state.description}</p>
    </div>
    <Footer></Footer>
    </>
  );
}}