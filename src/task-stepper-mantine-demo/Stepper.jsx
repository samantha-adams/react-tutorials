import { useEffect, useState } from 'react';
import Step from './Step.jsx';
import taskList from './tasks.json';
import { Stepper as MantineStepper } from '@mantine/core';

const Stepper = (props) => {
  const { currentTaskName } = props;
  
  const savedProgress = JSON.parse(localStorage.getItem('progress'));
  const currentTaskProgress = savedProgress?.[currentTaskName] || {};
  const currentTask = taskList.find((task) => task.taskName === currentTaskName);
  const currentTaskSteps = currentTask?.steps || [];
  
  const savedStepNum = currentTaskProgress.currentStepNum || 1;
  const [currentStepNum, setCurrentStepNum] = useState(savedStepNum);
  
  const currentStep = currentTaskSteps[currentStepNum] || {};

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
    <MantineStepper color="teal" active={currentStepNum} size="lg" onStepClick={setCurrentStepNum}>
      {currentTaskSteps.map(({ stepName }, index) => (
        <MantineStepper.Step 
          label={`Step ${index+1}`} 
          description={stepName} 
          key={stepName}
        >
          <Step currentStep={currentStep} />
        </MantineStepper.Step>
      ))}
    </MantineStepper>
  );
}

export default Stepper;
