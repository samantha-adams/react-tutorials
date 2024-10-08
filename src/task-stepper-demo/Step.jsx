import './TaskStepper.css';
import taskList from './tasks.json';

const Step = (props) => {
  const { currentTaskName, currentStepNum } = props;
  const currentTask = taskList.find((task) => task.taskName === currentTaskName);
  const currentTaskSteps = currentTask?.steps || [];
  const currentStep = currentTaskSteps[currentStepNum] || {};
  
  return (
    <div className="stepWrapper">
      <h2>{currentStep.stepName}</h2>
      <div className="stepDetails">
        <p>{currentStep.stepDetails}</p>
        {currentStep.stepImageSrc && (
            <img className="stepImage" src={currentStep.stepImageSrc} />
        )}
      </div>
    </div>
  )
}

export default Step;