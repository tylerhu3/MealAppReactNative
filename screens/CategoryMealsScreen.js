
import React, {useState} from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>The CategoryMealsScreen </Text>
        <Button title="Go to Details" 
        onPress={()=>{
            props.navigation.navigate(
             {   routeName:'MealDetail'}
            )
        }}/>
    </View>)
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
    