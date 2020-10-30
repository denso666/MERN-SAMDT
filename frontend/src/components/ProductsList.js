import React, { Component } from 'react'
import axios from 'axios';

export default class ProductsList extends Component {
    state = {
        products: [],
        name: "",
        description: "",
        actual_price: 0,
        quantity: 0
    };

    async componentDidMount() {
        this.getProducts();
        console.log(this.state.products);
    }

    getProducts = async () =>{
        const res = await axios.get('http://localhost:3030/api/products');
        this.setState({products:res.data});
    }
    onChangeName = e =>{
        this.setState({
            name: e.target.value
        })
    }
    onChangeDesc = e =>{
        this.setState({
            description: e.target.value
        })
    }
    onChangePrice = e =>{
        this.setState({
            actual_price: e.target.value
        })
    }
    onChangeQuantity = e =>{
        this.setState({
            quantity: e.target.value
        })
    }
    onSubmit =async e => {
        e.preventDefault();

        if (this.state.name && this.state.description) {
            await axios.post('http://localhost:3030/api/products',{
                name:this.state.name,
                description:this.state.description,
                actual_price:this.state.actual_price,
                quantity:this.state.quantity
            })
            this.setState({
                name:'',
                description:'',
                actual_price: '',
                quantity:''    
            });
            this.getProducts();
        }else {
            alert("Complete all!");
        }
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>New Product</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" minLength='3'
                            onChange={this.onChangeName}
                            value={this.state.name}></input>
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" className="form-control" id="description" minLength='1'
                            onChange={this.onChangeDesc}
                            value={this.state.description}></input>
                        </div>
                        <div className="form-group">
                            <label for="price">Actual price</label>
                            <input type="number" className="form-control" id="price" min='0'
                            onChange={this.onChangePrice}
                            value={this.state.actual_price}></input>
                        </div>
                        <div className="form-group">
                            <label for="quatity">Quatity</label>
                            <input type="number" className="form-control" id="quatity" min='0'
                            onChange={this.onChangeQuantity}
                            value={this.state.quantity}></input>
                        </div>
                        <button type="submit" className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
            <ul className="list-group">
                {
                    this.state.products.map(product => (
                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={product._id}>
                            {product.name}
                            <span class="badge badge-primary badge-pill">stock:{product.quantity} - ${product.actual_price}</span>
                        </li>
                    ))
                }
            </ul>
            </div>
            </div>
        )
    }
}
