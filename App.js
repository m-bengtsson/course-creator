import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator()


export default function App() {

   return (
      <>
         <StatusBar style="dark" />
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               title: 'All courses',
               headerStyle: { backgroundColor: Colors.secondary500 },
               headerTintColor: Colors.primary500
            }}>
               <Stack.Screen name='All Courses' component={HomeScreen} />
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