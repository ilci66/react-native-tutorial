import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Well it's a basic component

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});