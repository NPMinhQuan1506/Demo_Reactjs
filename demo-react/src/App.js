// import logo from './logo.svg';
import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

// class App extends Component {
//   render(){
//     return (
//       // <div className="App">
//       //  <h1>This is my first app</h1>
//       // </div>
//       React.createElement("div", {className: "App"}, React.createElement("h1",null, "This is my first app" ))
//     );
//   };
// }
function App() {
  return (
    <>
      <div className="App">
        <h1>This is my first app</h1>
        <Person />
      </div>
    </>
  );
}
export default App;
