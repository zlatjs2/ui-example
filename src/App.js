import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CardListExample, FormExample } from "./components";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header className="header">
          <nav className="nav">
            <NavLink exact to="/" className="nav__link">
              카드리스트 UI
            </NavLink>
            <NavLink to="/form" className="nav__link">
              폼 UI
            </NavLink>
          </nav>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={CardListExample} />
            <Route exact path="/form" component={FormExample} />
          </Switch>
        </main>
      </Router>
    );
  }
}
