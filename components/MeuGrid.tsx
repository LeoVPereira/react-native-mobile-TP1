import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const MeuGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 10,
    flexBasis: '30%', // Tamanho de cada item
  },
});

export default MeuGrid;