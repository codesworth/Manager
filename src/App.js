import React, {Component} from 'react';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import Header from './components/layouts/Header';
import About from './components/Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context'
import NotFound from './components/Pages/NotFound';
import Tests from './components/Tests/Tests';
import EditContact from './components/Contacts/EditContact';

class App extends Component {
  render() {

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/contact/edit/:id" component={EditContact}/>
                <Route exact path="/test" component={Tests}/>
                
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;