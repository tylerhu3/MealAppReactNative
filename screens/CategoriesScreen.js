
import React, {useState} from 'react';
import {  Button, StyleSheet, Text, View, TouchableOpacity, Touchable,
        Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";


/**
 * The Main component of this file, shows different
 * categories of food
*/
const CategoriesScreen = props => {
        /**
         * The return for each item 
        */

        const categoryPressed = (itemData) =>{
            props.navigation.navigate({

                //the component we will open 
                routeName:'CategoryMeals',

                //the parameters to pass to that component
                params:{
                    categoryId: itemData.item.id,
                    categoryTitle: itemData.item.title,
                    categoryColor: itemData.item.color
                }

            })
        }


        //Used by FlatList in main return()
        const renderGridItem = itemData => {
            return(
                <CategoryGridTile 
                    title={itemData.item.title}
                    color = {itemData.item.color}
                    onSelect={()=>{categoryPressed(itemData)}}
                />  
            )
        }

    return (
        <FlatList 
        keyExtractor={(item,index)=> item.id} //for older RN versions, new ones won't need this
        renderItem={renderGridItem} //view return for each item
        data={CATEGORIES} //the data source
        numColumns={2}/>
    )

 
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});


export default CategoriesScreen