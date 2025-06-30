import React from "react";

export default function Main() {
  const [Tasks, setTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);

  const taskElement = Tasks.map((task, index) => {
    return (
      <div className="tasks">
        <li key={task[index]}>{task}</li>
        <button onClick={() => removeTask(index)}>Complete</button>
      </div>
    );
  });

  const completedTaskElement = completedTasks.map((task, index) => {
    return (
      <div className="tasks">
        <li key={task[index]}>{task}</li>
        <button onClick={() => delTask(index)}>Delete</button>
      </div>
    );
  });

  function removeTask(index) {
    const newTasks = [...Tasks];
    const removedTask = newTasks.splice(index, 1);
    setTasks(newTasks);
    setCompletedTasks((prevTask) => {
      return [...prevTask, removedTask];
    });
  }
  function addTask(formData) {
    const task = formData.get("taskName");
    if (task !== "") {
      setTasks((prevTasks) => {
        return [...prevTasks, task];
      });
    }
  }
  function delTask(index) {
    const newTasks = [...completedTasks];
    const removedTask = newTasks.splice(index, 1);
    setCompletedTasks(newTasks);
  }

  return (
    <main>
      <form className="form" action={addTask}>
        <input type="text" name="taskName" placeholder="e.g go to the gym" />
        <button>Add</button>
      </form>
      <h2>You have {Tasks.length} task to complete.</h2>
      <div>
        <ol>{taskElement}</ol>
      </div>
      <h2> You have completed {completedTasks.length} task</h2>
      <div>
        <ol>{completedTaskElement}</ol>
      </div>
    </main>
  );
}
