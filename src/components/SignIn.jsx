import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'length must be at least 4 characters')
    .required('username is required'),
  password: yup
    .string()
    .min(6, 'Password length must be at least 6 characters')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {

  return (
  <View style={styles.container}>
    <View style={styles.input}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
        <Pressable onPress={() => onSubmit()} style={styles.button}>
          <Text color='white'>Sign In</Text>
        </Pressable>
        </View>
      </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  button: {
    backgroundColor: theme.colors.blue,
    padding: 10,
    margin: 15,
    height: 40,
 },
});

export default SignIn;