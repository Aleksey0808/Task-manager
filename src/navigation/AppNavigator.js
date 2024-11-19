import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskListScreen from '../screens/TaskListScreen';
import TaskEditScreen from '../screens/TaskEditScreen';
import PreviewScreen from '../screens/PreviewScreen';
import HomeScreen from '../screens/HomeScreen';
import Home from "../../assets/icons/Home";
import Task from "../../assets/icons/Task";
import HomeFocused from "../../assets/icons/HomeFocused";
import TaskFocused from "../../assets/icons/TaskFocused";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color }) => (
          focused ? <HomeFocused  /> : <Home />
        ),
        headerShown: false,
      }}
       />
      <Tab.Screen 
      name="Tasks" 
      component={TaskListScreen} 
      options={{
        tabBarIcon: ({ focused, color }) => (
          focused ? <TaskFocused  /> : <Task  />
        ),
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="EditTask" component={TaskEditScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
