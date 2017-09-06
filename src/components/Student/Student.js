import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
      super()
      this.state = {
        student: {}
      }
    }

    componentDidMount() {
      axios.get('http://localhost:3005/students/' + this.props.match.params.id).then(res => {
        this.setState({
          student: res.data
        })
      })
    }

    render() {
      return (
        <div>
          Name: {this.state.student.first_name}
          {this.state.student.last_name}
          Grade: {this.state.student.grade}
          Email: {this.state.student.email}
        </div>
      )
    }
}