import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { MuiThemeProvider } from "@material-ui/core/styles";
import dark from "./themes/dark";
// Mob-X
import { observable } from "mobx";
import { observer } from "mobx-react";

const history = createBrowserHistory();

var appState = observable({
  timer: 0
});

setInterval(() => {
  console.log(appState.timer);
  appState.timer += 1;
}, 1000);

appState.resetTimer = function() {
  appState.timer = 0;
};

@observer
class App extends React.Component {
  componentWillMount() {}

  componentWillUnmount() {}

  onReset() {
    this.props.appState.resetTimer();
  }

  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
      // <Router history={history}>
      //   <MuiThemeProvider theme={dark}>
      //     <ResponsiveDrawer />
      //   </MuiThemeProvider>
      // </Router>
    );
  }
}

ReactDOM.render(<App appState={appState} />, document.getElementById("app"));
