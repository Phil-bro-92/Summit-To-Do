import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const ListContainer = ({ munros }) => {
  munros.map((munro) => {
    console.log(munro.name);
  });

  // const header = ["Name", "Height", "Completed"];
  const [tableHead, setTableHead] = useState(["Name", "Height", "Completed"]);
  const [tableData, setTableData] = useState([
    ["1", "2", "3"],
    ["a", "b", "c"],
    ["1", "2", "3"],
    ["a", "b", "c"],
  ]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
        {
          (munroItems = munros.map((munro, index) => {
            return (
              <Rows
                key={index}
                data={[munro.name, munro.height, munro.climbed]}
                heightArr={[28, 28]}
              />
            );
          }))
        }
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
export default ListContainer;
