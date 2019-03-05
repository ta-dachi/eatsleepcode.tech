import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

class Links extends React.Component {
  render() {
    return (
      <div>
        <a href="/pwa/dir-tree-web-visual/dist/">Click Me</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ResponsiveDrawer />
        <div>
          <Links />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
