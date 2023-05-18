import { StyleSheet, View, Text } from "react-native";

export default Item = ({ title, info }) => (
   <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
   </View>
);

const styles = StyleSheet.create({
   textContainer: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.primary500,
      padding: 15,
      borderRadius: 8,
      elevation: 30,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   title: {
      fontSize: 32,
      color: 'white'
   },
   info: {
      color: 'white'
   }
});