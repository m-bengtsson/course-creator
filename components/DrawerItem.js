import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import Colors from "../constants/Colors";
import VideoModal from "./VideoModal";

const DrawerItems = ({ part }) => {
   const [modalVisible, setModalVisible] = useState(false);

   const toggleModalVisible = () => {
      setModalVisible((prevExpanded) => !prevExpanded);
   };

   const onStateChange = useCallback((state) => {
      if (state === "ended") {
         Alert.alert("Video has finished playing!");
      }
   }, []);

   const [expanded, setExpanded] = useState(false);

   const toggleExpand = () => {
      setExpanded(!expanded);
   };


   return (
      <TouchableOpacity onLongPress={toggleModalVisible} onPress={toggleExpand}>
         <View style={styles.container}>
            <Text style={styles.title}>{part.title}</Text>
            {expanded && <Text style={styles.content}>{part.contents}</Text>}
         </View>

         <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <VideoModal part={part} onPress={toggleModalVisible} onStateChange={onStateChange} />
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
   info: {
      color: Colors.primary500,
      fontWeight: 'bold',
      margin: 10,
   },
   contents: {
      color: Colors.grey500,
      margin: 5,

   },
})


export default DrawerItems;
