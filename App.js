/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={[style.style1]}></View>
      <View style={[style.style2]}></View>
      <View style={[style.style3]}></View>
      <View style={[style.style4]}></View>
      <View style={[style.style5]}>
        <Text style={[style.textStyle]}>Here we go, how it's going. There we go...</Text>
      </View>      

      <View style={[style.style1]}></View>
      <View style={[style.style1]}></View>
      <View style={[style.style1]}></View>
      <View style={[style.style1]}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = {
  style1: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4
  },
  style2: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4,
    borderStyle: "dashed"
  },
  style3: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "red",
    borderWidth: 10
  },
  style4: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4,
    borderStyle: "dotted"
  },
  style5: {
    backgroundColor: "yellow",
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 2,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 16
  }
}

export default App;
