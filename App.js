import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import Colors from './constants/Colors';
import DATA from './models/courseData';
import CourseCard from './components/CourseCard';


export default function App() {


   return (
      <View style={styles.container}>
         <StatusBar style="dark" />
         <SafeAreaView style={styles.safeArea}>
            <View style={styles.textContainer}>
               <Text style={styles.hello}>Hello world!</Text>
            </View>
            <FlatList
               data={DATA}
               renderItem={({ item }) =>
                  <CourseCard
                     title={item.title}
                     info={item.info} />}
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