import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const AddLog = () => {
  const [LogFormVisible, setLogFormVisible] = useState(true);
  const [LogsVisibile, setLogVisible] = useState(false);

  const handleSaveLog = () => {
    setLogFormVisible(false);
    setLogVisible(true);
  };
  const handleAddLog = () => {
    setLogFormVisible(true);
    setLogVisible(false);
  };
  return (
    <View>
      {LogFormVisible ? (
        <View>
          <TextInput placeholder="Leave a comment"></TextInput>
          <View>
            <Text>Weather:</Text>
          </View>
          <Text>Date section</Text>
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
