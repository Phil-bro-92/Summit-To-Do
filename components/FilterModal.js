import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  Modal,
  StyleSheet
} from "react-native";
import FilterModalContent from "./FilterModalContent";

const FilterModal = ({handleFilterCompletedMunros,handleFilterUncompletedMunros, handleFilterEasyMunros, handleFilterModerateMunros, handleFilterHardMunros, handleFilterAllMunros}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FilterModalContent handleFilterCompletedMunros={handleFilterCompletedMunros} handleFilterUncompletedMunros={handleFilterUncompletedMunros} handleFilterEasyMunros={handleFilterEasyMunros} handleFilterModerateMunros={handleFilterModerateMunros} handleFilterHardMunros={handleFilterHardMunros} handleFilterAllMunros={handleFilterAllMunros}/>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={styles.filterSearch}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text>Filter</Text>
          </Pressable>
          </View>
    </View>
  )
}

const styles=StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
})

export default FilterModal
