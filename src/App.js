import React, { Component } from "react";
import { CardListExample, FormExample } from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <main className="container">
          {/* <CardListExample /> */}
          <FormExample />
        </main>
      </>
    );
  }
}
