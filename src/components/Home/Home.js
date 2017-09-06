import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

  render() {
    return (
      <div className="App">
        <h1>WestSide University</h1>
        <Link to='/classList/Math1010' className='btn'>Math 1010</Link>
        <Link to='/classList/English2010' className='btn'>English 2010</Link>
        <Link to='/classList/Biology2020' className='btn'>Biology 2020</Link>
      </div>
    );
  }
}

export default Home;
