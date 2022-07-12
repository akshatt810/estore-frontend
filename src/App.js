import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LaptopList from "./components/LaptopList";
import ScreenList from "./components/ScreenList";
import MobileList from "./components/MobileList";
import TabletList from "./components/TabletList";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Dialogue from "./components/Dialogue";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
          <Route path={process.env.PUBLIC_URL + "/register"} component={Register} />
          <Route path={process.env.PUBLIC_URL + "/laptops"} component={LaptopList} />
          <Route path={process.env.PUBLIC_URL + "/screens"} component={ScreenList} />
          <Route path={process.env.PUBLIC_URL + "/smartphones"} component={MobileList} />
          <Route path={process.env.PUBLIC_URL + "/tablets"} component={TabletList} />
          <Route path={process.env.PUBLIC_URL + "/details"} component={Details} />
          <Route path={process.env.PUBLIC_URL + "/cart"} component={Cart} />
          <Route component={Default} />
        </Switch>
        <Dialogue />
      </>
    );
  }
}

export default App;
