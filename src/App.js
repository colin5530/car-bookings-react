import React from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

const App = () => {


  return (
    <div className="App">
      <h1>Car Bookings</h1>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/profile/:id'>
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
