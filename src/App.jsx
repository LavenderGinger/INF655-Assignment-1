import './App.css'
import React from "react";
import Greeting from "./Greetings";
import UserInfo from "./UserInformation";
import Task from "./TaskComponents";

function App() {

  return (
    <>
      <div>
      <Greeting />
      <UserInfo />
      <Task />
    </div>
    </>
  )
}

export default App
