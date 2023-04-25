import React from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
import NavBar from '../components/NavBar'
import { SafeAreaView } from 'react-native';
import { Link } from "react-router-native";

const UserContainer = ({user}) => {

	const getLogs = user.logs.map((logs) => {
	  return (
			<View style={styles.logCont}>
				<Text style={styles.logDate}>
					{logs.dateCompleted}
				</Text>
				<Text style={styles.munroName}>
					{logs.munroName}
				</Text>
				<Text>{logs.munroHeight}m</Text>
				<Text>Notes: {logs.comment}</Text>
				<Text>Weather: {logs.weather}</Text>
			</View>
		);
	})


  return (
		<>
			<NavBar />
			<SafeAreaView>
				<View style={styles.userContainer}>
					<View style={styles.logsCont}>
						<Text style={styles.header}>Your Logs</Text>
							<View style={styles.logList}>
							<ScrollView style={styles.scrollView}>{getLogs}</ScrollView></View>
						
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
		marginTop: "5%",
	},
	header: {
		color: "white",
		fontSize: 20,
		fontWeight: 500,
		alignSelf: "center",
	},
	logList: {
		alignSelf: "center",
		width: "95%",
		borderWidth: 2,
		borderColor: "white",
		borderRadius: "20%",
		height: "90%",
		marginTop: "5%",
	},
	logCont: {
		borderWidth: 1,
		borderColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		padding: "2%",
		borderWidth: 2,
		borderColor: "rgba(250,250,250,0.7)",
		borderRadius: "10%",
		backgroundColor: 'rgba(250,250,250, 0.5)',
		margin: '2%'
	},
	logDate: {
		marginRight: "2%",
		textAlign: "right",
		color: 'green'
	},
	munroName: {
		fontSize: 18,
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