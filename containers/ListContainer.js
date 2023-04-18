import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
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
import NavBar from "../components/NavBar";

const ListContainer = ({ munros }) => {
  const tableHead = ["Name", "Height", "Completed"];
  const [filteredMunros, setFilteredMunros] = useState([]);

console.log(filterMunros);
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

  let res;
  if (filteredMunros.length > 0) {
    res = filteredMunros;
  } else {
    res = munros;
  }

  return (
		<View style={styles.listCont}>
			<SafeAreaView>
				<TextInput
					style={styles.textInput}
					placeholder="Search Munros:"
					onChangeText={handleFilterMunros}
				></TextInput>
				<ScrollView style={styles.ScrollView}>
					<Table
						borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}
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
