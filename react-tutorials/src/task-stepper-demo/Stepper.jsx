import { useEffect, useState } from 'react';
import Step from './Step.jsx';
import ProgressTracker from './ProgressTracker.jsx';
import styles from './TaskStepper.css';

const Stepper = (props) => {
  const { currentTaskName } = props;
  const savedProgress = JSON.parse(localStorage.getItem('progress'));
  const currentTaskProgress = savedProgress?.[currentTaskName] || {};
  const savedStepNum = currentTaskProgress.currentStepNum || 0;

  const [currentStepNum, setCurrentStepNum] = useState(savedStepNum);

  useEffect(() => {
    if (currentTaskName) {
      const updatedProgress = {
        ...savedProgress,
        [currentTaskName]: { currentStepNum: savedStepNum },
      };
  
      localStorage.setItem('progress', JSON.stringify(updatedProgress));
      setCurrentStepNum(savedStepNum);
    }
  }, [currentTaskName]);

  useEffect(() => {
    if (currentTaskName && currentStepNum != savedStepNum) {
      const updatedProgress = {
        ...savedProgress,
        [currentTaskName]: { currentStepNum },
      };
  
      localStorage.setItem('progress', JSON.stringify(updatedProgress));
    }
  }, [currentStepNum]);
  
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
