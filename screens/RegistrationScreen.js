import { useNavigation } from "@react-navigation/core";
import React, {  useState } from "react";
import { KeyboardAvoidingView,Text,TextInput,TouchableOpacity, View, Alert} from "react-native";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";
import loginStyle from "../styles/loginScreenStyle/loginStyle";

//import Login from '../screens/LoginScreen';
//import { StackActions } from '@react-navigation/native';



const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword( auth,email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
     // alert('')
     Alert.alert('Grattis', 'Du är registrerad, vänligen logga in med dina inloggningsuppgifter', 
     
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      
      
    );
    
      })
     
      .catch((error) => alert(error.message));
  };

  
  return (
    <KeyboardAvoidingView style={loginStyle.container} behavior="padding">
      
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
        
        
        <TouchableOpacity
          onPress={handleSignUp}
          style={[loginStyle.button, loginStyle.buttonOutline]} >
          { <Text style={loginStyle.buttonOutlineText}>SKAPA KONTO</Text>}
           </TouchableOpacity>
      </View>

   
     
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
