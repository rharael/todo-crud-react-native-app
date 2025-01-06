import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { TaskService } from '../services/TaskService';

interface Task {
  id: number;
  task: string;
  isChecked: boolean;
}

interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => void;
  addTask: (task: string) => void;
  removeTask: (taskId: number) => void;
  toggleTaskCheck: (taskId: number, isChecked: boolean) => void;
  editTask: (taskId: number, task: string) => void;
}

interface TaskProviderProps {
  children: ReactNode; 
}

const defaultTaskContext: TaskContextType = {
  tasks: [],
  fetchTasks: () => {},
  addTask: () => {},
  removeTask: () => {},
  toggleTaskCheck: () => {},
  editTask: () => {},
};

export const TaskContext = createContext<TaskContextType>(defaultTaskContext);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(async () => {
    const data = await TaskService.getTasks();
    setTasks(data);
  }, []);

  const addTask = useCallback(async (task: string) => {
    const newTask = await TaskService.createTask(task);
    const taskCheckedStatus = {
      ...newTask,
      isChecked: false,
    };
    setTasks((prevTasks) => [...prevTasks, taskCheckedStatus]);
  }, []);
  

  const removeTask = useCallback(async (taskId: number) => {
    await TaskService.deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const editTask = useCallback(async (taskId: number, task: string) => {
    await TaskService.updateTask(taskId, task);
    setTasks((prevTasks) =>
      prevTasks.map((taskItem) =>
        taskItem.id === taskId ? { ...taskItem, task } : taskItem
      )
    );
  }, []);

  const toggleTaskCheck = useCallback(async (taskId: number, isChecked: boolean) => {
    await TaskService.taskCheck(taskId, isChecked);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, removeTask, editTask, toggleTaskCheck }}>
      {children}
    </TaskContext.Provider>
  );
};
