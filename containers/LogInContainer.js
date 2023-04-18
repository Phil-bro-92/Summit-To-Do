import React, {useEffect} from 'react';
import {useHistory} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';



const LogInContainer = () => {


  return (
    <View style={styles.logInContainer}>
        <Text>Log In</Text>
    </View>
  )
}

const styles=StyleSheet.create({
        logInContainer:{
                height: '100%',
                width: '100%',
        }
})

export default LogInContainer