import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	SafeAreaView,
	TextStyle,
	Text,
} from "react-native";
import {
	Table,
	TableWrapper,
	Row,
	Cell,
	Cells,
} from "react-native-table-component";
import Icon from "react-native-vector-icons/MaterialIcons";
import FilterModal from "../components/FilterModal";
import NavBar from "../components/NavBar";
import { Link } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faA, faMountain } from "@fortawesome/free-solid-svg-icons";

const ListContainer = ({ munros, getSelectedMunro, user }) => {
	const [filteredMunros, setFilteredMunros] = useState([]);
	const [easyMunros, setEasyMunros] = useState([]);
	const [moderateMunros, setModerateMunros] = useState([]);
	const [hardMunros, setHardMunros] = useState([]);
	const [completedMunros, setCompletedMunros] = useState([]);
	const [uncompletedMunros, setUncompletedMunros] = useState([]);
	const [munrosAscending, setMunrosAscending] = useState([]);
	const [areMunrosAscending, setAreMunrosAscending] = useState(false);
	const [munrosAlphabetical, setMunrosAlphabetical] = useState([]);
	const [areMunrosAlphabetical, setAreMunrosAlphabetical] = useState(false);

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
		const filterCompletedMunros = user.munrosCompleted.filter((munro) => {
			return munro;
		});
		setCompletedMunros(filterCompletedMunros);
		setUncompletedMunros([]);
		setEasyMunros([]);
		setModerateMunros([]);
		setHardMunros([]);
	};

	const handleFilterUncompletedMunros = () => {
		const filterUncompletedMunros = user.munrosCompleted.filter((munro) => {
			return !munro;
		});
		setUncompletedMunros(filterUncompletedMunros);
		setCompletedMunros([]);
		setEasyMunros([]);
		setModerateMunros([]);
		setHardMunros([]);
	};

	const handleFilterAllMunros = () => {
		setCompletedMunros([]);
		setUncompletedMunros([]);
		setEasyMunros([]);
		setModerateMunros([]);
		setHardMunros([]);
	};

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
	} else if (munrosAscending.length > 0) {
		res = munrosAscending;
	} else if (munrosAlphabetical.length > 0) {
		res = munrosAlphabetical;
	} else {
		res = munros;
	}

	const handleSortNamesAlphabetically = () => {
		if (!areMunrosAlphabetical) {
			setAreMunrosAlphabetical(true);
			setMunrosAlphabetical(
				munros.sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					}
					if (a.name > b.name) {
						return 1;
					}
					return 0;
				})
			);
		} else {
			setAreMunrosAlphabetical(false);
			setMunrosAlphabetical(
				munros.sort((a, b) => {
					if (a.name > b.name) {
						return -1;
					}
					if (a.name < b.name) {
						return 1;
					}
					return 0;
				})
			);
		}
	};

	const handleSortHeight = () => {
		if (!areMunrosAscending) {
			setAreMunrosAscending(true);
			setMunrosAscending(munros.sort((a, b) => a.height - b.height));
		} else {
			setAreMunrosAscending(false);
			setMunrosAscending(munros.sort((a, b) => b.height - a.height));
		}
	};

	return (
		<View style={styles.listCont}>
			<SafeAreaView>
				<View style={styles.searchFilter}>
					<View style={styles.searchBarCont}>
						<TextInput
							style={styles.textInput}
							placeholder="Search Munros:"
							onChangeText={handleFilterMunros}
						></TextInput>
					</View>
					<View style={styles.filterModal}>
						<FilterModal
							handleFilterCompletedMunros={handleFilterCompletedMunros}
							handleFilterUncompletedMunros={handleFilterUncompletedMunros}
							handleFilterEasyMunros={handleFilterEasyMunros}
							handleFilterModerateMunros={handleFilterModerateMunros}
							handleFilterHardMunros={handleFilterHardMunros}
							handleFilterAllMunros={handleFilterAllMunros}
						/>
					</View>
				</View>
				<ScrollView style={styles.scrollView}>
					<Table style={styles.table}>
						<TableWrapper style={styles.tablewrap} width={"100%"}>
							<Cell
								data="Name"
								onPress={handleSortNamesAlphabetically}
								alignSelf={"center"}
								color={"white"}
							/>
							<Cell
								data={"Height"}
								onPress={handleSortHeight}
								alignSelf={"center"}
								color={"white"}
							/>
							<Cell data={"Completed"} alignSelf={"center"} color={"white"} />
						</TableWrapper>

						{
							(munroItems = res.map((munro, index) => {
								let climbedIcon;
								const result = user.munrosCompleted.some((userMunro) => userMunro.name === munro.name)
									if (result) {
										climbedIcon = (
											<FontAwesomeIcon
												icon={faMountain}
												size={25}
												color={"green"}
												style={styles.icon}
											/>
										);
									} else {
										climbedIcon = (
											<FontAwesomeIcon
												icon={faMountain}
												size={25}
												color={"rgba(250,250,250,0.7)"}
												style={styles.icon}
											/>
										);
									}
							
								return (
									<View>
										<Link
											underlayColor={"transparent"}
											to={"/munro-card"}
											onPress={() => getSelectedMunro(munro)}
										>
											<Row
												key={index}
												textStyle={styles.dataText}
												style={styles.data}
												data={[munro.name, munro.height + "m", climbedIcon]}
											/>
										</Link>
									</View>
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
		height: "100%",
		width: "100%",
	},

	searchFilter: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "-10%",
		marginBottom: "-10%",
	},
	searchBarCont: {
		width: "80%",
		alignSelf: "center",
		marginLeft: "-5%",
	},
	filterModal: {},
	head: {
		height: 40,
		backgroundColor: "rgba(0,0,0,0.3)",
	},
	text: { margin: 6, fontSize: 15, color: "white" },
	textInput: {
		margin: "5%",
		backgroundColor: "rgba(250, 250, 250, 0.5)",
		height: "20%",
		borderRadius: "10%",
		paddingLeft: "5%",
	},
	table: {
		backgroundColor: "rgba(250, 250, 250, 0.3)",
		width: "90%",
		alignSelf: "center",
		color: "white",
	},

	scrollView: {
		height: "65%",
		color: "white",
	},
	dataText: {
		fontSize: 18,
		margin: "8%",
		color: "rgba(50, 50, 30, 0.9)",
		textAlign: "center",
	},
	data: {
		borderBottomWidth: 1,
		borderBottomColor: "white",
		paddingTop: "2%",
		paddingBottom: "2%",
	},
	tablewrap: {
		display: "flex",
		flexDirection: "row",
		height: 40,
		backgroundColor: "rgba(0,0,0,0.2)",
		borderWidth: 1,
		borderColor: "white",
		color: "white",
	},
	tablewrapData: {
		color: "white",
		fontSize: 16,
		fontWeight: 500,
	},
	icon: {
		alignSelf: "center",
	},
});
export default ListContainer;
