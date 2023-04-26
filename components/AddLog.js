import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Request from "../helpers/Request";
import { useNavigate } from "react-router-native";

const AddLog = ({ munro, user }) => {
  const [LogFormVisible, setLogFormVisible] = useState(true);
  const [LogsVisibile, setLogVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [sunny, setSunny] = useState(false);
  const [rainy, setRainy] = useState(false);
  const [snowy, setSnowy] = useState(false);
  const [cloudy, setCloudy] = useState(false);
  const [sunnySelected, setSunnySelected] = useState("grey");
  const [rainySelected, setRainySelected] = useState("grey");
  const [snowySelected, setSnowySelected] = useState("grey");
  const [cloudySelected, setCloudySelected] = useState("grey");
  const [serverMunros, setServerMunros] = useState([]);
  const [currentMunro, setCurrentMunro] = useState({});
  // const [newLog, setNewLog] = useState({});
  const [currentUser, setCurrentUser] = useState({})
  const [userLogs, setUserLogs] = useState([])

  


  const navigate = useNavigate()

  // useEffect(() => {
  //   fetchUserLogs();
  // }, [newLog])

  useEffect(() => {
    fetchDbMunros();
  }, [currentMunro]);

  useEffect(() => {
    findMunro();
  }, [serverMunros]);

  useEffect(() => {
    fetchUser()
  }, []);


  const findMunro = () => {
    serverMunros.map((serverMunro) => {
      if (
        serverMunro.name === munro.name &&
        serverMunro.height === munro.height
      ) {
        setCurrentMunro(serverMunro);
      }
    });
  };

  const fetchDbMunros = () => {
    const request = new Request();
    request
      .get("http://localhost:8080/api/munros")
      .then((data) => setServerMunros(data));
  };

  const fetchUser = () => {
    const request = new Request();
    request
    .get("http://localhost:8080/api/users/" + user.id)
    .then((data) => setCurrentUser(data));
  };


  let weatherArray = []
  const weatherForm = () => {
    if (sunnySelected === "green"){
      weatherArray.push("Sunny")
    } else if (rainySelected === "green") {
			weatherArray.push("Rainy");
		} else if (snowySelected === "green") {
			weatherArray.push("Snowy");
		} else if (cloudySelected === "green") {
			weatherArray.push("Cloudy");
		} 
    console.log(weatherArray)
  }



  const updateUser = () => {
    const userCopy = {... user}
    const log = {
			comment: comment,
			dateCompleted: date,
			weather: weatherArray.toString(),
			munroName: currentMunro.name,
      munroHeight: currentMunro.height
		};
    userCopy.munrosCompleted.push(currentMunro)
    userCopy.logs.push(log);
    const request = new Request();
    request.patch("http://localhost:8080/api/users/" + user.id, userCopy);
    navigate('/')
  };

  const handleSaveLog = () => {
    setLogFormVisible(false);
    setLogVisible(true);
    weatherForm();
    updateUser();

  };
  const handleAddLog = () => {
    setLogFormVisible(true);
    setLogVisible(false);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };
  const handleDateChange = (text) => {
    setDate(text);
  };



  const handleSunnyChange = () => {
    if (sunny === false) {
      setSunny(true);
      setSunnySelected("green");

    } else {
      setSunny(false);
      setSunnySelected("grey");
    }
  };
  const handleRainyChange = () => {
    if (rainy === false) {
      setRainy(true);
      setRainySelected("green");
    } else {
      setRainy(false);
      setRainySelected("grey");
    }
  };
  const handleSnowyChange = () => {
    if (snowy === false) {
      setSnowy(true);
      setSnowySelected("green");
    } else {
      setSnowy(false);
      setSnowySelected("grey");
    }
  };
  const handleCloudyChange = () => {
    if (cloudy === false) {
      setCloudy(true);
      setCloudySelected("green");
    } else {
      setCloudy(false);
      setCloudySelected("grey");
    }
  };

  return (
		<View style={styles.formCont}>
			<View style={styles.rowOne}>
				<TextInput
					style={styles.notesInput}
					onChangeText={handleCommentChange}
					placeholder={"Notes"}
					textAlign={"left"}
					paddingLeft={5}
				></TextInput>
			</View>
			<View style={styles.rowTwo}>
				<View style={styles.dateCont}>
					<TextInput
						style={styles.dateInput}
						onChangeText={handleDateChange}
						keyboardType="number-pad"
						placeholder="DD/MM/YYYY"
					></TextInput>
				</View>
				<View style={styles.weatherIcons}>
					<Pressable onPress={handleSunnyChange}>
						<FontAwesomeIcon color={sunnySelected} icon={faSun} size={15} />
					</Pressable>
					<Pressable onPress={handleCloudyChange}>
						<FontAwesomeIcon color={cloudySelected} icon={faCloud} size={15} />
					</Pressable>
					<Pressable onPress={handleRainyChange}>
						<FontAwesomeIcon
							color={rainySelected}
							icon={faCloudRain}
							size={15}
						/>
					</Pressable>
					<Pressable onPress={handleSnowyChange}>
						<FontAwesomeIcon
							color={snowySelected}
							icon={faSnowflake}
							size={15}
						/>
					</Pressable>
				</View>
			</View>
			<View style={styles.rowThree}>
				{/* <View>
					<View>
						<Button onPress={handleAddLog} title="Add New Log" />
					</View>
				</View> */}
				<Pressable onPress={handleSaveLog}>
					<View style={styles.saveButton}>
						<Text style={styles.saveButtonText}>Save</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	formCont: {
		width: "100%",
		height: "100%",
		borderWidth: 2,
		borderColor: "rgba(13,13,13,0.2)",
		borderRadius: "20%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	rowOne: {
		width: "100%",
		height: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		borderWeight: 1,
		borderColor: "rgba(13,13,13,0.5)",
	},

	notesInput: {
		width: "90%",
		height: "70%",
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "rgba(13,13,13,0.5)",
		borderRadius: "20%",
	},
	rowTwo: {
		width: "90%",
		height: "20%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "center",
	},
  dateCont:{
    width: '50%',
  },
	dateInput: {
		borderWidth: 1,
		borderColor: "rgba(13,13,13,0.5)",
		borderRadius: "20%",
    padding: '2%'
	},
	weatherIcons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
    width: '40%'
	},
	rowThree: {
		width: "100%",
		height: "30%",
	},
	saveButton: {
		width: "50%",
		borderRadius: "20%",
		borderWidth: 1,
		borderColor: "white",
		backgroundColor: "rgba(13,13,13,0.5)",
		alignSelf: "center",
    margin: '2%'
	},
	saveButtonText: {
		color: "white",
		textAlign: "center",
		padding: "2%",
	},
});
export default AddLog;