import React from 'react'
import './App.css';
import {Link,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import NumberContainer from './components/numberContainer';
import ListingUsers from './components/listingUsers';

function App() {
  
  return (
    <div className="App">
      <NumberContainer />
      <BrowserRouter>
      <Link to="/">Home  </Link>
      <Link to="/users">Users</Link>
      <Route path="/users" component={ListingUsers} exact />
      </BrowserRouter>
    </div>
  )
}

export default App;
