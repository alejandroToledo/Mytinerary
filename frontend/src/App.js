import React from 'react';
import Home from "./pages/Home.js"
import Falla from "./pages/Falla.js"
import Cities from "./pages/Cities.js"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Itineraries from './pages/Itineraries.js';
import SignIn from './pages/SignIn.js';
import LogIn from './pages/Login.js'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/itineraries/:id" component={Itineraries} />
          <Route path="/error" component={Falla} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={LogIn} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
