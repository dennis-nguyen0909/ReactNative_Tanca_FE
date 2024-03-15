import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { colors } from "../contains/color";

export const ButtonComponent = ({
  text,
  img,
  backgroundTransparent,
  handleOnPress,
}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={
        backgroundTransparent ? styles.btnSignUpTransparent : styles.btnSignUp
      }
    >
      {img ? <Image source={img} /> : <></>}
      <Text
        style={
          backgroundTransparent
            ? styles.textSignUpTransparent
            : styles.textSignUp
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnSignUp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.btnSignUp,
    width: 336,
    height: 53,
    borderRadius: 20,
  },
  btnSignUpTransparent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",

    width: 336,
    height: 53,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1ECC78",
  },
  textSignUp: {
    color: colors.colorBtnSignUp,
    marginLeft: 10,
  },
  textSignUpTransparent: {
    color: "#1ECC78",
    marginLeft: 10,
  },
});
