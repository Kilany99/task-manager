import React, { createContext, useState, useContext } from 'react';
import { Task } from './models/Task';

// Define the shape of our context
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

// Create context with null as initial value
const TaskContext = createContext<TaskContextType | null>(null);

interface TaskProviderProps {
  children: React.ReactNode;
}

/**
 * TaskProvider component that manages all task-related state.
 * Wraps the app and provides task operations to all child components.
 */
export const TaskProvider = ({ children }: TaskProviderProps) => {
  // Main state holding all tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  /**
   * Adds a new task to the task list
   * @param task - The task object to add
   */
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  /**
   * Toggles the completion status of a task
   * @param taskId - The ID of the task to toggle
   */
  const toggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  };

  /**
   * Removes a task from the list
   * @param taskId - The ID of the task to delete
   */
  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

/**
 * Custom hook to access task context.
 * Throws an error if used outside of TaskProvider.
 */
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};