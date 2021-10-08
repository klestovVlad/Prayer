import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export const LoadIcon = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={'#72A8BC'} />
  </View>
);
