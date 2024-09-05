import styles from './TaskStepper.css';
import taskList from './tasks.json';

const TaskList = (props) => {
  const { currentTaskName, setCurrentTaskName } = props;

  return (
    <div className="taskListWrapper">
      <h1 className="taskListHeader">Tasks</h1>
      {taskList.map((task) => (
        <div 
          className={currentTaskName === task.taskName ? "task active" : "task"}
          key={task.taskName}
          onClick={() => setCurrentTaskName(task.taskName)}
        >
          {task.taskName}
        </div>
      ))}
    </div>
  )
}

export default TaskList;