import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (error) {
      console.log("Ошибка загрузки задач: ", error);
    }
  };

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.log("Ошибка сохранения задач: ", error);
    }
  };

  const addTask = (title, status) => {
    const newTask = { id: nanoid(), title, status };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (id, title, status) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title, status } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
