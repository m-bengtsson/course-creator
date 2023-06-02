import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import DATA from '../data/courseData'
import DrawerList from "./DrawerList";

const Drawer = createDrawerNavigator()

const DrawerNavigation = ({ route }) => {
   const { id } = route.params;
   const selectedCourse = DATA.find(course => course.id === id)
   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         title: 'Course Details'
      });
   }, [navigation]);

   return (
      <Drawer.Navigator
         drawerContent={(props) => <DrawerList selectedCourse={selectedCourse} {...props} />}
         screenOptions={{
            headerStyle: { backgroundColor: "#58afc9" },
            headerTintColor: "white",
            sceneContainerStyle: { backgroundColor: "rgb(244, 202, 202)" },
            drawerStyle: { width: '100%' },
         }}
      >{/* Pass children to able passing inline function */}
         <Drawer.Screen name="CourseDetails" children={() => <CourseDetailsScreen selectedCourse={selectedCourse} />} />
      </Drawer.Navigator>
   );
};

export default DrawerNavigation;