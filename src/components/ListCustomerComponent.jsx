import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data });
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }

    editCustomer(id){
        this.props.history.push(`/update-customer/${id}`);
    }

    deleteCustomer(){

    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Customer List</h2>
                <div className='col'>
                    <button className='btn btn-primary' onClick={ this.addCustomer }>Add Customer</button>
                </div>
                <br></br>
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
                                            <td>
                                                <button onClick={() => this.editCustomer(customer.id)} className="btn btn-info">Update</button>
                                                <button onClick={() => this.deleteCustomer(customer.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                            </td>
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