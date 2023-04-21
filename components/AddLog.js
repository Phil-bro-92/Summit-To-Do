import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable, DatePickerIOS, Modal} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloud, faCloudRain, faSnowflake, faSun, faX } from "@fortawesome/free-solid-svg-icons";


const AddLog = () => {
  const [LogFormVisible, setLogFormVisible] = useState(true);
  const [LogsVisibile, setLogVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [chosenDate, setChosenDate] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveLog = () => {
    setLogFormVisible(false);
    setLogVisible(true);
  };
  const handleAddLog = () => {
    setLogFormVisible(true);
    setLogVisible(false);
  };

  const handleSubmitDate = (date) => {
    setChosenDate(date)
    console.log(date)
  }
  return (
		<View>
			{LogFormVisible ? (
				<View>
					<TextInput placeholder="Leave a comment"></TextInput>
					<View>
						<Text>Weather:</Text>
						<Pressable>
							<FontAwesomeIcon icon={faSun} size={15} />
						</Pressable>
						<Pressable>
							<FontAwesomeIcon icon={faCloud} size={15} />
						</Pressable>
						<Pressable>
							<FontAwesomeIcon icon={faCloudRain} size={15} />
						</Pressable>
						<Pressable>
							<FontAwesomeIcon icon={faSnowflake} size={15} />
						</Pressable>
					</View>
					<Modal
						style={styles.modalCont}
						animationType="none"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<DatePickerIOS date={currentDate} mode="date" onDateChange={handleSubmitDate}/>
						<Pressable
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text>Submit</Text>
						</Pressable>
					</Modal>
					<Pressable
						onPress={() => {
							setModalVisible(true);
						}}
					>
						<Text >Select Date</Text>
					</Pressable>
          {chosenDate ? <Text>{chosenDate}</Text> : null}
          
					<Button onPress={handleSaveLog} title="Save" />

				</View>
			) : null}
			{LogsVisibile ? (
				<View>
					<View>
						<Text>Wow that was a tough one!</Text>
					</View>
					<View>
						<Button onPress={handleAddLog} title="Add Log" />
					</View>
				</View>
			) : null}
		</View>
	);
};

export default AddLog;
