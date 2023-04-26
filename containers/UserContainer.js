import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import NavBar from "../components/NavBar";
import { SafeAreaView } from "react-native";
import { Link } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const UserContainer = ({ user }) => {


  const getLogs = user.logs.map((log) => {
    return (
      <View style={styles.logCont} key={log.id}>
        <View style={styles.topRow}>
          <Text style={styles.munroName}>{log.munroName}</Text>
          <View style={styles.dateAndBin}>
            <Text style={styles.logDate}>{log.dateCompleted}</Text>
          </View>
        </View>
        <Text>{log.munroHeight}m</Text>
        <Text>Notes: {log.comment}</Text>
        <Text>Weather: {log.weather}</Text>
      </View>
    );
  });

  return (
    <>
      <NavBar />
      <SafeAreaView>
        <View style={styles.userContainer}>
          <View style={styles.logsCont}>
            <Text style={styles.header}>Your Logs</Text>
            <View style={styles.logList}>
              <ScrollView style={styles.scrollView}>{getLogs}</ScrollView>
            </View>
          </View>

          <Link
            style={styles.logOutCont}
            to={"/login"}
            underlayColor={"transparent"}
          >
            <View>
              <Text style={styles.logOutText}>Log Out</Text>
            </View>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  userContainer: {},
  logsCont: {
    width: "100%",
    height: "87%",
    marginTop: "5%",
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: 500,
    alignSelf: "center",
  },
  logList: {
    alignSelf: "center",
    width: "95%",
    borderColor: "white",
    borderRadius: "20%",
    height: "90%",
    marginTop: "5%",
  },
  logCont: {
    borderWidth: 1,
    borderColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "2%",
    borderWidth: 2,
    borderColor: "rgba(250,250,250,0.7)",
    borderRadius: "10%",
    backgroundColor: "rgba(250,250,250, 0.5)",
    margin: "2%",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateAndBin: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  logDate: {
    textAlign: "right",
    color: "green",
    paddingRight: "2%",
  },
  munroName: {
    fontSize: 18,
  },
  logOutCont: {
    alignSelf: "center",
    width: "70%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderWidth: 2,
    backgroundColor: "rgba(250,250,250, 0.6)",
    borderRadius: "20%",
    borderColor: "rgba(93, 159, 107, 0.8)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  logOutText: {
    textAlign: "center",
    fontSize: 20,
    color: "rgba(93, 159, 107, 1)",
    fontWeight: 500,
  },
});

export default UserContainer;
