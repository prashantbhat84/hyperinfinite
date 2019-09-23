import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={home}>
      <Text>Screen is shown only once logged in</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
