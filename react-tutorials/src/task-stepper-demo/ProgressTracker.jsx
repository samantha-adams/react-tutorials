import styles from './TaskStepper.css';
import taskList from './tasks.json';

const ProgressTracker = (props) => {
  const { currentTaskName, currentStepNum, setCurrentStepNum } = props;

  const currentTask = taskList.find((task) => task.taskName === currentTaskName);
  const currentTaskSteps = currentTask?.steps || [];


  return (
    <div className="progressStepper">
      {currentTaskSteps.map((step, index) => (
        <div 
          className={currentStepNum > index ? "step completed" : (currentStepNum === index ? "step active" : "step disabled")}
          key={step.stepName}
          onClick={() => setCurrentStepNum(index)}
        >
          <div class="step-circle">{index + 1}</div>
          <div class="step-label">{step.stepName}</div>
        </div>
      ))}
    </div>
  )
}

export default ProgressTracker;