import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../style/colors';

export const LoadIcon = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={colors.blue} />
  </View>
);

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
