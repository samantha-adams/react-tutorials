import { Title } from '@mantine/core';
import { Button, Stack } from '@mantine/core';

import taskList from './tasks.json';

const TaskList = (props) => {
  const { currentTaskName, setCurrentTaskName } = props;

  return (
    <Stack gap="lg">
      <Title order={1}>Tasks</Title>
      {taskList.map((task) => (
        <Button 
          color="gray"
          variant={currentTaskName === task.taskName ? "outline" : "filled"}
          key={task.taskName}
          onClick={() => setCurrentTaskName(task.taskName)}
        >
          {task.taskName}
        </Button>
      ))}
    </Stack>
  )
}

export default TaskList;