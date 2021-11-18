import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/CreateEmployeeComponent';
import ViewEmployee from './pages/ViewEmployeeComponent';
import UpdateEmployee from './pages/UpdateEmployeeComponent';
import ListEmployee from './pages/ListEmployeeComponent';
import InternList from './pages/InternListComponent';
import AddLeave from './pages/AddLeave';
import Message from './pages/MessageComponent';
import Support from './pages/SupportComponent';
import Team from './pages/TeamComponent';
import ContactUs from './pages/Contactus';
import Footer1 from './components/Footer1';
import LeaveListComponent from './pages/Leave/LeaveListComponent';
import AddLeaveForm from './pages/Leave/AddLeaveFormComponent';
import Meet from './components/Meet';
import OfferLetter from './components/OfferLetter';
import Certificate from './components/Certificate';
import ProjectAssign from './pages/Project/ProjectAssign';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/employees' component={ListEmployee} />
          <Route path='/addEmployee' component={AddEmployee} />
          <Route path='/viewEmployee/:id' component={ViewEmployee} />
          <Route path='/updateEmployee/:id' component={UpdateEmployee} />
          <Route path='/internslist' component={InternList} />
          <Route path='/AddLeave' component={AddLeave} />
          <Route path='/messages' component={Message} />
          <Route path='/support' component={Support} />
          <Route path='/team' component={Team} />
          <Route path='/contactus' component={ContactUs} />
         <Route path='/leave' component={LeaveListComponent}/>
         <Route path='/addLeaveForm' component={AddLeaveForm}/>
         <Route path='/meet' component={Meet}/>
         <Route path='/offerLetter' component={OfferLetter}/>
         <Route path='/certificate' component={Certificate}/>
         <Route path='/projectassign' component={ProjectAssign}/>
        </Switch>
        <Footer1 />
      </Router>
    </>
  );
}

export default App;