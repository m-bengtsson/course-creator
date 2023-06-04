import { Text, Image, StyleSheet, ScrollView, Pressable } from "react-native"
import { useState } from "react";

import Colors from "../constants/Colors";

const CourseDetailsScreen = ({ selectedCourse }) => {

   const { id, title, contents, image, description } = selectedCourse;
   const [expanded, setExpanded] = useState(true);

   const toggleExpand = () => {
      setExpanded(!expanded);
   };

   return (
      <ScrollView style={styles.container}>
         <Image style={styles.image} source={image} />
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.secondTitle}>Course contents</Text>
         {contents.map((content, index) => <Text style={styles.contents} key={index}> - {content}</Text>)}
         <Pressable style={styles.descriptionContainer} onPress={toggleExpand}>
            <Text style={styles.secondTitle}>Course Description </Text>
            <Text style={styles.secondTitle}>^</Text>
         </Pressable>
         {expanded && <Text style={styles.description}>{description}</Text>}
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.secondary500
   },
   title: {
      fontSize: 28,
      margin: 25,
      letterSpacing: 0.5,
      lineHeight: 35,
      color: Colors.grey500,
   },
   secondTitle: {
      fontSize: 20,
      margin: 25,
      lineHeight: 35,
      color: Colors.grey500,
   },
   contents: {
      marginHorizontal: 40,
      marginVertical: 20,
      color: Colors.grey500,
   },
   description: {
      marginHorizontal: 30,
      marginBottom: 20,
      letterSpacing: 0.3,
      lineHeight: 20,
      color: Colors.grey500,
   },
   descriptionContainer: {
      alignItems: 'center',
      backgroundColor: Colors.secondary500,
      borderRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'grey',
      shadowOpacity: 0.2,
      marginVertical: 10,
      marginHorizontal: 10,
      shadowRadius: 7,
      borderTop: Colors.grey500,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 30
   },

   image: {
      width: '100%',
      height: 250
   }
})

export default CourseDetailsScreen;