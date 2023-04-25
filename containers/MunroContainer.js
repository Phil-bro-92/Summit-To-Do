import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import AddLog from "../components/AddLog";
import { Link } from "react-router-native";

const MunroContainer = ({ munro, user }) => {
	const handleMapsLink = () => {
		Linking.openURL(munro.googleMapsLink);
	};

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
						<Icon
							name="landscape"
							size={35}
							color="green"
							alignSelf={"center"}
						/>
					</View>
					<View style={styles.secondRow}>
						<View>
							<Text style={styles.modalText}>Height: {munro.height}m</Text>
							<Text style={styles.modalText}> {munro.region}</Text>
							<Text style={styles.modalText}>
								Difficulty: {munro.difficulty}
							</Text>
							<Text style={styles.modalText}>Duration: {munro.duration}</Text>
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
								<Icon name="landscape" size={24} color="black" />
							</Marker>
						</MapView>
					</View>
					<View style={styles.thirdRow}>
						<Text style={styles.modalText}>
							Pronunciation: {munro.pronunciation}
						</Text>
						<Text style={styles.modalText}>
							Gaelic Name: {munro.gaelicName}
						</Text>
						<Text style={styles.modalText}>Translation: {munro.meaning}</Text>
					</View>
					<AddLog munro={munro} user={user} />
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
		height: "15%",
		width: "100%",
		alignContent: "center",
		alignItems: "center",
	},
	secondRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
		height: "35%",
	},
	secondRowText: {
		textAlign: "left",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	thirdRow: {
		height: "20%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	modalHeader: {
		width: "60%",
		fontSize: 25,
		textAlign: "center",
		alignSelf: "center",
	},
	mountainIconCont: {
		width: "40%",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		margin: "3%",
		textAlign: "center",
	},
	modalTextLeft: {
		textAlign: "left",
		margin: "3%",
	},
	map: {
		width: "45%",
		height: "70%",
		borderRadius: "10%",
		alignSelf: "center",
	},
	addLog: {
		height: "50%",
	},
});

export default MunroContainer;
