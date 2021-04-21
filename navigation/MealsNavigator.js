
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

const MealsNavigator =  createStackNavigator({
Categories: CategoriesScreen,
MealDetail: MealDetailScreen,
CategoryMeals: {screen: CategoryMealsScreen}

})


export default createAppContainer(MealsNavigator)
