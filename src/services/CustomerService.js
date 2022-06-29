import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerById(id){
        return axios.get(CUSTOMER_API_BASE_URL +"/"+ id);
    }

    updateCustomerDetails(id, customer){
        return axios.put(CUSTOMER_API_BASE_URL +"/"+ id, customer);
    }

}

export default new CustomerService()