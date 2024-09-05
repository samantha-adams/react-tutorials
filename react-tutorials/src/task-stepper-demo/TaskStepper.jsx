import { useState } from 'react';
import styles from './TaskStepper.css';
import TaskList from './TaskList';
import Stepper from './Stepper';

const TaskStepper = () => {
  const [currentTaskName, setCurrentTaskName] = useState(null);

  return (
    <div className="taskStepperWrapper">
      <TaskList currentTaskName={currentTaskName} setCurrentTaskName={setCurrentTaskName} />
      <Stepper currentTaskName={currentTaskName} />
    </div>
  );
}

export default TaskStepper;