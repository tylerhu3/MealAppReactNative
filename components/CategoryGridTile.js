import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity; // default touchable object


  //TODO: Figure out why TouchableNativeFeedback is not working on android
  if (Platform.OS === "android" && Platform.Version > 20) {
    //    TouchableNativeFeedback does not seem to work with emulator
    // TouchableCmp = TouchableNativeFeedback; //Android Default
  }

  console.log("Grid ran");

  return (
      <View style={styles.gridItem} >
        <TouchableCmp style={styles.gridItemTouchable} onPress={props.onSelect} >
            {/**
             * Below is just another example of style merger,
             * take the styles from this class under container
             * also take the the
             */}
                <View style={[styles.container, { backgroundColor: props.color }]}>
                <Text numberOfLines={2} style={styles.title}>
                    {props.title}
                </Text>
                </View>
        </TouchableCmp>
      </View>
  );
};

const styles = StyleSheet.create({

  gridItem: {
    position:'relative',
    // backgroundColor:'purple',
    flex: 1,
    margin: 15,
    height: 150,
    zIndex:3,
    borderRadius:10, //rounded corners
    overflow:'hidden' // makes sense the android ripple effect doesn't goes out too far
  },

  gridItemTouchable: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  title: {
    //  fontFamily:'open-sans-bold',
    fontSize: 22,
    textAlign: "right",
  },

});

export default CategoryGridTile;
