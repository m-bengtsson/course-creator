import { View } from "react-native"
import DrawerItem from './DrawerItem'

const DrawerList = ({ selectedCourse, navigation }) => {
   const { parts } = selectedCourse;

   return (
      <View>
         {parts.map(part => <DrawerItem part={part} />)}
      </View>
   )
}

export default DrawerList;