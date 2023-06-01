import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";


const DrawerItems = ({ part }) => {
   const [expanded, setExpanded] = useState(false);

   const toggleExpand = () => {
      setExpanded(!expanded);
   };

   return (
      <TouchableOpacity onPress={toggleExpand}>
         <View style={styles.container}>
            <Text style={styles.title}>{part.title}</Text>
            {expanded && <Text style={styles.info}>{part.contents}</Text>}
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.secondary500,
      borderRadius: 6,
      shadowOffset: { width: 0, height: 4 },
      shadowColor: 'grey',
      shadowOpacity: 0.4,
      marginVertical: 20,
      marginHorizontal: 30,
      shadowRadius: 7,
      padding: 20,

   },
   innerContainer: {
      borderRadius: 8,
      overflow: 'hidden'
   },
   title: {
      fontSize: 20,
      color: Colors.primary500,
      margin: 20
   },
   info: {
      color: Colors.primary500
   },
   image: {
      width: 394,
      height: 200,
      overflow: 'hidden'
   }
});

export default DrawerItems;