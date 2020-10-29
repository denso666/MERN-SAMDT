import React, { Component } from 'react'
import axios from 'axios';

export default class SalesList extends Component {
    state = {
        sales: []
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:3030/api/sales');

        this.setState({sales:res.data});
    }

    render() {
        return (
            <div className="container-md">
                
            </div>
        )
    }
}
