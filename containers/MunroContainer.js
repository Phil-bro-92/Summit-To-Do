import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Linking, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapPin, faMountain } from "@fortawesome/free-solid-svg-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import AddLog from "../components/AddLog";
import { Link } from "react-router-native";

const MunroContainer = ({ munro, user }) => {
	const [iconColor, setIconColor] = useState("grey")

	useEffect(() => {
	  munroIcon()
	}, [user])

	const handleMapsLink = () => {
		Linking.openURL(munro.googleMapsLink);
	};
	
	const munroIcon = () => user.munrosCompleted.map((userMunro) => {
	  if (userMunro.name === munro.name){
		setIconColor("green")
	  }
	})

	return (
		<View style={styles.centeredView}>
			<View style={styles.modalView}>
				<View style={styles.rowWrapper}>
					<View style={styles.firstRow}>
						<Link to={"/munro-list"} underlayColor={"transparent"}>
							<Image
								source={require("../assets/images/backArrow.png")}
								style={styles.backArrow}
							/>
						</Link>
						<Text style={styles.modalHeader}>{munro.name}</Text>

						<FontAwesomeIcon
							icon={faMountain}
							size={35}
							color={iconColor}
							alignSelf={"center"}
						/>
					</View>
					<View style={styles.secondRow}>
						<View style={styles.firstFacts}>
							<Text style={styles.modalTextLeft}>
								<Text style={styles.bold}>Height: </Text>
								{munro.height}m
							</Text>
							<Text style={styles.modalTextLeft}>
								<Text style={styles.bold}>Region: </Text> {munro.region}
							</Text>
							<Text style={styles.modalTextLeft}>
								<Text style={styles.bold}>Difficulty: </Text>
								{munro.difficulty}
							</Text>
							<Text style={styles.modalTextLeft}>
								<Text style={styles.bold}>Duration: </Text>
								{munro.duration}
							</Text>
						</View>

						<MapView
							onPress={handleMapsLink}
							style={styles.map}
							mapType={"standard"}
							provider={PROVIDER_GOOGLE}
							loadingEnabled={true}
							scrollEnabled={false}
							initialRegion={{
								latitude: munro.latitude,
								longitude: munro.longitude,
								latitudeDelta: 1,
								longitudeDelta: 1,
							}}
						>
							<Marker
								coordinate={{
									latitude: munro.latitude,
									longitude: munro.longitude,
								}}
								title={munro.name}
								description={munro.height + "m"}
							>
								<FontAwesomeIcon icon={faMapPin} size={25} color={"gray"} />
							</Marker>
						</MapView>
					</View>
					<View style={styles.thirdRow}>
						<Text style={styles.modalText}>
							<Text style={styles.bold}>Gaelic Name: </Text>
							{munro.gaelicName}
						</Text>
						<Text style={styles.modalText}>
							<Text style={styles.bold}>Pronunciation: </Text>{" "}
							{munro.pronunciation}
						</Text>
						<Text style={styles.modalText}>
							<Text style={styles.bold}>Translation: </Text>
							{munro.meaning}
						</Text>
					</View>
					<View style={styles.addLog}>
						<AddLog munro={munro} user={user} />
					</View>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	centeredView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		width: "90%",
		height: "75%",
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	rowWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100%",
		width: "100%",
	},
	backArrow: {
		resizeMode: "contain",
		width: 20,
		height: 20,
	},
	firstRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		height: "10%",
		width: "100%",
		alignContent: "center",
		alignItems: "center",
	},
	secondRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: 'center',
		width: "100%",
		height: "35%",
	},

	bold: {
		fontWeight: 600
	},
	firstFacts: {
	height:' 80%',
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",
},
	thirdRow: {
		height: "15%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	modalHeader: {
		width: "60%",
		fontSize: 22,
		textAlign: "center",
		alignSelf: "center",
		fontWeight: 200
	},
	mountainIconCont: {
		width: "40%",
	},
	modalText: {
		margin: "3%",
		textAlign: "center",
		fontWeight: 300
	},
	modalTextLeft: {
		textAlign: "left",
		margin: "3%",
		fontWeight: 300
	},
	map: {
		width: "45%",
		height: "70%",
		borderRadius: "10%",
		alignSelf: "center",
	},
	addLog: {
		marginTop: '10%',
		height: '35%'
	}
});

export default MunroContainer;
