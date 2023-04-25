import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  Modal,
  StyleSheet
} from "react-native";
import FilterModalContent from "./FilterModalContent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faX } from "@fortawesome/free-solid-svg-icons";


const FilterModal = ({handleFilterCompletedMunros,handleFilterUncompletedMunros, handleFilterEasyMunros, handleFilterModerateMunros, handleFilterHardMunros, handleFilterAllMunros}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
		<View>
			<Modal
				style={styles.modalCont}
				animationType="none"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Pressable
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<FontAwesomeIcon icon={faX} size={13} style={styles.closeCross}/>
						</Pressable>
						<FilterModalContent
							handleFilterCompletedMunros={handleFilterCompletedMunros}
							handleFilterUncompletedMunros={handleFilterUncompletedMunros}
							handleFilterEasyMunros={handleFilterEasyMunros}
							handleFilterModerateMunros={handleFilterModerateMunros}
							handleFilterHardMunros={handleFilterHardMunros}
							handleFilterAllMunros={handleFilterAllMunros}
						/>
					</View>
				</View>
			</Modal>
			<View style={styles.filterSearch}>
				<Pressable
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<Text>
						<FontAwesomeIcon
							icon={faFilter}
							size={20}
							color={"rgba(250,250,250, 0.7)"}
						/>
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles=StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: '25%',
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
  closeCross:{
  marginBottom: '5%'
  }
})

export default FilterModal
