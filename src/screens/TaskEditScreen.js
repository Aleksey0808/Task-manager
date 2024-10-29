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
  const [description, setDescription] = useState(task ? task.description : ''); 
  const [status, setStatus] = useState(task ? task.status : 'Select status'); 
  const [isOpen, setIsOpen] = useState(false);

  const items = ['In progress', 'Pending', 'Ready'];

  const handleSelectItem = (item) => {
    setStatus(item);
    setIsOpen(false);
  };

  const handleSave = () => {
    if (task && task.id) {
      updateTask(task.id, title, description, status); 
    } else {
      addTask(title, description, status); 
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
          placeholder="Task name"
          placeholderTextColor="#fff"
          value={title}
          onChangeText={setTitle}
          autoFocus 
        />
        <TextInput
          multiline={true}
          style={styles.inputDescription}
          placeholder="Description"
          placeholderTextColor="#fff"
          value={description}
          onChangeText={setDescription}
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
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#d48a3f',
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
  inputDescription: { 
    height: 120,
    width: '100%',
    textAlignVertical: 'top',
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: '#ddd',
    fontSize: 18, 
    marginBottom: 16,
  },
  wrapper: {
    width: '100%',
    position: 'relative', 
    backgroundColor: '#8f5106',
  },
  header: {
    padding: 16,
    backgroundColor: '#8f5106',
    borderRadius: 4,
  },
  headerText: {
    fontSize: 18, 
    color: '#fff',
  },
  dropdown: {
    position: 'absolute', 
    backgroundColor: '#8f5106',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 8,
    width: '100%',
    zIndex: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  item: {
    padding: 12,
    backgroundColor: '#8f5106',
  },
  itemText: {
    fontSize: 18, 
    color: '#fff'
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

export default TaskEditScreen;
