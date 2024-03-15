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
export const IntroduceScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logoTanca.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
