import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import LogInModal from "./components/LogInModal";
import MainThisWeek from "./components/MainThisWeek";
import UploadFile from "./components/UploadFile";
import UploadYourWork from "./components/UploadYourWork";

function App() {
  const [logIn, setLogIn] = useState(true);

  const LogInHandler = () => {
    setLogIn((prevState) => !prevState);
  };

  return (
    <div>
      {logIn ? (
        <LogInModal onClick={LogInHandler} />
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>Tutor Portal</h2>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={LogInHandler}>Log Out</button>
          </div>
          <div className="App">
            <MainThisWeek
              title="What's on This Week"
              // kyesTag="34534"
              // description="Your info text can go here"
            />
            <MainThisWeek
              title="Latest Lessons"
              // description="Put you info text here"
            />
            <MainThisWeek
              title="Student Showcase"
              // description="Your details can go here"
            />
          </div>
          <div className="UploadFileStyle">
            <UploadFile />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
