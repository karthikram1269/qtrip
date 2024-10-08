import React, { Component } from 'react';

class BHead extends Component {
  render() {
    return (
      <>
        <div id='b-container'>
            <h1 id='b-1'>Explore all adventures</h1>
            <p id='b-2'>Here's a list of places that you can explore in city</p>
            <hr />
            <div id='b-3'>
                <span id='s-1'>Filters: | <button>Filter By Duration(Hours)</button> Clear |</span>
                <span id='s-1'><button>Add Category</button> Clear |</span>
                <span id='s-1'><input id="spt" type="text" placeholder="Search adventures" /> Clear |</span>
            </div>
            <hr />
        </div>
      </>
    );
  }
}

export default BHead;
