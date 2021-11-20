import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Ilker');
  const [age, setAge] = useState('27');

  return (
    <View style={styles.container}>
      {/* the text acts like the container element here for the text inputs */}
      <Text>Enter name:</Text>
      {/* This acts like the form element, without any custiomization appears as blank space  */}
      <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        // There is no event but they will still take value
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='e.g. 99' 
        style={styles.input}
        // well I only want them to enter numbers here so
        keyboardType="numeric"
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.result}>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});