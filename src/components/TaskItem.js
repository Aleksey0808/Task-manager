// TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onEdit(task)} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskItem;
