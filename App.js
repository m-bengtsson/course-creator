import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Colors from './constants/Colors';
import DrawerNavigation from './components/DrawerNavigation';

const Stack = createNativeStackNavigator();


export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.blue500, },
            headerTintColor: Colors.secondary500
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