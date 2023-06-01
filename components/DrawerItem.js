import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import Colors from "../constants/Colors";
import MyModal from "./MyModal";
import { WebView } from 'react-native-webview';

const DrawerItems = ({ part }) => {
   const [isExpanded, setExpanded] = useState(false);

   const toggleExpand = () => {
      setExpanded((prevExpanded) => !prevExpanded);
   };

   return (
      <TouchableOpacity onPress={toggleExpand}>
         <View style={styles.container}>
            <Text style={styles.title}>{part.title}</Text>
         </View>
         <Modal
            visible={isExpanded}
            animationType="fade"
            transparent={true}>
            <MyModal part={part} onPress={toggleExpand} />
         </Modal>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      color: "white",
      backgroundColor: Colors.secondary500,
      borderRadius: 6,
      shadowOffset: { width: 0, height: 4 },
      shadowColor: "grey",
      shadowOpacity: 0.4,
      marginVertical: 20,
      marginHorizontal: 30,
      shadowRadius: 7,
      padding: 20,
   },
   title: {
      fontSize: 20,
      color: Colors.primary500,
      margin: 20,
   },

});

export default DrawerItems;
