import './TaskStepper.css';
import taskList from './tasks.json';

const Step = (props) => {
  const { currentTaskName, currentStepNum } = props;
  const currentTask = taskList.find((task) => task.taskName === currentTaskName);
  const currentTaskSteps = currentTask?.steps || [];
  const currentStep = currentTaskSteps[currentStepNum] || {};
  
  return (
    <div className="stepWrapper">
      <h2>{/* TODO: Display the current step's name (stepName) */}</h2>
      <div className="stepDetails">
        <p>{currentStep.stepDetails}</p>
        {currentStep.stepImageSrc && (
          /* TODO: Display the current step's image (stepImageSrc) using an <img> tag with the className "stepImage" */
        )}
      </div>
    </div>
  )
}

export default Step;