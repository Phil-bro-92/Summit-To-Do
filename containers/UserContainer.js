import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import NavBar from '../components/NavBar'
import { SafeAreaView } from 'react-native';
import { Link } from "react-router-native";

const UserContainer = () => {
  return (
		<>
			<NavBar />
			<SafeAreaView>
				<View style={styles.userContainer}>
					<View style={styles.logsCont}>
						<Text style={styles.header}>Your Logs</Text>
						<View style={styles.logList}>

						</View>
					</View>
					<Link
						style={styles.logOutCont}
						to={"/login"}
						underlayColor={"transparent"}
					>
						<View>
							<Text style={styles.logOutText}>Log Out</Text>
						</View>
					</Link>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	userContainer: {},
	logsCont: {
		width: "100%",
		height: "87%",
		marginTop: '5%'
	},
	header: {
		color: "white",
		fontSize: 20,
		fontWeight: 500,
		alignSelf: "center",
	},
	logList:{
		alignSelf: 'center',
		width: '90%',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: '20%',
		height: '90%',
		marginTop: '5%'
	},
	logOutCont: {
		alignSelf: "center",
		width: "80%",
		paddingTop: "3%",
		paddingBottom: "3%",
		borderWidth: 2,
		backgroundColor: "rgba(230,230,230, 0.8)",
		borderRadius: "20%",
		borderColor: "rgba(230,230,230, 1)",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "absolute",
		bottom: 0,
	},
	logOutText: {
		textAlign: "center",
		fontSize: 20,
		color: "rgba(0,0,0, 0.5)",
		fontWeight: 500,
	},
});

export default UserContainer