import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    height: 40
  },

  error: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    height: 40,
    borderColor: '#d73a4a'
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle =  [styles.input];
  const textInputError = [styles.error];
  

  return <NativeTextInput style={textInputStyle, error ? textInputError : textInputStyle} {...props} />;
};

export default TextInput;