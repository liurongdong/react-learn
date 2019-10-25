import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Xiaojiejie from "./xiaojiejie";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Xiaojiejie">Xiaojiejie</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Xiaojiejie">
            <Xiaojiejie />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>{/* <Link to="/"></Link> */}</li>
    //         <li>
    //           <Link to="/login"></Link>
    //         </li>
    //         <li>
    //           <Link to="/Xiaojiejie"></Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/Xiaojiejie">
    //         <Xiaojiejie />
    //       </Route>
    //       <Route path="/">
    //         <App />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
