import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const CardItem = ({ title, description, id, contents, image }) => {

   const navigation = useNavigation()
   const pressCourseHandler = () => {
      navigation.navigate('CourseDetails', { id: id })
      console.log('from coursecard', id)
   }
   console.log(image)
   return (
      <View style={styles.container}>
         <Pressable onPress={pressCourseHandler}>
            <View >
               <Image style={styles.image} source={image} />
               <Text style={styles.title}>{title}</Text>
            </View>
            {contents.map(content => <Text key={content.id}>{content}</Text>)}
         </Pressable>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      color: 'white',
      backgroundColor: Colors.secondary500,
      padding: 10,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      marginVertical: 10,
      marginHorizontal: 10,
      shadowRadius: 7
   },
   title: {
      fontSize: 22,
      color: Colors.primary500
   },
   info: {
      color: Colors.primary500
   },
   image: {
      width: 350,
      height: 200,
      overflow: 'hidden',
   }
});


export default CardItem