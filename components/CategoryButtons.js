import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import Button from './Button'


const CategoryButtons = ({ selectedCategory, onSelectCategory }) => {
   // Set state for toggling categories
   const [showCategories, setShowCategories] = useState(false);
   // Function toggling categories
   const toggleCategories = () => {
      setShowCategories(prevState => !prevState);
   };
   // Handling category selecttion and toggling betweet them
   const handleCategorySelection = category => {
      onSelectCategory(category);
      toggleCategories();
   };

   return (
      <View style={styles.container}>
         <View style={styles.titleFilter}>
            <Text style={styles.categoryTitle}>{selectedCategory}</Text>
            <Button style={styles.filterButton} title="Filter" onPress={toggleCategories} />
         </View>
         {showCategories && (
            <View style={styles.categoryContainer}>
               <Button title="All" onPress={() => handleCategorySelection(null)} />
               <Button title="Plantcare" onPress={() => handleCategorySelection('Plantcare')} />
               <Button title="Plant design" onPress={() => handleCategorySelection('Plant Design')} />
               <Button title="Gardening" onPress={() => handleCategorySelection('Gardening')} />
               {/* Add more buttons for other categories */}
            </View>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginVertical: 10,
   },
   categoryContainer: {
      marginTop: 10,
      alignItems: 'center'
   },
   categoryTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: Colors.primary500,
   },
   filterButton: {
      alignItems: 'flex-end'

   },
   titleFilter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20
   },
});

export default CategoryButtons;
