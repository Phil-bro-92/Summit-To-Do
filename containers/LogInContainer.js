import React, {useEffect} from 'react';
import {useHistory} from 'react-router-native';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';



const LogInContainer = () => {


  return (
		<View style={styles.logInContainer}>
			<ImageBackground
				source={require("../assets/background/loginbackground.png")}
				style={styles.background}
			>
                        <View style={styles.logoCont}>
                                <Image source={require('../assets/images/LogoWhite.png')} style={styles.image}/>
                        </View>
                        </ImageBackground>
		</View>
	);
}

const styles=StyleSheet.create({
        logInContainer:{
                height: '100%',
                width: '100%',
        },
        background:{
                height: '100%',
                width: '100%'
        },
        logoCont: {
                alignSelf: 'center',
        },
        image:{
                width: '50%',
                height: '50%',
                alignSelf: 'center'
        }

})

export default LogInContainer