import { React, Component } from 'react';
import axios from 'axios';

export default class ClientsList extends Component {

    state = {
        clients: []
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:3030/api/clients');

        this.setState({clients:res.data});
    }

    render() {
        return (
            <div className="container-md">

            </div>
        )
    }
}
