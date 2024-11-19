import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { TaskProvider } from './src/context/TaskContext';
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

const App = () => {
  const getPermission = async () => {
    if (AppState.currentState === "active") {
      await requestTrackingPermissionsAsync();
    } else {
      setTimeout(() => getPermission(), 100);
    }
  };

  useEffect(() => {
    getPermission();
  }, []);
  
  return (
    <TaskProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
