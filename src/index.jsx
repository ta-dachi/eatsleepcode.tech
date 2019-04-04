import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { MuiThemeProvider } from "@material-ui/core/styles";
// My Components
import App from "./components/App";
// MobX
import { observer, Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import UIStore from "./store/UIStore";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  UIStore: UIStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

@observer
class Root extends React.Component {
  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <MuiThemeProvider theme={UIStore.theme}>
            <App />
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));
