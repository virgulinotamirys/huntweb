import React, { Component } from "react";
import Routes from './routes.js';

import "./styles.css";


import Header from "./components/header";
import Main from "./pages/main";

//import React from 'react';

/*function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}*/

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
