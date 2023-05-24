import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, Button } from 'react-native';

import Colors from '../constants/Colors'
import DATA from '../data/courseData';
import CourseCard from '../components/CourseCard';


export default function HomeScreen() {

   const renderCourse = (itemData) => {
      const course = itemData.item;
      return <CourseCard {...course} />
   };

   return (
      <View style={styles.container}>
         <StatusBar style="dark" />

         <SafeAreaView style={styles.safeArea}>
            <FlatList
               data={DATA}
               renderItem={renderCourse}
               keyExtractor={item => item.id}
            />
         </SafeAreaView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.secondary500,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0
   },
   safeArea: {
      marginTop: 14
   }
});