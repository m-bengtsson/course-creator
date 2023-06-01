import { StyleSheet, View, Text, Pressable } from 'react-native';

const MyModal = ({ part, onPress }) => {
   return (
      <Pressable style={styles.modalContainer} onPress={onPress}>
         <View style={styles.modalContent}>
            <Text style={styles.info}>This video shows:</Text>
            {part.contents.map(content => <Text style={styles.contents}>{content}</Text>)}
         </View>
      </Pressable>
   )
}

const styles = StyleSheet.create({
   modalContent: {
      backgroundColor: Colors.secondary500,
      borderRadius: 6,
      padding: 20,
   },
   info: {
      color: Colors.primary500,
   },
   contents: {
      color: Colors.grey500,

   },
   modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   }
});

export default MyModal;