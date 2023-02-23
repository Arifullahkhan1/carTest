import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const MyCar= () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Car!</Text>
    </View>
  );
};
export default MyCar;