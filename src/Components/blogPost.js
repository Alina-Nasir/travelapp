import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header';
import Footer from './footer';
import axios from "axios";
export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    // State
    this.state = {
      title: '',
      text: '',
      image: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/blogs/display-blog/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          text: res.data.text,
          image: res.data.image
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
        <img  style={{height:'26rem'}} src="https://www.parhlo.com/wp-content/uploads/2022/10/New-Project-41.jpg.webp" alt="Responsive image"></img>
        </Col>
        <Col sm={4}>
        <div style={{paddingBottom:'0.2rem',position: 'relative', textAlign: 'center',color: 'white'}}>
            <img style={{height:'13rem'}} src="https://www.parhlo.com/wp-content/uploads/2022/10/New-Project-6-4.jpg.webp"  alt="Responsive image"></img>
          </div>
          <div style={{position: 'relative'}}>
            <img style={{height:'13rem'}} src="https://www.parhlo.com/wp-content/uploads/2022/10/New-Project-39.jpg.webp" alt="Responsive image"></img>
          </div>
        </Col>
    </Row>
    <div>
      {this.state.image}
      {this.state.text}
      {this.state.title}
    </div>
    <Footer></Footer>
    </>
  );
}}