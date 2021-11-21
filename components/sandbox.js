import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    paddingTop: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 10,
    // push at to the end
    alignSelf: 'flex-end',
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    // flex property is kinda weird, when it's 1 it takes as much space as possible, when there are otheritems 
    // at the same level, it changes their sizes in comparison, like the grid's fr system
    flex: 2,
    backgroundColor: 'skyblue',
    padding: 10,
    alignSelf: 'flex-start',
  }
});