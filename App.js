import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { TaskProvider } from './src/context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
