import { useState } from 'react';
import './App.css';
import SimpleSVGHover from './simple-svg-hover/SimpleSVGHover';
import TaskStepper from './task-stepper-mantine-demo/TaskStepper';
import { Button } from '@mantine/core';

const views = [
  { name: "taskStepper", component: <TaskStepper /> },
  { name: "simpleSVG", component: <SimpleSVGHover /> },
];

function App() {
  const [currentView, setCurrentView] = useState('taskStepper');

  return (
    <div className="App">
      <div className="AppSwitch">
        {views.map(({ name }) => (
          <Button 
            key={name} 
            color="cyan"
            disabled={currentView === name}
            size="xl"
            onClick={() => setCurrentView(name)}
          >
            {name}
          </Button>
        ))}
      </div>
      {views.find(({ name }) => currentView === name )?.component}
    </div>  
  );
}

export default App;
