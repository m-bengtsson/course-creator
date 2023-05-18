import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './constants/Colors';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.textContainer}>
            <Text style={styles.hello} >Hello world!</Text>
         </View>
         <StatusBar style="dark" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.secondary500,
      alignItems: 'center',
      justifyContent: 'center',
   },
   textContainer: {
      color: 'white',
      backgroundColor: Colors.primary500,
      padding: 15,
      borderRadius: 8,
      elevation: 30,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.3
   },
   hello: {
      color: 'white'

   }
});
