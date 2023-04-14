import React from 'react';
import HomepageContainer from './containers/HomepageContainer';
import { StyleSheet, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <HomepageContainer />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})
