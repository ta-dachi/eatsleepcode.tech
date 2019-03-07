import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <ResponsiveDrawer />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
