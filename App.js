import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import Colors from './constants/Colors';
import DATA from './models/courseData';

// Flatslist item component
const Item = ({ title }) => (
   <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
   </View>
);

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
               renderItem={({ item }) => <Item title={item.title} />}
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
   textContainer: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.primary500,
      padding: 15,
      borderRadius: 8,
      elevation: 30,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   hello: {
      color: 'white'
   },
   title: {
      fontSize: 32,
      color: 'white'
   }
});