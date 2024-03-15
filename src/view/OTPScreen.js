import React, { useEffect, useRef, useState } from "react";
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
import { generalAuth } from "../../src/contains/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const OTPScreen = ({ navigation, route, checkPhoneExist }) => {
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [count, setCount] = useState(60);
  const [otp, setOtp] = useState(route.params.otp);
  const phone = route.params.phone;
  const user = route.params.checkPhoneExist;
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const onSubmit = async () => {
    const result = code1 + code2 + code3 + code4 + code5;
    console.log(result);
    if (result === otp) {
      await AsyncStorage.setItem("user", JSON.stringify(user));

      navigation.navigate("HomeScreen", { user: user });
    } else {
      alert("Mã OTP không đúng !");
    }
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
  const handleAgainOTP = () => {
    setCount(60);
    setOtp(Math.floor(10000 + Math.random() * 90000).toString());
  };
  return (
    <View>
      <View
        style={{
          elevation: 5,
          backgroundColor: "#fff",
          height: 500,
          marginTop: 300,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 23 }}>OTP Verication</Text>
          <Text style={{ fontWeight: 400, fontSize: 17 }}>
            Enter the OTP code sent to +61298765432
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 20,
            marginTop: 30,
          }}
        >
          <TextInput
            value={code1}
            keyboardType="number-pad"
            ref={otp1}
            maxLength={1}
            onChangeText={(text) => {
              setCode1(text);
              if (text.length >= 1) {
                otp2.current.focus();
              } else if (text.length < 1) {
                otp1.current.focus();
              }
            }}
            style={styles.inputText}
          />
          <TextInput
            ref={otp2}
            keyboardType="number-pad"
            maxLength={1}
            value={code2}
            style={styles.inputText}
            onChangeText={(text) => {
              setCode2(text);
              if (text.length >= 1) {
                otp3.current.focus();
              } else if (text.length < 1) {
                otp1.current.focus();
              }
            }}
          />
          <TextInput
            value={code3}
            ref={otp3}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.inputText}
            onChangeText={(text) => {
              setCode3(text);
              if (text.length >= 1) {
                otp4.current.focus();
              } else if (text.length < 1) {
                otp2.current.focus();
              }
            }}
          />
          <TextInput
            ref={otp4}
            keyboardType="number-pad"
            maxLength={1}
            value={code4}
            style={styles.inputText}
            onChangeText={(text) => {
              setCode4(text);
              if (text.length >= 1) {
                otp5.current.focus();
              } else if (text.length < 1) {
                otp3.current.focus();
              }
            }}
          />
          <TextInput
            ref={otp5}
            value={code5}
            onChangeText={(text) => {
              setCode5(text);
              if (text.length >= 1) {
                otp5.current.focus();
              } else if (text.length < 1) {
                otp4.current.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.inputText}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>Bạn chưa nhận được mã ? </Text>
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={handleAgainOTP}
            >
              Gửi lại
            </Text>
          </View>
          {count !== 0 && <Text>Đã gửi : {count} s</Text>}
          {otp && <Text>Mã OTP LÀ :{otp}</Text>}
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={onSubmit}
            disabled={
              code1 !== "" &&
              code2 !== "" &&
              code3 !== "" &&
              code4 !== "" &&
              code5 !== ""
                ? false
                : true
            }
            style={
              code1 !== "" &&
              code2 !== "" &&
              code3 !== "" &&
              code4 !== "" &&
              code5 !== ""
                ? styles.btnAgree
                : styles.btnDisable
            }
          >
            <Text>Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: "#ccc",
    width: 50,
    height: 60,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnAgree: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.btnSignUp,
    width: 336,
    height: 53,
    borderRadius: 20,
  },
  btnDisable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
    width: 336,
    height: 53,
    borderRadius: 20,
  },
});
