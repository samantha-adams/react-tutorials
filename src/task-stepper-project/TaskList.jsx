import './TaskStepper.css';
import taskList from './tasks.json';

const TaskList = (props) => {
  /* TODO: Extract the variables currentTaskName and setCurrentTaskName from props */

  return (
    <div className="taskListWrapper">
      <h1 className="taskListHeader">Tasks</h1>
      {taskList.map((task) => (
        <div 
          className={currentTaskName === task.taskName ? "task active" : "task"}
          key={task.taskName}
          onClick={} /* TODO: Pass a function to this onClick handler to set the currentTaskName state variable to this element's task name (task.taskName) */
        >
          {task.taskName}
        </div>
      ))}
    </div>
  )
}

export default TaskList;