import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NavBar from '../components/NavBar'

const UserContainer = () => {
  return (
    <View style={styles.userContainer}>
    <NavBar />
    <Text>WOrld</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  userContainer:{
    height: '100%',
    width: '100%'
  }
})

export default UserContainer