import React from "react"
import { StatusBar } from "expo-status-bar"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"


const LoginScreen = ({ navigation }) => {
  
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.content}>
          {/* Email field */}
          <TextInput
            style={styles.input}
            placeholder="Enter Email address       "
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {/* Password field */}
          <TextInput
            style={styles.input}
            placeholder="Enter the Password"
            secureTextEntry
          />
          {/* Login button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("ImageUpload")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#8A2BE2",
    paddingTop: 40,
    paddingHorizontal: 50,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#8A2BE2",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#8A2BE2",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
})

export default LoginScreen
