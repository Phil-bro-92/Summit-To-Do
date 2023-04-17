import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Marker } from "react-native-maps";

const MapContainer = ({ munros }) => {
  munros.map((munro) => {
    console.log(munro.name);
  });

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 56.8,
        longitude: -4.2026,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
    >
      {munros.map((munro, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: munro.latitude, longitude: munro.longitude }}
          title={munro.name}
          description={munro.height + "m"}
        >
          <Icon name="landscape" size={24} color="black" />
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapContainer;
