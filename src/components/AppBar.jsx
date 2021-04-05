import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+20,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingTop: 3,
    paddingLeft: 10
  },

});

const AppBar = () => {
  return (
    
    <Pressable onPress={() => console.log('pressed')}>
      <View style={styles.container}>
        <ScrollView horizontal> 
        <Link to="/">
            <Text style={styles.text}><AppBarTab/></Text>
          </Link>
          <Link to="/signIn">
           <Text style={styles.text}>Sign In</Text>
          </Link>
        </ScrollView>
      </View>
    </Pressable>
    );
};

export default AppBar;