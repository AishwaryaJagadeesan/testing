import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login.Jsx";

function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        .

      </header> */}
      <Switch>
        <Routes>
          <Route path='/' exact Component={Login}></Route>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
