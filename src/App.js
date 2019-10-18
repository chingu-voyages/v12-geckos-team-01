/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Bootstrap Imports */
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Router */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* custom components */
// import NewTask from "./components/NewTask";
// import TaskList from "./components/TaskList";

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent";
import TimerDisplay from "./components/TimerDisplay";

/* Pages */
import CreateTaskPage from "./pages/CreateTaskPage";
import RunningTasksPage from "./pages/RunningTasksPage";
import FinishedTasksPage from "./pages/FinishedTasksPage";
import ReportsPage from "./pages/ReportsPage";

/* helper functions */
import { convertSecondsToHMS } from "./util/timetools";

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerId, setTimerId] = useState();
  const currentTime = convertSecondsToHMS(timerDuration);

  // handler for when timer's done button is clicked.
  const timerDone = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      clearInterval(timerId);
      setTimerId(null);
      // console.log(`Timer Done after ${timerDuration} seconds`);
    }
  };

  // test method for starting a timer
  const startTimer = () => {
    let id;
    if (!isTimerRunning) {
      console.log("Starting Timer");
      setTimerDuration(0); // make sure timer is reset each time.
      setIsTimerRunning(true);
      id = setInterval(() => {
        setTimerDuration(prevTime => prevTime + 1);
      }, 1000);
      setTimerId(id);
    } else {
      console.log("Timer already running");
    }
  };

  return (
    <main>
      <Router>
        <Container fluid>
          <Row>
            {/* Bootstrap Column for the sidebar */}
            <Col className="p-0 vh-100" xs={{ span: 12 }} md={{ span: 2 }}>
              <Sidebar />
            </Col>

            {/* Bootstrap Column for the main content */}
            <Col xs={{ span: 12 }} md={{ span: 10 }}>
              {/* <Button variant="outline-primary" onClick={startTimer}>
                Test Timer
              </Button> */}
              <MainContent>
                <Switch>
                  <Route exact path="/" component={CreateTaskPage} />
                  <Route exact path="/reports" component={ReportsPage} />
                  <Route
                    exact
                    path="/runningtasks"
                    component={RunningTasksPage}
                  />
                  <Route
                    exact
                    path="/finishedtasks"
                    component={FinishedTasksPage}
                  />
                </Switch>

                {isTimerRunning && (
                  <TimerDisplay
                    text="Test Timer"
                    hours={currentTime.hours}
                    minutes={currentTime.minutes}
                    seconds={currentTime.seconds}
                    doneCallback={timerDone}
                  />
                )}
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Router>
    </main>
  );
}

export default App;
