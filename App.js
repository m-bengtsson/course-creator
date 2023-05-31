import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import Colors from './constants/Colors';
import DrawerNavigation from './components/DrawerNavigation'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();



export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary500 },
            headerTintColor: Colors.primary500
         }}>
            <Stack.Screen name='All Courses' component={HomeScreen} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.secondary500,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0
   },
});


// Drawer stack screen i av js, kommer ifrån drawernavigation component