import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase-config";
import homeStyle from "../styles/homeScreenStyles/homeStyle";
//import BottomTabNavigator from './BottomTabNavigator';

const HomeScreen = () => {
  const navigation = useNavigation();

 /*  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
      
  }; */

 // <BottomTabNavigator/>
  return (
    <View style={homeStyle.container}>
      {/* <Text style={homeStyle.text}>welcome to the App </Text>

      <Text style={homeStyle.userNameText}>
        {auth.currentUser?.email.split("@")[0].toUpperCase()}
      </Text>

      <TouchableOpacity onPress={handleSignOut} style={homeStyle.button}>
        <Text style={homeStyle.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
