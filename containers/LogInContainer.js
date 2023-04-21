import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { Link } from "react-router-native";

const LogInContainer = ({ users }) => {
  const [loginAccepted, setLoginAccepted] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");


  useEffect(() => {
    users.filter((user) => {
      if (user.email === emailInput && user.password === passwordInput){
            setLoginAccepted(true);
      }
    })
, [passwordInput]})
  

  const handleEmailInput = (text) => {
    setEmailInput(text);
    }
  

  const handlePasswordInput = (text) => {
    setPasswordInput(text);
  };

  return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "position" : "height"}
		>
			<View style={styles.logInContainer}>
				<ImageBackground
					source={require("../assets/background/loginbackground.png")}
					style={styles.background}
				>
					<View style={styles.logoCont}>
						<Image
							source={require("../assets/images/LogoWhite.png")}
							style={styles.image}
						/>

						{/* <Text style={styles.loginHeader}>Log In</Text> */}
					</View>
					<View style={styles.formCont}>
						<TextInput
							onChangeText={handleEmailInput}
							placeholder="Email"
							style={styles.username}
						/>
						<TextInput
							onChangeText={handlePasswordInput}
							placeholder="Password"
							style={styles.password}
						/>

						{loginAccepted ? (
							<Link
								to={"/"}
								style={styles.button}
								underlayColor={"transparent"}
							>
								<Text style={styles.buttonText}>Log In</Text>
							</Link>
						) : (
							<Link style={styles.button} underlayColor={"transparent"}>
								<Text style={styles.buttonText}>Log In</Text>
							</Link>
						)}
						<View style={styles.divider}>
							<View style={styles.line}></View>
							<Text style={styles.or}>or</Text>
							<View style={styles.line}></View>
						</View>
						<Link
							to={"/register"}
							style={styles.button}
							underlayColor={"transparent"}
						>
							<Text style={styles.buttonText}>Register</Text>
						</Link>
					</View>
				</ImageBackground>
			</View>
		</KeyboardAvoidingView>
	);
}
          

const styles = StyleSheet.create({
  logInContainer: {
    height: "100%",
    width: "100%",
  },
  background: {
    height: "100%",
    width: "100%",
  },
  logoCont: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginHeader: {
    color: "white",
    fontSize: 25,
    marginTop: "-2%",
    fontWeight: 500,
  },
  image: {
    resizeMode: "contain",
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  formCont: {
    width: "100%",
    height: "50%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    width: "50%",
    borderBottomColor: "rgba(93, 159, 107, 0.8)",
    borderBottomWidth: 2,
    marginTop: "10%",
    fontSize: 18,
  },
  password: {
    marginTop: "10%",
    marginBottom: "10%",
    width: "50%",
    borderBottomColor: "rgba(93, 159, 107, 0.8)",
    borderBottomWidth: 2,
    fontSize: 18,
  },
  divider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2%",
  },
  line: {
    width: "20%",
    height: "5%",
    backgroundColor: "rgba(93, 159, 107, 0.5)",
    alignSelf: "center",
    margin: "2%",
  },
  or: {
    color: "rgba(93, 159, 107, 1)",
  },
  button: {
    width: "50%",
    borderColor: "rgba(93, 159, 107, 0.8)",
    borderWidth: 2,
    padding: "2%",
    margin: "2%",
    borderRadius: "10%",
  },
  buttonText: {
    color: "rgba(93, 159, 107, 1)",
    fontSize: 15,
    textAlign: "center",
  },
});

export default LogInContainer;
