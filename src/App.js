import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoApp from "./Components/TodoApp"; // Import the TodoApp component

const App = () => {
  return (
    <Container fluid>
      <TodoApp />
    </Container>
  );
};

export default App;
