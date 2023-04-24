import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NavBar from '../components/NavBar'
import { SafeAreaView } from 'react-native';

const UserContainer = () => {
  return (
		<View style={styles.userContainer}>
			<SafeAreaView>
				<Text>Log Out</Text>
			</SafeAreaView>
			<NavBar />
		</View>
	);
}

const styles = StyleSheet.create({
  userContainer:{
    height: '100%',
    width: '100%'
  }
})

export default UserContainer