import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GoogleMapsSec } from "./components/GoogleMapsSec";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={GoogleMapsSec} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
