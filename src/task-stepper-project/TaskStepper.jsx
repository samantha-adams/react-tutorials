import { useState } from 'react';
import './TaskStepper.css';
import TaskList from './TaskList';
import Stepper from './Stepper';

const TaskStepper = () => {
  /* TODO With the useState hook, create a state variable called "currentTaskName" and a setter function called "setCurrentTaskName". The initial value for currentTaskName should be null, undefined, or an empty string. */

  return (
    <div className="taskStepperWrapper">
      {/* TODO Render the TaskList component before the Stepper component. 
      Pass TaskList two props: "currentTaskName" and "setCurrentTaskName". 
      These props should be set to the state variable and setter functions created above. */}
      <Stepper currentTaskName={currentTaskName} />
    </div>
  );
}

export default TaskStepper;