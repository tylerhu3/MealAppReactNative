import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
// import{ Apploading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens' // force iOS to use ViewController and Android to use Fragments
import AppLoading from 'expo-app-loading';


enableScreens(); // use this for more efficiency

const fetchFonts = () => {
  console.log("Tyler checking in")

  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}



export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if(this.state.fontLoaded){
      console.log("font loaded")
      return <MealsNavigator />
    }else{
      console.log("font NOT loaded")
      return <AppLoading/>
    }
  }
}

// export default function App() {
  
//   const [fontLoaded, setFontLoaded] = useState(false)

//   if (!fontLoaded) {
//     console.log("getting fonts")
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onError={console.error("Error getting resources")}
//         onFinish={() => {
//           console.log("fonts loaded successfully")
//           setFontLoaded(true)}}
//       />
//     );
//   }else{
//     console.log("already got fonts")
//     return (
//       //By default it will should return the top item in MealsNavigator.js
//       <MealsNavigator />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
