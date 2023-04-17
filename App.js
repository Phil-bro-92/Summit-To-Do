import React from "react";
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
  return (
    <NativeRouter>
      <View >
        {/* <ImageBackground source={background} style={styles.backgroundImage}> */}
          <Routes>
            <Route exact path="/" element={<HomepageContainer />} />
            <Route exact path="/munro-list" element={<ListContainer />} />
            <Route exact path="/munro-map" element={<MapContainer />} />
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
});

export default App;
