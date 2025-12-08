import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const HelloWorldApp = () => {
  // State variable (though not strictly needed for this simple example)
  const [message, setMessage] = useState('');
  
  // Function to handle button press
  const handleButtonPress = () => {
    Alert.alert('Hello', 'Hello World!');
    setMessage('Hello World!');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World App</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
      
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

// Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 20,
    color: '#28a745',
    fontWeight: 'bold',
  },
});

export default HelloWorldApp;