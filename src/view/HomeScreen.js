import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonComponent } from "../component/ButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = ({ route, navigation }) => {
  const user = route.params.user;
  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.navigate("Business");
    } catch (error) {}
  };
  return (
    <View
      style={{
        marginTop: 40,
        height: 500,
        fontWeight: "bold",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>THÔNG TIN CÁ NHÂN </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 30,
        }}
      >
        <Text>Họ tên: {user.fullName}</Text>
        <Text>Địa chỉ: {user.address}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Giới tính: {user.gender}</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 500,
        }}
      >
        <ButtonComponent text={"Thoát"} handleOnPress={handleLogOut} />
      </View>
    </View>
  );
};
