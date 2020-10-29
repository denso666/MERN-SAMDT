import React, { Component } from 'react'
import axios from 'axios';

export default class ProductsList extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:3030/api/products');

        this.setState({products:res.data});
    }
    render() {
        return (
            <div className="container-md">
                
            </div>
        )
    }
}
