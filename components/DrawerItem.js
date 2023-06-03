import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";

import Colors from "../constants/Colors";
import VideoModal from "./VideoModal";

const DrawerItems = ({ part }) => {
   // Setting state to modal to trigger the toggle
   const [modalVisible, setModalVisible] = useState(false);
   // State triggering if view is expanded
   const [expanded, setExpanded] = useState(false);
   // State for when video is finished
   const [videoEnded, setVideoEnded] = useState(false);

   // Expand and unexpand view
   const toggleExpand = () => {
      setExpanded(!expanded);
   };
   // Toggling the video based on previous state
   const toggleModalVisible = () => {
      setModalVisible((prev) => !prev);
   };

   // Hide video when ended and set state to change styling on title
   const onStateChange = useCallback((state) => {
      if (state === "ended") {
         setVideoEnded(true);
         setModalVisible(false);
      }
   }, []);

   // Rendering content title and contents on press, render video on long press.
   return (
      <TouchableOpacity onLongPress={toggleModalVisible} onPress={toggleExpand}>
         <View style={styles.container}>
            <Text style={[styles.title, videoEnded && styles.titleEnded]}>{part.title}</Text>
            {expanded &&
               <View>
                  <Text style={styles.info}>This video shows:</Text>
                  {part.contents.map((content, index) => <Text key={index} style={styles.contents}>{content}</Text>)}
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
   titleEnded: {
      color: Colors.grey500,
      opacity: 1
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
});

export default DrawerItems;
