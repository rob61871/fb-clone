import React from "react";
import Header from "./Header";

import { Navbar, Jumbotron, Button } from 'react-bootstrap';

function App(props){
  var myStyledComponentsStyles = {
    backgroundColor: "#ecf0f1",
    fontFamily: "sans-serif",
    paddingTop: "50px"
  }
  return (
    <div style={myStyledComponentsStyles}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
