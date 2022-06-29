import React, { Component } from 'react';

class CreateCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
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
       console.log('customer : ' + JSON.stringify(customer)); 
    }

    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-6 offset-md-3'>
                            <h3 className='text-center'>Add Customer</h3>
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