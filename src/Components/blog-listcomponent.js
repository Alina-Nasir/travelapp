import React, { Component } from "react";
import CardComponent from './cardComponent';
import axios from "axios"; 


export default class BlogList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogposts: [],
      blogposts1: [],
      blogposts2: []

    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/blogs/')
      .then(res => {
        this.setState({
            blogposts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable1() {
    this.state.blogposts1 = this.state.blogposts.slice(0,3);
    return this.state.blogposts1.map((res, i) => {
      return <CardComponent obj={res} key={i}></CardComponent>;
    });
  }
  DataTable2() {
    this.state.blogposts2 = this.state.blogposts.slice(3,6);
    return this.state.blogposts2.map((res, i) => {
      return <CardComponent obj={res} key={i}></CardComponent>;
    });
  }


  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.DataTable1()}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.DataTable2()}
        </div> 
      </>
    );
  }
}