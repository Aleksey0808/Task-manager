import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskEditScreen = ({ route, navigation }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const { task } = route.params;
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Выберите статус');
  const [isOpen, setIsOpen] = useState(false);

  const items = ['В работе', 'В ожидании', 'Готово'];

  const handleSelectItem = (item) => {
    setStatus(item);
    setIsOpen(false);
  };

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
      <View style={styles.wrapper}>
      <TouchableOpacity style={styles.header} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.headerText}>{status}</Text>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.dropdown}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleSelectItem(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
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
  wrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  header: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  headerText: {
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 8,
  },
  item: {
    padding: 12,
  },
  itemText: {
    fontSize: 14,
  },
});

export default TaskEditScreen;
