import { useNavigation } from "@react-navigation/core";
import React, {  useState } from "react";
import { KeyboardAvoidingView,Text,TextInput,TouchableOpacity, View, Alert} from "react-native";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";
import loginStyle from "../styles/loginScreenStyle/loginStyle";
import Profile from "./tabScreens/Profile";

//import Login from '../screens/LoginScreen';
//import { StackActions } from '@react-navigation/native';



const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [afterName, setAfterName] = useState("khan");
  const [telNumber, setTelNumber] = useState("");



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
        
        <TextInput
          placeholder="förnamn"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={loginStyle.input}
          
        />
        <TextInput
          placeholder="efternamn"
          value={afterName}
          onChangeText={(text) => setAfterName(text)}
          style={loginStyle.input}
          
        />
        <TextInput
          placeholder="Telefon nummer"
          value={telNumber}
          onChangeText={(text) => setTelNumber(text)}
          style={loginStyle.input}
          
        />
     
        
      </View>
      

      <View style={loginStyle.buttonContainer}>
        
         <TouchableOpacity
          onPress={handleSignUp}
          style={[loginStyle.button, loginStyle.buttonOutline]} >
          { <Text style={loginStyle.buttonOutlineText}>SKAPA KONTO</Text>}
           </TouchableOpacity>

           <Profile fName={firstName} efterName={afterName} telNumber={telNumber}/>
      </View>
      

     
     
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen ;
