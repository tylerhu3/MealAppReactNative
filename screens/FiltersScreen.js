
import React, {useState} from 'react';
import {  StyleSheet, Text, View } from 'react-native';

const FiltersScreen = props => {
    return (<View style={styles.screen}>
        <Text>The FiltersScreen </Text>
    </View>)
}

export default FiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
