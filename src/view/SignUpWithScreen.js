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
import { ButtonComponent } from "../component/ButtonComponent";
import { BrComponent } from "../component/BrComponent";
import { ButtonItem } from "../component/ButtonItem";
export const SignUpWithScreen = ({ navigation }) => {
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
          Create your business
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Image source={require("../../assets/company.png")} />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 30,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: colors.textColorCompany,
            fontSize: 16,
          }}
        >
          Creating an account will allow you to use Tanca on your phone and on
          the web
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonComponent
          text={"Sign Up with Apple"}
          img={require("../../assets/apple1.png")}
        />
      </View>
      <BrComponent />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
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
        <ButtonItem image={require("../../assets/faceboo.png")} />
        <ButtonItem image={require("../../assets/google.png")} />
        <ButtonItem image={require("../../assets/email.png")} />
      </View>
    </View>
  );
};
