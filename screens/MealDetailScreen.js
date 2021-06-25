import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text> {selectedMeal.title} </Text>
    </View>
  );
};

export default MealDetailScreen;

//setting headerTitle:

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight:  //<Text>Hi</Text>
    (<HeaderButtons style={{backgroundColor: 'white'}} HeaderButtonComponent={HeaderButtons}>
        <Item title='Favorite' iconName='ios-star' 
        onPress={()=>{
            console.log("Marked as favorte");
        }}  />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
