
import React, {useState} from 'react';
import {  StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = props => {
    return (<View style={styles.screen}>
        <Text>The FavoritesScreen </Text>
    </View>)
}

export default FavoritesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
