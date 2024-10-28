import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskEditScreen = ({ route, navigation }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const { task } = route.params;
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('В работе');
  console.log('task', task)

  useEffect(() => {
    if (task && task.id) {
      setTitle(task.title);
      setStatus(task.status); 
    }
  }, [task]);

  const handleSave = () => {
    if (task && task.id) {
      updateTask(task.id, title, status);
    } else {
      addTask(title, status);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>Back</Text></TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Название задачи"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Статус (В работе, Готово, На рассмотрении)"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Сохранить" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { 
    padding: 8, 
    borderBottomWidth: 1, 
    borderColor: '#ddd',
     marginBottom: 16 },
});

export default TaskEditScreen;
