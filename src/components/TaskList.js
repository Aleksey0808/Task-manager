import React, { useMemo, useContext } from "react";
import { View, FlatList, StyleSheet, Text, Button } from "react-native";
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
          <Text style={styles.notFoundTitle}>Задачи не найдены</Text>
          <Text style={styles.notFoundText}>У вас пока нет задач с таким статусом</Text>
          <View style={{ paddingHorizontal: 24, paddingTop: 36 }}>
            <Button
              title="Добавить новую задачу"
              onPress={() => navigation.navigate("Tasks")}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff",
  },
  list: {
    padding: 16,
    gap: 6,
  },
  notFoundView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundTitle: {
    fontWeight: "700",
    marginBottom: 6,
    fontSize: 20,
    textAlign: "center",
  },
  notFoundText: {
    textAlign: "center",
  },
});

export default TaskList;
