import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  ThemeProvider
} from "@material-ui/core/styles";
// import { isAuthenticated } from './auth';
import './App.css';
import { theme } from './common';
import Profile from './features/Profile/container'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route {...rest} render={props => (
//       isAuthenticated() ?
//         <Layout><Component {...props} /></Layout>
//         : <Redirect to="/signin" />
//     )} />
//   );
// };

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   return (
//     <Route {...rest} render={props => (
//       isAuthenticated() ?
//         <Redirect to="/" />
//         : <Component {...props} />
//     )} />
//   );
// };

const App = () =>
  <ThemeProvider theme={theme}>
    {/* <Layout> */}
    <Router>
      <Switch>
        <Route component={Profile} path="/" exact />
      </Switch>
    </Router>
    {/* </Layout> */}
  </ThemeProvider>


export default App;