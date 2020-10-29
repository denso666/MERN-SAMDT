import React, { Component } from 'react'
import axios from 'axios';

export default class EmployeesList extends Component {
    state = {
        employees: []
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:3030/api/employees');

        this.setState({employees:res.data});
    }
    render() {
        return (
            <div className="container-md">
                
            </div>
        )
    }
}
