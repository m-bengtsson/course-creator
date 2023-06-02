import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";

import Colors from "../constants/Colors";
import VideoModal from "./VideoModal";

const DrawerItems = ({ part }) => {
   const [modalVisible, setModalVisible] = useState(false);
   const [expanded, setExpanded] = useState(false);

   const toggleExpand = () => {
      setExpanded(!expanded);
   };

   const toggleModalVisible = () => {
      setModalVisible((prevExpanded) => !prevExpanded);
   };

   const onStateChange = useCallback((state) => {
      if (state === "ended") {
         Alert.alert("Video has finished playing!");
      }
   }, []);

   return (
      <TouchableOpacity onLongPress={toggleModalVisible} onPress={toggleExpand}>
         <View style={styles.container}>
            <Text style={styles.title}>{part.title}</Text>
            {expanded &&
               <View>
                  <Text style={styles.info}>This video shows:</Text>
                  {part.contents.map(content => <Text style={styles.contents}>{content}</Text>)}
               </View>}
         </View>
         <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <VideoModal part={part} onPress={toggleModalVisible} onStateChange={onStateChange} />
         </Modal>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
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
      color: Colors.grey500,
      opacity: 0.5,
      margin: 20,
   },
   info: {
      color: Colors.primary500,
      fontWeight: 'bold',
      margin: 20,
   },
   contents: {
      color: Colors.grey500,
      marginHorizontal: 20,
      marginVertical: 10,

   },
})


export default DrawerItems;
