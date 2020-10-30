import { React, Component } from 'react';
import axios from 'axios';

export default class ClientsList extends Component {

    state = {
        clients: [],
        name:"",
        curp:"",
        rfc:"",
        address:"",
        phone_number:"",
        email:""
    };


    async componentDidMount() {
        this.getClients();
        console.log(this.state.clients);
    }

    getClients = async () =>{
        const res = await axios.get('http://localhost:3030/api/clients');
        this.setState({clients:res.data});
    }
    onChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    onChangeCurp = (e) =>{
        this.setState({
            curp: e.target.value
        })
    }
    onChangeRfc = (e) =>{
        this.setState({
            rfc: e.target.value
        })
    }
    onChangeAddress = (e) =>{
        this.setState({
            address: e.target.value
        })
    }
    onChangePhone_number = (e) =>{
        this.setState({
            phone_number: e.target.value
        })
    }
    onChangeEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }
    onSubmit = async e => {
        e.preventDefault();

        if (this.state.name && this.state.curp.length
            && this.state.rfc.length && this.state.phone_number.length>=10
            && this.state.address.length>5) {
            await axios.post('http://localhost:3030/api/clients',{
                name:this.state.name,
                curp:this.state.curp,
                rfc:this.state.rfc,
                address:this.state.address,
                phone_number:this.state.phone_number,
                email:this.state.email
            })
            this.setState({
                name:"",
                curp:"",
                rfc:"",
                address:"",
                phone_number:"",
                email:""   
            });
            this.getClients();
        }else {
            alert("Complete all!");
        }
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>New Client</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label for="name">Personal information</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" minLength="5"
                            onChange={this.onChangeName}
                            value={this.state.name}></input><br/>
                            <input type="text" className="form-control" id="curp" placeholder="CURP"
                            onChange={this.onChangeCurp}
                            value={this.state.curp}></input><br/>
                            <input type="text" className="form-control" id="address" placeholder="Address"
                            onChange={this.onChangeAddress}
                            value={this.state.address}></input><br/>
                            <input type="text" className="form-control" id="rfc" placeholder="RFC"
                            onChange={this.onChangeRfc}
                            value={this.state.rfc}></input>
                        </div>
                        <div className="form-group">
                            <label for="contact">Contact</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"
                            onChange={this.onChangeEmail}
                            value={this.state.email}></input><br/>
                            <input type="text" className="form-control" id="phone_number" placeholder="Phone number"
                            onChange={this.onChangePhone_number}
                            value={this.state.phone_number}></input>
                        </div>
                        <button type="submit" className="btn btn-success">Save</button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                {
                    this.state.clients.map(client => (
                        <li className="list-group-item list-group-item-action" key={client._id}>
                            {client.name}
                        </li>
                    ))
                }
                </ul>
            </div>
            </div>
        )
    }
}
