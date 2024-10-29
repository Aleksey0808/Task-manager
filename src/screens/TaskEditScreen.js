import React, { useContext, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { TaskContext } from '../context/TaskContext';
import Back from "../../assets/icons/Back";

const TaskEditScreen = ({ route, navigation }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const task = route.params?.task; 
  const [title, setTitle] = useState(task ? task.title : ''); 
  const [status, setStatus] = useState(task ? task.status : 'Выберите статус'); 
  const [isOpen, setIsOpen] = useState(false);

  const items = ['В работе', 'В ожидании', 'Готово'];

  const handleSelectItem = (item) => {
    setStatus(item);
    setIsOpen(false);
  };

  const handleSave = () => {
    if (task && task.id) {
      updateTask(task.id, title, description, status); 
    } else {
      addTask(title, status); 
    }
    navigation.navigate("Tasks")
  };

  const handleOutsidePress = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Tasks")}>
        <Back />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Название задачи"
          value={title}
          onChangeText={setTitle}
          autoFocus 
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
      </View>
      <View style={styles.addButtonContainer}>
        <Button title="Сохранить" onPress={handleSave} />
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa',
  },
  back: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1, 
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: { 
    width: '100%',
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: '#ddd',
    fontSize: 18, 
    marginBottom: 16,
  },
  wrapper: {
    width: '100%',
    position: 'relative', 
  },
  header: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  headerText: {
    fontSize: 18, 
  },
  dropdown: {
    position: 'absolute', 
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 8,
    width: '100%',
    zIndex: 2, 
  },
  item: {
    padding: 12,
  },
  itemText: {
    fontSize: 16, 
  },
  addButtonContainer: {
    marginTop: 20, 
    marginBottom: 20, 
    width: '100%', 
  },
});

export default TaskEditScreen;
