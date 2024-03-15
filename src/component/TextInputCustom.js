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
import { colors } from "../contains/color";

export const TextInputCustom = ({ name, phone, setPhone }) => {
  return (
    <>
      <View
        style={{
          width: 336,
          height: 48,
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.backGroundInputText,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        {name === "phone" ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ paddingLeft: 15 }}>61+</Text>
            <Image
              style={{ marginLeft: 10 }}
              source={require("../../assets/arrowDown.png")}
            />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={{
                marginLeft: 10,
                borderLeftWidth: 1,
                borderColor: "#E4ECFF",
                paddingLeft: 10,
              }}
              placeholder="Phone Number"
            />
          </View>
        ) : name === "email" ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                marginLeft: 10,
                borderColor: "#E4ECFF",
                paddingLeft: 10,
              }}
              placeholder="Email"
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};
