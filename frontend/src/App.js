import React from 'react';
import Home from "./pages/Home.js"
import Error404 from "./pages/Error404.js"
import Cities from "./pages/Cities.js"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Itineraries from './pages/Itineraries.js';
import SignIn from './pages/SignIn.js';
import LogIn from './pages/Login.js';
import MyAccount from './pages/MyAccount.js'
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions.js';


class App extends React.Component {
  render() {
    if (this.props.newToken) {
      var myRoutes = (<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/itineraries/:id" component={Itineraries} />
        <Route path="/error" component={Error404} />
        <Route path="/account" component={MyAccount} />
        <Redirect to="/" />
      </Switch>)
    } else if (localStorage.getItem('token')) {
      this.props.forcedLogin(localStorage.getItem('token'))
    } else {
      var myRoutes = (< Switch >
        <Route path="/error" component={Error404} />
        <Route path="/signup" component={SignIn} />
        <Route path="/login" component={LogIn} />
        <Redirect to="/login" />
      </Switch >
      )
    }

    return (
      <>
        <BrowserRouter>
          {myRoutes}
        </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newToken: state.user.token
  }
}

const mapDispatchToProps = {
  forcedLogin: userActions.forcedLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
