
import React, {useState} from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {


    // pasted in from CategoriesScreen.js as the below  
    // categoryId: itemData.item.id,
    // categoryTitle: itemData.item.title,
    // categoryColor: itemData.item.color

    // just for practice we will search through a array given a key
    const cateId = props.navigation.getParam('categoryId')

    //returns the item that 
    const selectedCategory = CATEGORIES.find(cat => cat.id === cateId)



    return (<View style={styles.screen}>
        <Text>{(selectedCategory.title != null) ? selectedCategory.title : "Mysterious"} </Text>
        <Button title="Go to Detail " 
        onPress={()=>{
            props.navigation.navigate(
             {   routeName:'MealDetail'}
            )
        }}/>
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
    