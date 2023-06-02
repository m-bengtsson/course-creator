import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
   const { onPress, title = 'Save' } = props;
   return (
      <Pressable style={styles.button} onPress={onPress}>
         <Text style={styles.text}>{title}</Text>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   text: {
      fontSize: 16,
      color: 'green',
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      margin: 10,
   }

})