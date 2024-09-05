import { useEffect, useState } from 'react';
import Step from './Step.jsx';
import ProgressTracker from './ProgressTracker.jsx';
import styles from './TaskStepper.css';

const Stepper = (props) => {
  /* TODO extract the variable "currentTaskName" from props */

  const savedProgress = JSON.parse(localStorage.getItem('progress'));
  const currentTaskProgress = savedProgress?.[currentTaskName] || {};
  const savedStepNum = currentTaskProgress.currentStepNum || 0;

  /* TODO With the useState hook, create a state variable called "currentStepNum" and a setter function called "setCurrentStepNum". The initial value for currentStepNum should be savedStepNum. */

  useEffect(() => {
    if (currentTaskName) {
      const updatedProgress = {
        ...savedProgress,
        [currentTaskName]: { currentStepNum: savedStepNum },
      };
  
      localStorage.setItem('progress', JSON.stringify(updatedProgress));
    
      /* TODO Call a function to update the currentStepNum state variable to savedStepNum */

    }
  }, []); /* TODO Add the correct state variable to this useEffect hook's dependency array. This should run every time the task name changes. */

  useEffect(() => {
    if (currentTaskName && currentStepNum != savedStepNum) {
      const updatedProgress = {
        ...savedProgress,
        [currentTaskName]: { currentStepNum },
      };
  
      localStorage.setItem('progress', JSON.stringify(updatedProgress));
    }
  }, []); /* TODO Add the correct state variable to this useEffect hook's dependency array. This should run every time the current step number changes. */
  
  return (
    <div className="stepperWrapper">
      <ProgressTracker 
        currentTaskName={currentTaskName} 
        currentStepNum={currentStepNum} 
        setCurrentStepNum={setCurrentStepNum} 
      />
      <Step currentTaskName={currentTaskName} currentStepNum={currentStepNum} />
    </div>
  );
}

export default Stepper;
