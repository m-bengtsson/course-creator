import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

import DATA from '../data/courseData'
import Colors from "../constants/Colors";

const CourseDetailsScreen = ({ selectedCourse }) => {

   const { id, title, contents, category, image, description } = selectedCourse;

   return (
      <ScrollView style={styles.container}>
         <Image style={styles.image} source={image} />
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.title}>Course contents</Text>
         {contents.map(content => <Text style={styles.contents} key={id}> - {content}</Text>)}
         <Text style={styles.title}>Description </Text>
         <Text style={styles.description}>{description}</Text>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.secondary500
   },
   title: {
      fontSize: 25,
      margin: 25,
      letterSpacing: 0.5,
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