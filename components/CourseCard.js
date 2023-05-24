import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default Item = ({ title, info, id }) => {

   const navigation = useNavigation()
   const pressCourseHandler = () => {
      navigation.navigate('CourseDetails', { id: id })
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


const styles = StyleSheet.create({
   textContainer: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.secondary500,
      padding: 15,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      marginVertical: 10,
      marginHorizontal: 20,
      shadowRadius: 7
   },
   title: {
      fontSize: 32,
      color: Colors.primary500
   },
   info: {
      color: Colors.primary500
   }
});