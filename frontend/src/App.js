import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import SalesList from './components/SalesList';
import Navigation from './components/Navigation';
import ClientsList from './components/ClientsList';
import ProductsList from './components/ProductsList';
import EmployeesList from './components/EmployeesList';


function App() {
  return (
    <Router>

      <Navigation/>

      <Route path="/sales" exact component={SalesList}/>
      <Route path="/clients" exact component={ClientsList}/>
      <Route path="/products" exact component={ProductsList}/>
      <Route path="/employees" exact component={EmployeesList}/>
    </Router>
  );
}

export default App;
