import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CategoryGridTile = props =>{
    console.log("Grid ran")
    return (
        <TouchableOpacity
                style={styles.gridItem}
                onPress={props.onSelect}
                >
                    {/**
                     * Below is just another example of style merger,
                     * take the styles from this class under container
                     * also take the the 
                    */}
                    <View style={
                        [
                            styles.container, 
                            {backgroundColor: props.color}
                        ]
                        }>
                        <Text 
                            numberOfLines={2}
                            style={styles.title}>
                            {props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, 
        margin: 15,
        height: 150
    },
    container: {
        flex: 1, 
        backgroundColor:'white',
        borderRadius: 10, 
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3, 
        padding: 15,
        justifyContent: "flex-end",
        alignItems:"flex-end"
    },
    title:{
        //  fontFamily:'open-sans-bold',
         fontSize: 22,
         textAlign:'right'
    }
});

export default CategoryGridTile