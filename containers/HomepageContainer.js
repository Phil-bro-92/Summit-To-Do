import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChildReaching, faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import NavBar from '../components/NavBar';
import {Link} from 'react-router-native';


export default function HomepageContainer ({munros}){

  const munrosCompleted = munros.filter((munro, index) => {
        return munro.climbed === true
  })

  const munrosRemaining = 282 - (munrosCompleted.length) 


  const name = "José";

//     const [fontsLoaded] = useFonts({
//     'Sen-Bold': require('../assets/fonts/Sen-Bold.ttf'),
//     'Sen-Regular': require('../assets/fonts/Sen-Regular.ttf'),
//     'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
//   })

  const progressBarPercentage = Math.round((100/282 )* munrosCompleted.length);


  

  return (
		<View style={styles.homepageContainer}>
			<NavBar />
			<View style={styles.logo}>
				<Image
					source={require("../assets/images/Logo.png")}
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.greeting}>
				<Text style={styles.greetingText}>Hi {name}!</Text>
			</View>
			<View style={styles.progress}>
				<Text style={styles.progressHeader}>Munros</Text>
				<Text style={styles.completed}>
					Completed: {munrosCompleted.length}
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
				</View>
				<View>
					<Text style={styles.progressPercent}>{progressBarPercentage}%</Text>
				</View>
			</View>
			<Link to={"/munro-list"} component={TouchableOpacity} underlayColor={'white'} style={styles.logLink}>
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
			</Link>
			<View style={styles.recent}>
				<Text style={styles.recentHeader}>Most Recently Climbed</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	homepageContainer: {
		width: "100%",
		height: "100%",
	},

	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "fixed",
		zIndex: -2,
	},
	greeting: {
		marginTop: "-35%",
	},
	greetingText: {
		fontSize: 40,
		textAlign: "center",
		color: "rgb(200, 220, 200)",
	},
	logo: {
		width: "100%",
		marginTop: "5%",
	},
	logoImage: {
		marginTop: "12%",
		width: "40%",
		height: "30%",
		alignSelf: "center",
	},
	progress: {
		alignSelf: "center",
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "20%",
		borderRadius: "20%",
		marginTop: "8%",
	},
	progressHeader: {
		fontSize: 20,
		marginTop: "5%",
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
	progressBarCont: {
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		alignSelf: "center",
	},
	barCont: {
		width: "80%",
	},
	progressBar: {
		width: "100%",
		height: "22%",
		backgroundColor: "rgba(0,0,0,0.1)",
		position: "absolute",
		borderRadius: "10%",
		zIndex: -3,
		borderColor: "white",
		borderWidth: 1,
	},
	progressAmount: {
		height: "22%",
		backgroundColor: "rgba(13, 130, 13,1)",
		borderRadius: "10%",
		position: "relative",
		zIndex: -2,
	},
	progressIcon: {
		marginTop: "-10%",
		left: "-5%",
	},
	progressPercent: {
		fontSize: 15,
		alignSelf: "center",
		position: "absolute",
	},
	logLink: {
		padding: "0%",
		margin: "0%",
		alignSelf: "center",
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "7%",
		borderRadius: "20%",
		marginTop: "3%",
		outline: 'none'
	},
	log: {
			display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: '5%',
		padding: '0%'

	},
	image: {
		resizeMode: "contain",
		height: 25,
		width: 25,
	},
	logText: {
		fontSize: 18,
		marginLeft: "10%",
	},
	arrow: {
		resizeMode: "contain",
		height: 20,
		width: 20,
		marginRight: "5%",
	},
	recent: {
		alignSelf: "center",
		backgroundColor: "rgba(250,250, 250, 0.7)",
		width: "70%",
		height: "20%",
		borderRadius: "20%",
		marginTop: "3%",
	},
	recentHeader: {
		fontSize: 20,
		marginTop: "5%",
		marginLeft: "10%",
		padding: "2%",
	},
});