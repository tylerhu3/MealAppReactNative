
import React, {useState} from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem'

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: itemData.item.id
                }
              });
            }}
          />
        );
      };

    // pasted in from CategoriesScreen.js as the below  
    // categoryId: itemData.item.id,
    // categoryTitle: itemData.item.title,
    // categoryColor: itemData.item.color

    //Get Current Category
    const cateId = props.navigation.getParam('categoryId')

    //Get the meals of current Category
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(cateId) >= 0 )

    return (<View style={styles.screen}>
        <FlatList
            data={displayMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
        ></FlatList>
    </View>)
}


// this must be a function to have it be dynamic, thus helping
// us change the title as we go
CategoryMealsScreen.navigationOptions = (navigationData) =>{

    // just for practice we will search through a array given a key
    const cateId = navigationData.navigation.getParam('categoryId')

    //returns the item that 
    const selectedCategory = CATEGORIES.find(cat => cat.id === cateId)

    return {
        headerTitleStyle: { alignSelf: 'center' },
        headerTitle: selectedCategory.title
        // , // we can create different screen colors if we want 
        // headerStyle:{
        //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor
    }
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
    