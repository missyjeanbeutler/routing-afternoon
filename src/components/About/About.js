import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {

render() {
    return (
        <div>
            <Link to='/about'>About</Link>
            <Link to='/about/history'>History</Link>
            <Link to='/about/contact'>Contact</Link>
            {this.props.children}
        </div>
    )
}


    
}