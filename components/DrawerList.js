import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
import DrawerItem from './DrawerItem'

const DrawerList = ({ selectedCourse, navigation }) => {
   const { parts } = selectedCourse;


   return (
      <View style={styles.container}>
         {parts.map(part => <DrawerItem part={part} />)}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {

   }
})

export default DrawerList;