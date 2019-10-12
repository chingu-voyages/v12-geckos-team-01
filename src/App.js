import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Bootstrap Imports */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

/* custom components */
// import Sidebar from "./components/Sidebar";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList"

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const clickHandler = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <main>
      <Container fluid>
        <Row>
          <Col
            className="vh-100 bg-primary"
            xs={{ span: 12, order: 2 }}
            md={{ span: 2, order: 1 }}
          >
            <h1 className="text-white">Sidebar</h1>
            <TaskList/>
          </Col>

          <Col xs={{ span: 12, order: 1 }} md={{ span: 10, order: 2 }}>
            <h1>Create A Task</h1>
            <Button onClick={clickHandler}>Click Me!</Button>

            <Alert show={isAlertVisible} variant="success">
              <Alert.Heading>You clicked the button!</Alert.Heading>
              <p>Click the button to close this alert.</p>
              <Button onClick={clickHandler}>Close</Button>
            </Alert>
            <NewTask/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
