import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import DATA from '../data/courseData'
import DrawerList from "./DrawerList";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator()

const DrawerNavigation = ({ route }) => {
   const { id } = route.params;
   const selectedCourse = DATA.find(course => course.id === id)
   const navigation = useNavigation()

   // Set navigation options for the screen
   useLayoutEffect(() => {
      navigation.setOptions({
         headerTintColor: Colors.secondary500,
         headerStyle: { backgroundColor: Colors.blue500 },
         title: 'Course Details'
      });
   }, [navigation]);

   return (
      <Drawer.Navigator
         // Pass the selected course to the drawer content component
         drawerContent={(props) => <DrawerList selectedCourse={selectedCourse} {...props} />}
         screenOptions={{
            sceneContainerStyle: { backgroundColor: Colors.blue500 },
            drawerStyle: { width: '100%' },
            headerShown: false
         }}
      >{/* Use children instead of component to pass an inline function */}
         <Drawer.Screen
            options={{ title: '' }}
            name="Course Details" children={() => <CourseDetailsScreen selectedCourse={selectedCourse} />} />
      </Drawer.Navigator>
   );
};

export default DrawerNavigation;