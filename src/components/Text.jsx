import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flexWrap: 'wrap'
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
    flexShrink: 1
  },
  colorPrimary: {
    color: theme.colors.primary,
    flexWrap: 'wrap'
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
    flexWrap: 'wrap'
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
    flexWrap: 'wrap'
  },
  colorWhite: {
    color: theme.colors.white,
    flexWrap: 'wrap'

  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    color == 'white' && styles.colorWhite,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;