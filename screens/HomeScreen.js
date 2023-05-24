import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            <View style={styles.textContainer}>
            </View>
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
});