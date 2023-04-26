import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { Link } from "react-router-native";

export default function HomepageContainer({ munros, user }) {
  const munrosRemaining = 282 - user.munrosCompleted.length;

  const name = user.name;

  //     const [fontsLoaded] = useFonts({
  //     'Sen-Bold': require('../assets/fonts/Sen-Bold.ttf'),
  //     'Sen-Regular': require('../assets/fonts/Sen-Regular.ttf'),
  //     'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
  //   })

  const progressBarPercentage = (
    (user.munrosCompleted.length / 282) *
    100
  ).toFixed(1);

  return (
		<View style={styles.homepageContainer}>
			<SafeAreaView>
				<View style={styles.outwithNavbar}>
					<View style={styles.logoAndName}>
						<View style={styles.logo}>
							<Image
								source={require("../assets/images/LogoWhite.png")}
								style={styles.logoImage}
							/>
						</View>
						<View style={styles.greeting}>
							<Text style={styles.greetingText}>Hi {name}!</Text>
						</View>
					</View>
					<View style={styles.progress}>
						<Text style={styles.progressHeader}>Munros</Text>
						<Text style={styles.completed}>
							Completed: {user.munrosCompleted.length}
						</Text>
						<Text style={styles.remaining}>Remaining: {munrosRemaining} </Text>
						<View style={styles.progressBarCont}>
							<View style={styles.barCont}>
								<View style={styles.progressBar}></View>
								<View
									style={styles.progressAmount}
									width={`${progressBarPercentage}%`}
								></View>
								<View>
									<View left={`${progressBarPercentage}%`}>
										<FontAwesomeIcon
											icon={faPersonHiking}
											size={22}
											style={styles.progressIcon}
										/>
									</View>
								</View>
							</View>
							<View style={styles.progressPercent}>
								<Text>{progressBarPercentage}%</Text>
							</View>
						</View>
					</View>
						<Link
							style={styles.logLink}
							to={"/munro-list"}
							component={TouchableOpacity}
							underlayColor={"rgba(250,250,250,0.5)"}
						>
						<View>
							<View style={styles.log}>
								<Text style={styles.logText}>Log Completed Munro</Text>
								<Image
									source={require("../assets/images/image.png")}
									style={styles.image}
								/>
								<Image
									source={require("../assets/images/image2.png")}
									style={styles.arrow}
								/>
							</View>
							</View>
						</Link>
					
					<View style={styles.recent}>
						<Text style={styles.recentHeader}>Recently Climbed</Text>
						<View style={styles.latestLog}>
							{user.logs.length > 0 ? (
								<View>
									<Text style={styles.logDate}>
										{user.logs[user.logs.length - 1].dateCompleted}
									</Text>
									<Text style={styles.munroName}>
										{user.logs[user.logs.length - 1].munroName}
									</Text>
									<Text>{user.logs[user.logs.length - 1].munroHeight}m</Text>
									<Text>Notes: {user.logs[user.logs.length - 1].comment}</Text>
									<Text>
										Weather: {user.logs[user.logs.length - 1].weather}
									</Text>
								</View>
							) : (
								<View>
									<Text>You have no recent logs.</Text>
								</View>
							)}
						</View>
					</View>
				</View>
			</SafeAreaView>
			<NavBar />
		</View>
	);
}
const styles = StyleSheet.create({
	homepageContainer: {
		maxWidth: "100%",
		height: "100%",
	},

	outwithNavbar: {
		height: "90%",
		width: "100%",
	},
	logoAndName: {
		width: "100%",
		height: "40%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	logo: {
		width: "100%",
		alignItems: "center",
		height: "50%",
	},
	logoImage: {
		resizeMode: "contain",
		width: 200,
		height: 200,
	},

	greeting: {
		width: "100%",
		height: "50%",
		alignItems: "center",
	},
	greetingText: {
		fontSize: 28,
		textAlign: "center",
		color: "rgb(200, 220, 200)",
		marginTop: "10%",
		padding: "0%",
	},

	progressBarCont: {
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		alignSelf: "center",
	},
	progress: {
		alignSelf: "center",
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "25%",
		borderRadius: "15%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	progressHeader: {
		fontSize: 20,
		marginLeft: "10%",
		padding: "2%",
	},
	completed: {
		fontSize: 15,
		marginLeft: "10%",
		padding: "2%",
	},
	remaining: {
		fontSize: 15,
		marginLeft: "10%",
		padding: "2%",
	},

	barCont: {
		width: "75%",
	},
	progressBar: {
		width: "100%",
		height: "25%",
		backgroundColor: "rgba(0,0,0,0.1)",
		position: "absolute",
		borderRadius: "10%",
		zIndex: -3,
		borderColor: "white",
		borderWidth: 1,
	},
	progressAmount: {
		height: "25%",
		backgroundColor: "rgba(13, 130, 13,1)",
		borderRadius: "10%",
		position: "relative",
		zIndex: -2,
	},
	progressIcon: {
		marginTop: "-10%",
		left: "-4%",
	},
	progressPercent: {
		fontSize: 15,
		alignSelf: "center",
	},
	logLink: {
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "7%",
		borderRadius: "15%",
		marginTop: "3%",
		outline: "none",
		alignSelf: "center",
    display: 'flex',
    justifyContent: 'center'
	},
	log: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		resizeMode: "contain",
		height: 22,
		width: 22,
	},
	logText: {
		fontSize: 18,
		marginLeft: "10%",
		textAlign: "center",
		alignSelf: "center",
	},
	arrow: {
		resizeMode: "contain",
		height: 20,
		width: 20,
		marginRight: "5%",
		alignSelf: "center",
	},
	recent: {
		alignSelf: "center",
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "25%",
		borderRadius: "15%",
		marginTop: "3%",
		padding: "1%",
	},
	recentHeader: {
		fontSize: 20,
		justifyContent: "center",
		marginLeft: "10%",
		marginTop: "3%",
		marginBottom: "3%",
	},
	logDate: {
		marginRight: "2%",
		textAlign: "right",
	},
	nameAndHeight: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	munroName: {
		fontSize: 18,
	},
	latestLog: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		padding: "2%",
		borderWidth: 2,
		borderColor: "rgba(250,250,250,0.7)",
		borderRadius: "10%",
	},
});
