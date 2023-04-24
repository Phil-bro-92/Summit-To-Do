import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-native";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard, 
	Pressable
} from "react-native";
import { Link, useNavigate } from "react-router-native";
import Request from "../helpers/Request";
import { Alert } from "react-native";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [munrosCompleted, setMunrosCompleted] = useState([]);
  const [logs, setLogs] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    munrosCompleted: [],
    logs: [],
  });

  user1 = {
    name: name,
    email: email,
    password: password,
    munrosCompleted: [],
    logs: [],
  };

  useEffect(() => {
    setNewUser(user1);
  }, [password]);

  const nameInput = (text) => {
    setName(text);
  };
  const emailInput = (text) => {
    setEmail(text);
  };
  const passwordInput = (text) => {
    setPassword(text);
  };
  const handleAddUser = () => {
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      Alert.alert("Please complete all fields.");
    } else {
      const request = new Request();
      request.post("http://localhost:8080/api/users", newUser);
      // Alert.alert("Registration successful. Please log in.");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    }
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
          </View>

          <View style={styles.formCont}>
            <TextInput
              placeholder="name"
              style={styles.name}
              keyboardType="default"
              require
              textContentType="givenName"
              onChangeText={nameInput}
              value={name}
            />
            <TextInput
              placeholder="email"
              style={styles.email}
              keyboardType="email-address"
              require
              textContentType="emailAddress"
              onChangeText={emailInput}
              value={email}
            />
            <TextInput
              placeholder="password"
              style={styles.password}
              secureTextEntry={true}
              require
              textContentType="password"
              onChangeText={passwordInput}
              value={password}
            />
            <Pressable
              style={styles.button}
              underlayColor={"transparent"}
              onPress={handleAddUser}
            >
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <View style={styles.divider}>
              <View style={styles.line}></View>
              <Text style={styles.or}>or</Text>
              <View style={styles.line}></View>
            </View>
            <Link
              to={"/login"}
              style={styles.button}
              underlayColor={"transparent"}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Link>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

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
  name: {
    width: "50%",
    borderBottomColor: "rgba(93, 159, 107, 0.8)",
    borderBottomWidth: 2,
    marginTop: "10%",
    fontSize: 18,
  },
  email: {
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

export default RegisterContainer;
