import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // just like in react
  const [name, setName] = useState("Ryu");
  const [abilities, setAbilities] = useState({speacial:"Hado-Ken", normal: "kicks real hard" })

  const changeFighter = () => {
    setName("Raiden");
    setAbilities({ speacial: "Elecricity Stuff", normal:"punches really hard" });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Your Fighter is: {name}</Text>
        <Text>He / She {abilities.normal} and can do {abilities.speacial}</Text>
      </View>
      {/* can't style the button but can style this view */}
      <View style={styles.marginTop}>
        {/* I can't change style properties of this button as I imported it and somehow it is the rule */}
        {/* Butt apparently I will be creating something in the future to mimic the button  */}
        <Button title="Change Fighter" onPress={changeFighter}/>
      </View>
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
    marginTop:{
      marginTop: 50,
    }
});
