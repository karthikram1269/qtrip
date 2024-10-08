import React, { Component } from 'react';
import "../../styles/bangaluru/subcards.css"
class SubCards extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <>
            <div id="bcd" style={{border:"1px solid gray", marginRight:"20px"}}>
            <img  id = {this.props.id} src={this.props.image}  alt={this.props.alt}></img> 
            <p id="bp1">{this.props.category}</p>
            <div id='dt1'>
              <data >{this.props.name}</data>
              <data>{this.props.costPerHead}</data>
            </div>
            <div id='dt2'>
              <span>{"Duration"}</span>
              <span >{this.props.duration}</span>
            </div>
        </div>
               
        </>

    );
  }
}

export default SubCards;
  