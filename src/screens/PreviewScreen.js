import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; 
import * as Updates from "expo-updates";

const PreviewScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

   async function updatetext() {
    const res = await Updates.checkForUpdateAsync();
    if (res.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  useEffect(() => {
    updatetext();
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 6000); 
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <LinearGradient
    colors={['#f4e7d3', '#d2b48c', '#8b4513']}
      style={styles.container}
    >
      <Text style={styles.title}>Контроль Потока Финансов</Text>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default PreviewScreen;
