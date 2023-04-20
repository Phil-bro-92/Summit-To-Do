import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

const LogModal = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={munroModalVisible}
      onRequestClose={() => {
        
      }}
    ></Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    height: "70%",
    marginTop: "-5%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "20%",
    alignContent: "center",
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "40%",
    marginTop: "10%",
  },
  thirdRow: {
    height: "30%",
  },
  modalHeader: {
    width: "60%",
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: "50%",
    height: "50%",
    borderRadius: "10%",
  },
});

export default LogModal;
