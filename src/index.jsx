import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ResponsiveDrawer />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
