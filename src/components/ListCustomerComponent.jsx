import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Customer List</h2>
                <div className='row'>                    
                    <table className='table table-striped table-bordered'>
                        <thead>

                            <tr>
                                <th> Customer First Name </th>
                                <th> Customer Last Name </th>
                                <th> Customer Email Id </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer => (
                                        <tr key = {customer.id}>
                                            <td> {customer.firstName}</td>
                                            <td> {customer.lastName}</td>
                                            <td> {customer.emailId}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCustomerComponent;