
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import Profile from './components/Profile';
import AddCustomer from './components/AddCustomer';
import LoginSignup from './components/LoginSignup';
import Outline from './components/Outline';
import CustomerList from './components/CustomerList';
import Customerbill from './components/Customerbill';
import Billsummary from './components/Billsummary';
import GeneratedBills from './components/GeneratedBills';
import UpdateCustomer from './components/UpdateCustomer';

function App() {
  return(
    <>
  <div>
    <Routes>
    <Route path='/' element={<LoginSignup/>}/>
    </Routes>
     <Outline/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/addcustomer' element={<AddCustomer/>}/>
    <Route path='/customerlist' element={<CustomerList/>}></Route>
    <Route path='/generatedbills' element={<GeneratedBills/>}></Route>
    <Route path='/customerlist/customerbill' element={<Customerbill/>}></Route>
    <Route path='/customerlist/customerbill/billsummary' element={<Billsummary/>}></Route>
    <Route path='/generatedbills/billsummary' element={<Billsummary/>}></Route>
    <Route path='/customerlist/updatecustomer' element={<UpdateCustomer/>}></Route>
  </Routes>
  </div>
  </>
  );
}

export default App;
