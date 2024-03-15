import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
export const BrComponent = ({ text }) => {
  return (
    <View style={styles.line}>
      <Image source={require("../../assets/Vector5.png")} />
      <Text>{text ? text : "or, sign up with"}</Text>
      <Image source={require("../../assets/Vector5.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 30,
    marginTop: 40,
  },
});
