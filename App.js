import React, {useState, useEffect} from "react";
import {
  NativeRouter,
  Routes,
  Route,
  ImageBackground,
} from "react-router-native";
import HomepageContainer from "./containers/HomepageContainer";
import { StyleSheet, View } from "react-native";
import ListContainer from "./containers/ListContainer";
import MapContainer from "./containers/MapContainer";
import UserContainer from "./containers/UserContainer";
import NavBar from "./components/NavBar";
// import background from './background2.png';

const App=()=> {
  const [munros, setMunros] = useState([]);

  useEffect(() => {
    fetchMunros();
  },[]);

  const fetchMunros = () => {
    fetch(
      "https://raw.githubusercontent.com/Phil-bro-92/munro_api/main/munroAPI.json"
    )
      .then((res) => res.json())
      .then((data) => setMunros(data));
  };
  return (
    <NativeRouter>
      <View style={styles.container} >
        {/* <ImageBackground source={background} style={styles.backgroundImage}> */}
          <Routes>
            <Route exact path="/" element={<HomepageContainer />} />
            <Route exact path="/munro-list" element={<ListContainer munros={munros} />} />
            <Route exact path="/munro-map" element={<MapContainer munros={munros} />} />
            <Route exact path="/user-profile" element={<UserContainer />} />
          </Routes>
          <NavBar />
        {/* </ImageBackground> */}
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -2,
  },
  container: {
    width: '100%',
    height: '100%',
   },
});

export default App;
