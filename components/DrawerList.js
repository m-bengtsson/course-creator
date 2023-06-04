import { View } from "react-native"
import DrawerItem from './DrawerItem'

const DrawerList = ({ selectedCourse }) => {
   const { parts } = selectedCourse;

   return (
      <View>
         {parts.map((part, index) => <DrawerItem key={index} part={part} />)}
      </View>
   )
}

export default DrawerList;