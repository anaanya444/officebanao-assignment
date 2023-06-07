import React from "react"
import { StyleSheet, View, Image, Text } from "react-native"
import { Avatar } from "react-native-elements"
import { Dropdown } from "react-native-material-dropdown"

const ImageUpload = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            source={require("./assets/profilepic.jpeg")}
            size="medium"
            containerStyle={styles.profileAvatar}
          />
          <Text style={styles.greetingText}>Hi, Sophie</Text>
        </View>
        <Image source={require("./assets/world.png")} style={styles.icon} />
        <View style={styles.dropdownContainer}>
          <Dropdown
            data={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]}
            containerStyle={styles.dropdown}
            dropdownOffset={{ top: 8, left: 0 }}
            dropdownPosition={-3}
            pickerStyle={styles.dropdownPicker}
            itemTextStyle={styles.dropdownItemText}
          />
        </View>
      </View>
      <View style={styles.container2}></View>
      <View style={styles.navigator}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/group.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/home.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/settings.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.2,
    backgroundColor: "#8A2BE2",
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileAvatar: {
    marginRight: 10,
  },
  greetingText: {
    color: "#808080",
    fontSize: 16,
  },
  icon: {
    marginLeft: "auto",
    width: 24,
    height: 24,
  },
  dropdownContainer: {
    flex: 1,
    marginLeft: "auto",
  },
  dropdown: {
    width: "50%",
    borderWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdownPicker: {
    marginTop: 8,
  },
  dropdownItemText: {
    color: "#808080",
  },
  container2: {
    flex: 0.6,
    backgroundColor: "#FFFFFF",
  },
  navigator: {
    flex: 0.2,
    backgroundColor: "#8A2BE2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  buttonText: {
    color: "#808080",
  },
})

export default ImageUpload
