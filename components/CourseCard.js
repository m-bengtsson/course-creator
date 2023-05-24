import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default Item = ({ title, info }) => {

   const navigation = useNavigation()
   const pressCourseHandler = () => {
      navigation.navigate('CourseDetails')

   }
   return (

      <View style={styles.textContainer}>
         <Pressable onPress={pressCourseHandler}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.info}>{info}</Text>
         </Pressable>
      </View>
   )

}
// Pressable here



const styles = StyleSheet.create({
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
   title: {
      fontSize: 32,
      color: 'white'
   },
   info: {
      color: 'white'
   }
});