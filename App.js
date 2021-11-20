import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  // I used the index argument given by the map instead of the keys HermesInternal, both works
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);


  return (
    <View style={styles.container}>
      {/* when scrollview is not wrapped it dones't even scroll, weird */}
      <ScrollView>
        {
          people.map((item, i) => (
            <View key={i}>
              <Text style={styles.item}>{item.name}, {i}</Text>
            </View>
          ))
        }
      </ScrollView>
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
  item:{
    marginTop: 34,
    padding: 20,
    backgroundColor: 'red',
    fontSize: 24
  }
});