import React, { useEffect, useState } from "react";
import { colors } from "../contains/color";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { TextInputCustom } from "../component/TextInputCustom";
import { ButtonItem } from "../component/ButtonItem";
import { ButtonComponent } from "../component/ButtonComponent";
import { AccountComponent } from "../component/AccountComponent";
import { BrComponent } from "../component/BrComponent";
import * as UserService from "../service/UserService";
import { generalAuth } from "../../src/contains/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignUpScreen = ({ navigation, route }) => {
  const name = route.params?.name;
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [messageError, setMessageError] = useState([]);
  const [sendOtp, setSendOtp] = useState("");
  useEffect(() => {
    const handleGetAllUsers = async () => {
      const res = await UserService.getAllUser();
      setUsers(res.user);
    };
    handleGetAllUsers();
  }, []);
  const otp = Math.floor(10000 + Math.random() * 90000).toString();
  const onSubmit = () => {
    const checkPhoneExist = users.find((item) => item.phone === phone);
    if (checkPhoneExist !== undefined) {
      navigation.navigate("OTPScreen", {
        phone: phone,
        otp: otp,
        checkPhoneExist: checkPhoneExist,
      });
      setMessageError("");
    } else {
      setMessageError("Số điện thoại chưa đăng ký.Vui lòng đăng ký!");
    }
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
        }}
        ß
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            on
            style={{ color: colors.back, marginLeft: 25 }}
            source={require("../../assets/Back.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            width: 206,
            height: 26,
            marginLeft: 49,
          }}
        >
          Sign up Tanca
        </Text>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <TextInputCustom
          phone={phone}
          setPhone={setPhone}
          name={name === "phone" ? "phone" : "email"}
        />
      </View>
      <View>
        {messageError ? (
          <Text
            style={{ color: colors.gray, marginLeft: 30, paddingVertical: 10 }}
          >
            {messageError}
          </Text>
        ) : (
          <></>
        )}
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <ButtonComponent handleOnPress={onSubmit} text={"Sign Up"} />
      </View>
      <BrComponent />
      <View style={styles.containerButton}>
        {name === "email" ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("LoginWithPhone", { name: "phone" })
            }
            style={{
              backgroundColor: "rgb(245,249,255)",
              paddingHorizontal: 28,
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Image source={require("../../assets/phone1.png")} />
          </TouchableOpacity>
        ) : (
          <ButtonItem
            handleOnPress={() =>
              navigation.navigate("LoginWithPhone", { name: "email" })
            }
            image={require("../../assets/email.png")}
          />
        )}
        <ButtonItem image={require("../../assets/faceboo.png")} />
        <ButtonItem image={require("../../assets/google.png")} />
        <ButtonItem image={require("../../assets/apple.png")} />
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <AccountComponent />
      </View>
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
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});
