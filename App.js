import 'react-native-gesture-handler'; 
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import BottomTabNavigator from './screens/BottomTabNavigator'
//import {auth} from './firebase-config';
//import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
//import colors from './contants/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ScreenStackHeaderBackButtonImage:true}} >
        <Stack.Screen options={{headerShown:false,ScreenStackHeaderBackButtonImage:false}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{headerShown:true} } name="Home" component={HomeScreen}/>
        <Stack.Screen options={{headerShown:true}} name="Registration" component={RegistrationScreen}/>
        <Stack.Screen options={{headerShown:false}} name="BottomTabNavigator" component={BottomTabNavigator}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  txt: {
    
    fontWeight:'bold',
    fontSize:21,
    color: 'red',
    
  },
});
