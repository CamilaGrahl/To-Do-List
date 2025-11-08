import { Task } from './types';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Box, Typography } from '@mui/material';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  function addTask(text: string) {
    const inputFree = text.trim();
    if (inputFree === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: inputFree,
      done: false,
    };

    setTasks([newTask, ...tasks]);
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t: Task) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ marginTop: 50 }}
    >
      <Typography variant="h4" gutterBottom>
        <strong>To Do List</strong>
      </Typography>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </Box>
  );
}

export default App;
