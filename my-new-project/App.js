import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.mojiBox}></View>
        <View style={styles.gazoBox}>
          <Image
            style={{ width: 100, height: 100 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row"
  },
  mojiBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
  },
  gazoBox: {
    width: 100,
    backgroundColor: "powerblue",
  }
});
