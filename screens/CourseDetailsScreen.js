import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

import DATA from '../data/courseData'
import Colors from "../constants/Colors";

const CourseDetailsScreen = ({ route }) => {

   const { id } = route.params; // Access the courseId parameter
   const selectedCourse = DATA.find(course => course.id === id)

   return (
      <ScrollView style={styles.container}>
         <Image style={styles.image} source={selectedCourse.image} />
         <Text style={styles.title}>{selectedCourse.title}</Text>
         <Text style={styles.title}>Course contents</Text>
         {selectedCourse.contents.map(content => <Text style={styles.contents} key={selectedCourse.id}> - {content}</Text>)}
         <Text style={styles.title}>Description </Text>
         <Text style={styles.description}>{selectedCourse.description}</Text>
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