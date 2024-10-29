import React from 'react';
import { 
  View, 
  Text,
   Button, 
   StyleSheet, 
   ImageBackground, 
   TouchableOpacity, 
   Image, 
  } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end', 
      alignItems: 'center',
      },
      logoContainer: {
        position: 'absolute', 
        top: '30%', 
        alignItems: 'center', 
      },
      logo: {
        width: 250, 
        height: 250, 
      },
      buttonContainer: {
        marginBottom: 50,
      },
      gradientBorder: {
        borderWidth: 2,
        borderRadius: 50, 
        padding: 5, 
        marginBottom: 60,
      },
      button: {
        backgroundColor: '#6EBCF7',
        borderRadius: 50, 
        paddingVertical: 15,
        paddingHorizontal: 50,
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', 
        textAlign: 'center', 
      },
    });