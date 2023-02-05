import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import HomeCompra from "./pages/Compra/HomeCompra";
import RequisicaoCompra from "./pages/Compra/Requisicao";

import SignUp from "./pages/Adm/SignUp";
import Home from "./pages/Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
    
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/compra" component={HomeCompra} />
      <Route path="/requisicao" component={RequisicaoCompra} />
      
      {/* <PrivateRoute path="/home" component={Home} /> */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;