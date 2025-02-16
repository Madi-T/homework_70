import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from './components/Calculator';

const App = () => {
  return (
      <View style={styles.container}>
        <Calculator />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;