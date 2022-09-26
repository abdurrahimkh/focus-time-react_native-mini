import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter Your Focus Item"
          value={subject}
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <View style={styles.button}>
        <RoundedButton  title="+" size={20} onPress={()=>addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection:'row',
  },
  textInput:{
    flex:1,
    marginRight:10,
  },
  button:{
    justifyContent:"center"
  }
});

export default Focus;
