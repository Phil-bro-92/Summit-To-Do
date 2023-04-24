import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable, StyleSheet
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Request from "../helpers/Request";

const AddLog = ({ munro, user, dbMunros }) => {
	const [LogFormVisible, setLogFormVisible] = useState(true);
	const [LogsVisibile, setLogVisible] = useState(false);
	const [dbMunro, setDbMunro] = useState({});
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
	const [updateUsers, setUpdateUsers] = useState({
		name: user.name,
		email: user.email,
		password: user.password,
		munrosCompleted: user.munrosCompleted,
		logs: user.logs,
		id: user.id,
	});
	const [newLog, setNewLog] = useState({
		comment: "",
		dateCompleted: "",
		weather: "",
		munro: { name: munro.name, height: munro.height },
	});

	// const addedMunro = [{name: "Ben Nevis", height: 2343}]
	const addedLog = [...user.logs, newLog];

	user1 = {
		name: user.name,
		email: user.email,
		password: user.password,
		munrosCompleted: user.munrosCompleted.push(dbMunro),
		logs: addedLog,
		id: user.id,
	};

	useEffect(() => {
		// console.log(addedMunro)
		console.log(addedLog)
		setUpdateUsers(user1);
	}, [newLog]);




  useEffect(() => {
   updateDbMunro()
  }, [munro])


  const updateDbMunro = () => {
    dbMunros.filter((singleMunro) => {
			if (
				singleMunro.name === munro.name &&
				singleMunro.height === munro.height
			) {
				setDbMunro(singleMunro);
			}
		});
  }

	const updateUser = () => {
		const request = new Request();
		request.patch(
			"http://172.19.43.158:8080/api/users/" + user.id,
			updateUsers
		);
	};

	const handleSaveLog = () => {
		setNewLog({
			comment: comment,
			dateCompleted: date,
			weather: "Sunny",
			munro: { name: munro.name, height: munro.height },
		});
		setLogFormVisible(false);
		setLogVisible(true);
		updateUser(updateUsers);
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
		<View>
			{LogFormVisible ? (
				<View style={styles.logFormCont}>
					<TextInput
						onChangeText={handleCommentChange}
						placeholder="Notes"
					></TextInput>
					<TextInput
						onChangeText={handleDateChange}
						keyboardType="number-pad"
						placeholder="DD/MM/YYYY"
					></TextInput>
					<View>
						<Text>Weather:</Text>
						<Pressable onPress={handleSunnyChange}>
							<FontAwesomeIcon color={sunnySelected} icon={faSun} size={15} />
						</Pressable>
						<Pressable onPress={handleCloudyChange}>
							<FontAwesomeIcon
								color={cloudySelected}
								icon={faCloud}
								size={15}
							/>
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
					<Text onPress={handleSaveLog} >Save Log</Text>
				</View>
			) : null}

			{LogsVisibile ? (
				<View>
					{/* <View><Text>{user.logs[0].comment}</Text></View> */}
					<View>
						<Button onPress={handleAddLog} title="Add New Log" />
					</View>
				</View>
			) : null}
		</View>
	);
};
const styles = StyleSheet.create({
	logFormCont: {
		borderWidth: 1,
		borderColor: 'white'
	}
})
export default AddLog;
