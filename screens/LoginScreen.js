import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
//import RegistrationScreen from '../screens/RegistrationScreen';
//import { StackActions } from '@react-navigation/native';
import {KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text
} from "react-native";
import {
  
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import loginStyle from "../styles/loginScreenStyle/loginStyle";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("BottomTabNavigator");
      }
    });

    return unsubscribe;
  }, []);  

const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      
    
      
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={loginStyle.container} behavior="padding">
      <View style={loginStyle.CarLogoContainer}>
        <Image
          style={loginStyle.CarLogo}
          source={require("../resources/images/carLogo.png")}
        />
      </View>

      <View style={loginStyle.inputContainer}>
        <TextInput
          placeholder="e-post"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={loginStyle.input}
        />
        <TextInput
          placeholder="lösenord"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={loginStyle.input}
          secureTextEntry
        />
      </View>

      <View style={loginStyle.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={loginStyle.button}>
          <Text style={loginStyle.buttonText}>LOGGA IN</Text>
        </TouchableOpacity>
       {/*  <TouchableOpacity
          onPress={handleSignUp}
          style={[loginStyle.button, loginStyle.buttonOutline]} >
          { <Text style={loginStyle.buttonOutlineText}>SKAPA KONTO</Text>}
        </TouchableOpacity> */}
      </View>

   <View style={loginStyle.footer}>
          <Text style={loginStyle.footerText}> Har du inget konto? </Text>
          
          <TouchableOpacity
           onPress={() =>
       navigation.navigate('Registration', {name: 'Jane'})
  
      } >
            <Text style={loginStyle.signupBtn}>Bli Medlem</Text>
          </TouchableOpacity>
        </View> 
     
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
