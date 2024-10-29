import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const navigation = useNavigation();
  // const [selectedId, setSelectedId] = useState(0);
  // const [connection, setConnection] = useState("Майбутні");
  console.log('tasks', tasks)

  const handleEditTask = (task) => {
    // console.log('task', task)
    navigation.navigate('EditTask', { task });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  // const onCategoriesBtnClick = (item: string, index: number) => {
  //   if (item === t("done")) {
  //     setConnection(t("done"));
  //   } else if (item === t("canceled")) {
  //     setConnection(t("canceled"));
  //   }
  //   setConnection(t("future"));
  // };

  // const renderItem = ({ item, index }: { item: string; index: number }) => {
  //   return (
  //     <TouchableOpacity 
  //     style={styles.categoryButton}
  //       activeOpacity={0.8}
  //       onPress={() => onCategoriesBtnClick(item, index)}
  //       active={selectedId === index ? true : false}
  //     >
  //       <CategoryButtonText active={selectedId === index ? true : false}>
  //         {item}
  //       </CategoryButtonText>
  //     </TouchableOpacity>
  //   );
  // };
  // const categories = ["future", "done", "canceled"];
  // return (
  //   <TouchableOpacity
  //     style={styles.categoryButton}
  //     activeOpacity={0.8}
  //     onPress={() => onCategoriesBtnClick(item, index)}
  //     active={selectedId === index ? true : false}
  //   >
  //     <Text style={styles.categoryButtonText} active={selectedId === index ? true : false}>
  //       {item}
  //     </Text>
  //   </TouchableOpacity>
  // );

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.categoryButtonsList}
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
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f8f9fa' 
  },
  categoryButtonsList: {
    padding: 10,
    marginBottom: 10,
    flexGrow: 0,
  },
  categoryButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  categoryButtonText: {
    fontSize: 12,
    fontWeight: 600,
    textAlign: 'center',
    color: 'grey',
  }
});

export default TaskListScreen;
