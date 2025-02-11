import React from "react";

class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        "Completing Coding Assignments",
        "Learn JSX",
        "Complete Chores",
        "Eat Dinner",
        "Sleep",
      ],
    };
  }

  getRandomTask = () => {
    const randomTask = Math.floor(Math.random() * this.state.tasks.length);
    return this.state.tasks[randomTask];
  };

  render() {
    const randomTask = this.getRandomTask();
    return (
      <div>
        <h1>The Task Generator</h1>
        <h2>Your task is: {randomTask}</h2>
      </div>
    );
  }
}

export default Task;