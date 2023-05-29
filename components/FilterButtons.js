import React from 'react';
import { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
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
         <View style={styles.titleFilter}>
            <Text style={styles.categoryTitle}>{selectedCategory}</Text>
            <Button style={styles.filterButton} title="Filter" onPress={toggleCategories} />
         </View>
         {showCategories && (
            <View style={styles.categoryContainer}>
               <Button style={styles.button} title="All" onPress={() => handleCategorySelection(null)} />
               <Button style={styles.button} title="Plantcare" onPress={() => handleCategorySelection('Plantcare')} />
               <Button style={styles.button} title="Plant design" onPress={() => handleCategorySelection('Plant Design')} titleStyle={styles.buttonTitle} />
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
   categoryTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.primary500
   },
   filterButton: {
      alignItems: 'flex-end'

   },
   titleFilter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20
   }

});

export default FilterButtons;
