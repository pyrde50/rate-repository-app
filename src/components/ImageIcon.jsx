import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ImageIcon = (url) => {
    const finalUrl = url.url;
    return (
        <View>
            <Image style={styles.logo} source={{uri: finalUrl,}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 40,
        paddingRight: 10
    }
  });

  export default ImageIcon;