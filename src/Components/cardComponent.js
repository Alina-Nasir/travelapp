import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class CardComponent extends React.Component {
    render() {
      return (
        <Card style={{ width: '25rem', margin:'2rem',float:'left'}}>
            <Card.Img variant="top" src={this.props.image} width={"150px"} height={"200px"}/>
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <Button variant="primary">View Details</Button>
            </Card.Body>
        </Card>
      );
    }
  }
  
  CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };
  
  export default CardComponent;
  