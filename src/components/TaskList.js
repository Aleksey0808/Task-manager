import React, { useMemo, useContext } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

export const TaskList = ({ status }) => {
  const navigation = useNavigation();
  const { tasks, deleteTask } = useContext(TaskContext);

  const handleEditTask = (task) => {
    navigation.navigate('EditTask', { task });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const selectedConsultationList = useMemo(() => {
    return tasks ? tasks.filter(item => item.status === status) : [];
  }, [tasks, status]);

  return (
    <View style={styles.container}>
      {selectedConsultationList.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={selectedConsultationList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          )}
        />
      ) : (
        <View style={styles.notFoundView}>
          <Text style={styles.notFoundTitle}>Tasks not found</Text>
          <Text style={styles.notFoundText}>You don't have any tasks with this status yet.</Text>
          <View style={{ paddingHorizontal: 24, paddingTop: 36 }}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('EditTask')}
          >
            <Text style={styles.buttonText}>Add a new task</Text>
         </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#d48a3f',
  },
  list: {
    padding: 16,
    gap: 6,
  },
  button: {
    fontSize: 20,
    color: '#fff',
  },
  notFoundView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundTitle: {
    fontWeight: "700",
    marginBottom: 6,
    fontSize: 24,
    textAlign: "center",
  },
  notFoundText: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#8f5106', 
    paddingVertical: 15, 
    paddingHorizontal: 30,
    borderRadius: 25, 
    marginTop: 'auto', 
    marginBottom: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    textAlign: 'center', 
  },
});

export default TaskList;
