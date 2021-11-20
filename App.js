import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // view is like div
    <View style={styles.container}>
      <View>
        {/* they don't get style porperties from parent elements such as bold texts etc. so for each element I need to define them  */}
        <Text style={styles.header}>this be the title!</Text>
        {/* when there is a text component inside another text component then the child text inerits the style porperties */}
        <Text style={styles.boldText}><Text>example  </Text>First Text</Text>
        
        <Text style={styles.boldText}>Second Text</Text>
        <Text style={styles.boldText}>Third Text</Text>
      </View>

      {/* <StatusBar style="auto" /> */}
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
      header:{
        backgroundColor: 'yellow',
      },
      boldText:{
        fontWeight: 'bold',
        backgroundColor: 'blue',
        color: "white",
        padding: 10
      }
});
