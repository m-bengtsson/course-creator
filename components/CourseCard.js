import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

const CardItem = ({ title, id, image }) => {
   const navigation = useNavigation()

   const pressCourseHandler = () => {
      navigation.navigate('Drawer', { id: id })
   }

   return (
      <View style={styles.container} >
         <Pressable onPress={pressCourseHandler}>
            <View style={styles.innerContainer}>
               <Image style={styles.image} source={image} />
               <Text style={styles.title}>{title}</Text>
            </View>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.secondary500,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      marginVertical: 10,
      marginHorizontal: 10,
      shadowRadius: 7,

   },
   innerContainer: {
      borderRadius: 8,
      overflow: 'hidden'
   },
   title: {
      fontSize: 20,
      color: Colors.grey500,
      margin: 20
   },
   info: {
      color: Colors.primary500
   },
   image: {
      width: 394,
      height: 200,
      overflow: 'hidden'
   }
});


export default CardItem