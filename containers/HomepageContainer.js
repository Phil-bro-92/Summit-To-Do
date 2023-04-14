import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseChimney, faLocationPin, faMapPin, faCircleUser, faMountain} from '@fortawesome/free-solid-svg-icons';
import background from '../containers/background3.png';


export default function HomepageContainer (){
  return (
      <View style={styles.homepageContainer}>
     <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.navbar}>
        <FontAwesomeIcon style={styles.icon} icon={faHouseChimney} size={30}/>
        <FontAwesomeIcon style={styles.icon} icon={faMountain}size={30}/>
        <FontAwesomeIcon style={styles.icon} icon={faMapPin}size={30}/>
        <FontAwesomeIcon style={styles.icon} icon={faCircleUser}size={30}/>
    </View>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
   homepageContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
   },

  backgroundImage:{
    width: 400,
    height: 900
  },

  navbar: {
    width: '95%',
    marginBottom: '10%',
    height: 90,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: '50%',
  },
  icon: {
    color: 'rgb(200, 200, 220)',
    margin: 30,
  }

});