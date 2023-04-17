import { StyleSheet, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseChimney, faMapPin, faCircleUser, faMountainSun} from '@fortawesome/free-solid-svg-icons';

export default function NavBar(){
        return (
                      <View style={styles.navbar}>
        <FontAwesomeIcon style={styles.icon} icon={faHouseChimney} size={28}/>
        <FontAwesomeIcon style={styles.icon} icon={faMountainSun}size={28}/>
        <FontAwesomeIcon style={styles.icon} icon={faMapPin}size={28}/>
        <FontAwesomeIcon style={styles.icon} icon={faCircleUser}size={28}/>
    </View>
        )
}

const styles = StyleSheet.create({
         navbar: {
    width: '95%',
    marginBottom: '10%',
    height: '9%',
    backgroundColor:'rgba(0, 30, 0, 0.4)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: '30%',
  },
  icon: {
    color: 'rgb(200, 220, 200)',
    alignSelf: 'center'
  }
})