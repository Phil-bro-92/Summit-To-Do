import { StyleSheet, Text, View, Image} from 'react-native';

import { useFonts } from 'expo-font';
import logo from '../containers/icon3.png';
import NavBar from '../components/NavBar';



export default function HomepageContainer (){


  const name = "José";

    const [fontsLoaded] = useFonts({
    'Sen-Bold': require('../assets/fonts/Sen-Bold.ttf'),
    'Sen-Regular': require('../assets/fonts/Sen-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
  })


  return (
      <View style={styles.homepageContainer}>
     
     
    <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage}/>
      </View>
        <View style={styles.greeting}>
    <Text style={styles.greetingText}>Hi {name}!</Text>
    </View>
  
    </View>
  )
}
const styles = StyleSheet.create({
   homepageContainer: {
    width: '100%',
    height: '100%',
   },

  backgroundImage:{
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: -2
  },
  greeting: {
    marginTop: '-25%'

  },
  greetingText: {
    fontSize: 40,
    textAlign: 'center',
     color: 'rgb(200, 220, 200)',
     fontFamily: 'Poppins-Bold'
  },
  logo: {
    width: '100%',

  },
  logoImage: {
    marginTop: '12%',
    width: '40%',
    height: '30%',
    alignSelf: 'center'
  }

});