import { createDrawerNavigator } from "@react-navigation/drawer";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import PartItem from "./PartItem";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Drawer = createDrawerNavigator()

const DrawerNavigation = ({ route }) => {
   const { id } = route.params;

   console.log('id: ', id)

   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         title: 'Course Details'
      });
   }, [navigation]);


   return (
      <Drawer.Navigator
         drawerContent={props => <PartItem {...props} />}
         screenOptions={{
            headerStyle: { backgroundColor: "#58afc9" },
            headerTintColor: "white",
            sceneContainerStyle: { backgroundColor: "rgb(244, 202, 202)" },
         }}
      >
         <Drawer.Screen name="CourseDetails" component={() => <CourseDetailsScreen id={id} />} />
      </Drawer.Navigator>
   );
};

export default DrawerNavigation;