import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const navigation = useNavigation();
  // console.log('tasks', tasks)

  const handleEditTask = (task) => {
    // console.log('task', task)
    navigation.navigate('EditTask', { task });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={handleDeleteTask} 
            onEdit={handleEditTask} 
          />
        )}
      />
      <Button title="Добавить задачу" onPress={() => handleEditTask()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
});

export default TaskListScreen;
