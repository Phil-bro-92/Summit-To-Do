import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  DatePickerIOS,
  Modal,
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

const AddLog = ({ munro }) => {
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
  const [newLog, setNewLog] = useState({
    comment: "",
    dateCompleted: "",
    weather: "",
    munro: {},
  });

  log1 = {
    comment: comment,
    dateCompleted: date,
    weather: "Sunny",
    munro: {},
  };

  useEffect(() => {
    setNewLog(log1);
  }, [date]);

  const handleSaveLog = () => {
	  const request = new Request();
	  request.post("http://172.19.43.158:8080/api/logs", newLog)
      setLogFormVisible(false);
      setLogVisible(true);
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
        <View>
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
