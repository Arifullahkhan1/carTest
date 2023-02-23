import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase-config'
import homeStyle from '../../styles/homeScreenStyles/homeStyle'

const Services = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.text}>Services</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={homeStyle.button}
      >
        <Text style={homeStyle.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Services;