import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';
import { TaskList } from '../components/TaskList';

const TaskListScreen = () => {
  const { tasks } = useContext(TaskContext);
  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState("In progress");

  const onCategoriesBtnClick = (status, index) => {
    setSelectedStatus(status);
    setSelectedId(index);
  };

  const categories = ["In progress", "Pending", "Ready"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <FlatList
          contentContainerStyle={{ justifyContent: 'space-between', paddingTop: 10, paddingHorizontal: 10, width: "100%" }}
          horizontal
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              style={[
                styles.categoryButton,
                selectedId === index && styles.activeCategoryButton
              ]}
              activeOpacity={0.8}
              onPress={() => onCategoriesBtnClick(item, index)}
            >
              <Text 
                style={[
                  styles.categoryButtonText,
                  selectedId === index && styles.activeCategoryButtonText
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TaskList status={selectedStatus} />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('EditTask')}
      >
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#d48a3f',
  },
  buttonContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  activeCategoryButton: {
    borderColor: '#000', 
  },
  activeCategoryButtonText: {
    flex: 1,
    color: '#000',  
    width: 100,
  },
  addButtonContainer: {
    marginTop: 'auto', 
    marginBottom: 20, 
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

export default TaskListScreen;
