import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3005/students').then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    const students = this.state.students.map((e, i) => {
      return (
        <Link key={i} to={`/student/${e.id}`}>
          <p>{e.first_name} {e.last_name}</p>
        </Link>
      )
    })

    return (
      <div>
        <h1>{this.props.match.params.className}</h1>
        {students}
      </div>
    )
  }





    
}