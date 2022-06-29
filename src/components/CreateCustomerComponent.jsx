import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return;
        }else{
            CustomerService.getCustomerById(this.state.id).then((resp) => {
                let customer = resp.data;
                this.setState({
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    emailId: customer.emailId
                });
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changelastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    saveCustomer = (event) => {
       event.preventDefault();
       let customer = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
       
       if(this.state.id === -1){
            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push("/customers");
            });
       }else{
            CustomerService.updateCustomerDetails(this.state.id, customer).then(res => {
                this.props.history.push("/customers");
            });
       }
    }

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className='text-center'>Add Customer</h3>
        }else{
            return <h3 className='text-center'>Add Customer</h3>
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-6 offset-md-3'>
                            {this.getTitle()}
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changelastNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Email Id: </label>
                                        <input placeholder='EMail Id' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <br></br>
                                    <button className='btn btn-success' onClick={this.saveCustomer}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCustomerComponent;