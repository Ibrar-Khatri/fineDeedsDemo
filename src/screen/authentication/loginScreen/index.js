import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default LoginScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Login</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: '#212529',
  },
});
