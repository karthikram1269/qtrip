import React, { Component } from 'react';

class GoaSubCards extends Component {
  render() {
    return (
      <>
        <div id="bcd" style={{border:"1px solid gray", marginRight:"20px"}}>
            <img  id="" src={this.props.img} link={this.props.link} alt="i1"></img> 
            <p id="bp1">{this.props.p}</p>
            <div id='dt1'>
              <data >{this.props.tname}</data>
              <data>{this.props.p2}</data>
            </div>
            <div id='dt2'>
              <span>{this.props.hrs}</span>
              <span >{this.props.p3}</span>
            </div>
        </div>
      </>
    );
  }
}

export default GoaSubCards;
