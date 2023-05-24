import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

const Stack = createNativeStackNavigator()


export default function App() {

   return (
      <>
         <StatusBar style="dark" />
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               title: 'All courses',
               headerStyle: { backgroundColor: 'pink' },
               headerTintColor: 'green'
            }}>
               <Stack.Screen name='AllCourses' component={HomeScreen} />
               <Stack.Screen name='CourseDetails' component={CourseDetailsScreen} />

            </Stack.Navigator>
         </NavigationContainer>
      </>


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