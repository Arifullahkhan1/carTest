import { Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {auth} from '../../firebase-config'


const Profile = (props) => {
  console.warn( props);
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      
      <Text style={{fontSize:40}}>Profile</Text>
      <Text style={{fontSize:40}}>Email: {auth.currentUser?.email}</Text>
      <Text style={{fontSize:40}}>FirstName: {props.afterName}</Text>


    
    </View>

    </View>
  );
};
export default Profile;
