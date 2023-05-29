import { View, Text } from "react-native"

import DATA from '../data/courseData'

const CourseDetailsScreen = ({ route }) => {

   const { id } = route.params; // Access the courseId parameter
   console.log(id)

   const selectedCourse = DATA.find(course => course.id === id)


   return (
      <View>
         <Text>{selectedCourse.info}</Text>
      </View>
   )
}

export default CourseDetailsScreen;