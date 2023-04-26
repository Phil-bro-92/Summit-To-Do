import React from "react";
import { View, StyleSheet, Button } from "react-native";

const FilterModalContent = ({handleFilterCompletedMunros,handleFilterUncompletedMunros, handleFilterEasyMunros, handleFilterModerateMunros, handleFilterHardMunros, handleFilterAllMunros, handleToggle}) => {

  const handleAllToggle = () => {
    handleToggle()
    handleFilterAllMunros()
  }

  const handleCompletedToggle = () => {
    handleToggle()
    handleFilterCompletedMunros()
  }

  const handleUncompletedToggle = () => {
    handleToggle()
    handleFilterUncompletedMunros()
  }

  const handleEasyToggle = () => {
    handleToggle()
    handleFilterEasyMunros()
  }

  const handleModerateToggle = () => {
    handleToggle()
    handleFilterModerateMunros()
  }

  const handleHardToggle = () => {
    handleToggle()
    handleFilterHardMunros()
  }

  return (
    <View>
      <Button
        title="All"
        onPress={handleAllToggle}
      />
      <Button
        title="Completed"
        onPress={handleCompletedToggle}
      />
      <Button
        title="Uncompleted"
        onPress={handleUncompletedToggle}
      />
      <Button title="Easy" onPress={handleEasyToggle}
      />
      <Button
        title="Moderate"
        onPress={handleModerateToggle}
      />
      <Button title="Hard" onPress={handleHardToggle}/>
    </View>
  );
};

styles=StyleSheet.create({
modalCont: {

}
})
export default FilterModalContent;
