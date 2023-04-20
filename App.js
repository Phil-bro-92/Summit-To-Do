import React, { useState, useEffect } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomepageContainer from "./containers/HomepageContainer";
import { StyleSheet, View, ImageBackground } from "react-native";
import ListContainer from "./containers/ListContainer";
import MapContainer from "./containers/MapContainer";
import UserContainer from "./containers/UserContainer";
import LogInContainer from "./containers/LogInContainer";
import RegisterContainer from "./containers/RegisterContainer";
import MunroContainer from "./containers/MunroContainer";

const App = () => {
  const [munros, setMunros] = useState([]);
  const [selectedMunro, setSelectedMunro] = useState([]);
  console.log(selectedMunro);

  useEffect(() => {
    fetchMunros();
  }, []);

  const fetchMunros = () => {
    fetch(
      "https://raw.githubusercontent.com/Phil-bro-92/munro_api/main/munroAPI.json"
    )
      .then((res) => res.json())
      .then((data) => setMunros(data));
  };

  const getSelectedMunro = (munro) => {
    setSelectedMunro(munro);
  };

  return (
    <NativeRouter initialEntries={["/login"]}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/background/lightenedbg.png")}
          style={styles.backgroundImage}
        >
          <Routes>
            <Route exact path="/login" element={<LogInContainer />} />
            <Route exact path="/register" element={<RegisterContainer />} />
            <Route
              exact
              path="/"
              element={<HomepageContainer munros={munros} />}
            />
            <Route
              exact
              path="/munro-list"
              element={
                <ListContainer
                  munros={munros}
                  getSelectedMunro={getSelectedMunro}
                />
              }
            />
            <Route exact path="/munro-card" element={<MunroContainer munro={selectedMunro} />} />

            <Route
              exact
              path="/munro-map"
              element={<MapContainer munros={munros} getSelectedMunro={getSelectedMunro} />}
            />
            <Route exact path="/user-profile" element={<UserContainer />} />
          </Routes>
        </ImageBackground>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -2,
  },
  container: {
    width: "100%",
    height: "100%",
  },
});

export default App;
