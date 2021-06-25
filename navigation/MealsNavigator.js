/**
 * string key to component file used by navigator in App.js file
 */

import { Platform, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: { screen: CategoryMealsScreen }, // same as above, we just want to show what's actually being passed
    MealDetail: MealDetailScreen,
  },
  { 
   
    //Some other attributes
      initialRouteName:'Categories', // default screen to go to 
      
    // mode:'modal', //iOS swipes up from bottom, does nothing on Android Andy
    defaultNavigationOptions: {
        // headerLayoutPreset: 'left', 
        headerTitleStyle: { alignSelf:  (Platform.OS === 'android') ? 'center': 'left' }, //android crashes on left
        headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);



export default createAppContainer(MealsNavigator);
