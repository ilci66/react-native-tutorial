import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // view is like div
    <View style={styles.container}>
      <Text>wassap!!</Text>
      <Text>Hello !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// this is how react-native emulates the css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
