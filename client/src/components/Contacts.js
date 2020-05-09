import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default class Contacts extends Component {

    constructor(props) {
        console.log("Contact's Constructor")

        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        console.log("Contact's componentDidMount")

        fetch('http://localhost:8080/api/contacts')
        .then(response => response.json())
        .then(data => this.setState({contacts: data}))
    }

    render() {
        console.log("Contact's return")

        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
