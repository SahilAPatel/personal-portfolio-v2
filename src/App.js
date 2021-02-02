import "./App.css";
import React, { useState, useEffect } from "react";
import home from "./components/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
