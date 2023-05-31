import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, Button, ScrollView } from 'react-native';
import { useState } from 'react';

import Colors from '../constants/Colors'
import DATA from '../data/courseData';
import CourseCard from '../components/CourseCard';
import CategoryButtons from '../components/CategoryButtons';

const HomeScreen = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);

   const filterCourses = () => {
      if (!selectedCategory) {
         return DATA; // no category selected, return all courses
      }
      // filter and return courses by selected category
      return DATA.filter(course => course.category === selectedCategory);
   };

   const renderCourse = (itemData) => {
      const course = itemData.item;
      return <CourseCard {...course} />;
   };

   return (
      <View style={styles.container}>
         <StatusBar style="dark" />
         <SafeAreaView style={styles.safeArea}>
            <CategoryButtons
               selectedCategory={selectedCategory}
               onSelectCategory={setSelectedCategory}
            />
            <FlatList
               data={filterCourses()}
               renderItem={renderCourse}
               keyExtractor={item => item.id}
            />
         </SafeAreaView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.secondary500,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0
   },
   safeArea: {
      marginTop: 14,
   }
});

export default HomeScreen;