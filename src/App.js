import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// switch will make sure that only one component is rendered at a time
// when ever we want to render we go inside browserRouter
import ListCustomerComponent from './components/ListCustomerComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
                <Route path = "/" element = {<ListCustomerComponent/>}></Route>
                <Route path = "/customers" element = {<ListCustomerComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
