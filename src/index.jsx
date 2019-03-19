import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import app from "firebase/app";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }

// export default Firebase;

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
