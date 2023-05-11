import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
class CardComponent extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
      return (
        <Card style={{ width: '25rem', margin:'2rem',float:'left'}}>
            <Card.Img variant="top" src={this.props.obj.image} width={"150px"} height={"200px"}/>
            <Card.Body>
            <Card.Title>{this.props.obj.title}</Card.Title>
            <Card.Text>{this.props.obj.text}</Card.Text>
            <Button variant="primary" style={{backgroundColor:'green'}} path={"blog/:id"}
            to={'/display-blog/' + this.props.obj._id}>View Details</Button>
            <Link className="edit-link" path={"product/:id"}
            to={'http://localhost:4000/blogs/display-blog/' + this.props.obj._id}
          >
            Display
          </Link>
            </Card.Body>
        </Card>
      );
    }
  }
  
  // CardComponent.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   text: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired
  // };
  
  export default CardComponent;
  