import { useState } from 'react';
import { Flex } from '@mantine/core';
import TaskList from './TaskList';
import Stepper from './Stepper';

const TaskStepper = () => {
  const [currentTaskName, setCurrentTaskName] = useState(null);

  return (
    <Flex>
      <TaskList currentTaskName={currentTaskName} setCurrentTaskName={setCurrentTaskName} />
      <Stepper currentTaskName={currentTaskName} />
    </Flex>
  );
}

export default TaskStepper;