import { createDrawerNavigator } from "@react-navigation/drawer";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import DrawerList from "./DrawerList";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import DATA from '../data/courseData'
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator()

const DrawerNavigation = ({ route }) => {
   const dimensions = useWindowDimensions();

   const { id } = route.params;
   const selectedCourse = DATA.find(course => course.id === id)

   console.log('id: ', id)

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
      >
         <Drawer.Screen name="CourseDetails" component={() => <CourseDetailsScreen selectedCourse={selectedCourse} />} />
      </Drawer.Navigator>
   );
};

export default DrawerNavigation;