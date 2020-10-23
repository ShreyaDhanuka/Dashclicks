import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

// // import axios from "axios";
// // import Loading from "./Loading";
// // //import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>React Frontend</h1>
//       </div>
//     );
//   }
// }

export default App;
