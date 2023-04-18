import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  Modal,
  SafeAreaView,
  Button,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import Icon from "react-native-vector-icons/MaterialIcons";
import FilterModal from "../components/FilterModal";
import NavBar from "../components/NavBar";

const ListContainer = ({ munros }) => {
  const tableHead = ["Name", "Height", "Completed"];
  const [filteredMunros, setFilteredMunros] = useState([]);
  const [easyMunros, setEasyMunros] = useState([]);
  const [moderateMunros, setModerateMunros] = useState([]);
  const [hardMunros, setHardMunros] = useState([]);
  const [completedMunros, setCompletedMunros] = useState([]);
  const [uncompletedMunros, setUncompletedMunros] = useState([])

  const filterMunros = (input) => {
    const filteredNodes = munros.filter((munro) => {
      return munro.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredMunros(filteredNodes);
    if (input === "") {
      setFilteredMunros([]);
    }
  };

  const handleFilterMunros = (text) => {
    filterMunros(text);
  };

  const handleFilterEasyMunros = () => {
    const filteredEasyMunros = munros.filter((munro) => {
      return munro.difficulty === "Easy";
    });
    setEasyMunros(filteredEasyMunros);
    setHardMunros([]);
    setModerateMunros([]);
  };

  const handleFilterModerateMunros = () => {
    const filteredModerateMunros = munros.filter((munro) => {
      return munro.difficulty === "Moderate";
    });
    setModerateMunros(filteredModerateMunros);
    setEasyMunros([]);
    setHardMunros([]);
  };

  const handleFilterHardMunros = () => {
    const filteredHardMunros = munros.filter((munro) => {
      return munro.difficulty === "Hard";
    });
    setHardMunros(filteredHardMunros);
    setEasyMunros([]);
    setModerateMunros([]);
  };

  const handleFilterCompletedMunros = () => {
    const filterCompletedMunros = munros.filter((munro) => {
      return munro.climbed;
    })
    setCompletedMunros(filterCompletedMunros);
    setUncompletedMunros([]);
    setEasyMunros([]);
    setModerateMunros([]);
    setHardMunros([]);
  }

  const handleFilterUncompletedMunros = () => {
    const filterUncompletedMunros = munros.filter((munro) => {
      return !munro.climbed;
    })
    setUncompletedMunros(filterUncompletedMunros);
    setCompletedMunros([]);
    setEasyMunros([]);
    setModerateMunros([]);
    setHardMunros([]);
  }

  const handleFilterAllMunros = () => {
      setCompletedMunros([]);
      setUncompletedMunros([]);
      setEasyMunros([]);
      setModerateMunros([]);
      setHardMunros([]);
  }

  const handleSortNamesAlphabetically = () => {
    const sortedNames = munros.sort((a,b) => {
      return a.name - b.name
    })
  }

  let res;
  if (filteredMunros.length > 0) {
    res = filteredMunros;
  } else if (easyMunros.length > 0) {
    res = easyMunros;
  } else if (moderateMunros.length > 0) {
    res = moderateMunros;
  } else if (hardMunros.length > 0) {
    res = hardMunros;
  } else if (completedMunros.length > 0) {
    res = completedMunros;
  } else if (uncompletedMunros.length > 0) {
    res = uncompletedMunros;
  } else {
    res = munros;
  }

  return (
<View style={styles.listCont}>
    <SafeAreaView>
      <View style={styles.searchFilter}>
        <TextInput
          style={styles.textInput}
          placeholder="Search Munros:"
          onChangeText={handleFilterMunros}
        ></TextInput>
        <FilterModal handleFilterCompletedMunros={handleFilterCompletedMunros} handleFilterUncompletedMunros={handleFilterUncompletedMunros} handleFilterEasyMunros={handleFilterEasyMunros} handleFilterModerateMunros={handleFilterModerateMunros} handleFilterHardMunros={handleFilterHardMunros} handleFilterAllMunros={handleFilterAllMunros}/>
      </View>

      <ScrollView style={styles.ScrollView}>
        <Table
          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
          style={styles.table}
        >
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
						{
							(munroItems = res.map((munro, index) => {
								let climbedIcon;
								if (munro.climbed) {
									climbedIcon = (
										<Icon
											name="landscape"
											size={35}
											color="green"
											alignSelf={"center"}
										/>
									);
								} else {
									climbedIcon = (
										<Icon
											name="landscape"
											size={25}
											color="grey"
											alignSelf={"center"}
										/>
									);
								}
								return (
									<Row
										key={index}
										textStyle={styles.dataText}
										data={[munro.name, munro.height + "m", climbedIcon]}
										heightArr={[28, 28]}
									/>
								);
							}))
						}
					</Table>
				</ScrollView>
			</SafeAreaView>
			<NavBar />
		</View>
	);
};


const styles = StyleSheet.create({
  listCont: {
    height: '100%',
    width: '100%'
  },

  container: { 
    flex: 1, 
    padding: 16,
    paddingTop: 30},
  head: { 
    height: 40, 
    backgroundColor: 'rgba(0,0,0,0.3)'},
  text: { margin: 6 , fontSize: 15, color: 'white'}, 
  scrollView: { marginHorizontal: 25},
  textInput: {
    margin: "8%",
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
    height: '5%',
    borderRadius: '10%'
  },
  table: { backgroundColor: 'rgba(250, 250, 250, 0.3)',
  width: '90%',
  alignSelf: 'center',

  },

  ScrollView: {
    height: '68%'
  },
  dataText: {
    fontSize: 18,
    margin: '8%'
  }


});
export default ListContainer;
