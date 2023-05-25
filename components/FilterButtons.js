import React from 'react';
import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const FilterButtons = ({ selectedCategory, onSelectCategory }) => {
   const [showCategories, setShowCategories] = useState(false);

   const toggleCategories = () => {
      setShowCategories(prevState => !prevState);
   };

   const handleCategorySelection = category => {
      onSelectCategory(category);
      toggleCategories();
   };

   return (
      <View style={styles.container}>
         <Button style={styles.filterButton} title="Filter" onPress={toggleCategories} />
         {showCategories && (
            <View style={styles.categoryContainer}>
               <Button style={styles.button} title="All" onPress={() => handleCategorySelection(null)} />
               <Button style={styles.button} title="Frontend" onPress={() => handleCategorySelection('frontend')} />
               <Button style={styles.button} title="Backend" onPress={() => handleCategorySelection('backend')} titleStyle={styles.buttonTitle} />
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

   },
   filterButton: {
      flex: 1,
      alignItems: 'flex-end'

   },
   button: {
      color: Colors.primary500,
   },
   buttonTitle: {
      color: 'red'
   }

});

export default FilterButtons;
