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
      fontSize: 20,
      margin: 16
   },
   contents: {
      margin: 20
   },
   description: {
      margin: 20
   },

   image: {
      width: '100%',
      height: 250
   }
})

export default CourseDetailsScreen;