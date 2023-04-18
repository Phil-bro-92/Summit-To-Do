import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const FilterModalContent = ({handleFilterCompletedMunros,handleFilterUncompletedMunros, handleFilterEasyMunros, handleFilterModerateMunros, handleFilterHardMunros, handleFilterAllMunros}) => {
  return (
    <View>
      <Button
        title="All"
        onPress={handleFilterAllMunros}
      />
      <Button
        title="Completed"
        onPress={handleFilterCompletedMunros}
      />
      <Button
        title="Uncompleted"
        onPress={handleFilterUncompletedMunros}
      />
      <Text>Difficulty:</Text>
      <Button title="Easy" onPress={handleFilterEasyMunros}
      />
      <Button
        title="Moderate"
        onPress={handleFilterModerateMunros}
      />
      <Button title="Hard" onPress={handleFilterHardMunros}/>
    </View>
  );
};

export default FilterModalContent;
