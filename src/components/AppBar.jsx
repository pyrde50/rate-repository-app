import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+20,
    backgroundColor: '#24292e',
    
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    
  },
});

const AppBar = () => {
  return (
    <Pressable onPress={() => console.log('pressed')}>
      <View style={styles.container}>
        <Text style={styles.text}><AppBarTab/></Text>
      </View>
    </Pressable>
    );
};

export default AppBar;