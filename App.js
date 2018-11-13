import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Loop, Stage, World } from 'react-game-kit/native';

const styles = StyleSheet.create({
  loop: {
    backgroundColor: '#000',
  },
  stage: {
    backgroundColor: '#fff',
  },
  txt: {
    color: '#000',
  },
});

export default () => (
  <Loop style={styles.loop}>
    <Stage style={styles.stage}>
      <World>
        <Text style={styles.txt}>hue</Text>
      </World>
    </Stage>
  </Loop>
);
