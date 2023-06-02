import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native"
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
         <Pressable onPress={toggleExpand}>
            <Text style={styles.secondTitle}>Course Description </Text>
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

   image: {
      width: '100%',
      height: 250
   }
})

export default CourseDetailsScreen;