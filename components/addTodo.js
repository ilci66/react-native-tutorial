import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');
  
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new todo...'
        // onChangeText={(val) => changeHandler(val)} 
        // don't even need to give it an argument, does the same as the one above 
        onChangeText={changeHandler} 
        value={text} 
      />
    {/* the argument of the handler here is the target item's value, no need to include event and stuff */}
      <Button color='coral' onPress={() => submitHandler(text)} title='add todo' />
      {/* cannot really style the buttons but there are still small things that can be changed, like color in this example */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});