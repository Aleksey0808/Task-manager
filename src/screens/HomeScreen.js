import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import bg from '../../assets/images/bg.jpg'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Track Task Flow</Text>
        </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("EditTask")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: '#6c7fe6',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#080808',
  },
  button: {
    marginTop: 'auto', 
    marginBottom: 20,
    backgroundColor: '#785902', 
    paddingVertical: 15, 
    paddingHorizontal: 30,
    borderRadius: 25, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    textAlign: 'center', 
  },
});
