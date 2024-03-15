import React, { useState } from "react";
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
import { AccountComponent } from "../component/AccountComponent";
import * as UserService from "../../src/service/UserService";
export const SignInTancaScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    alert(data);
    try {
      const res = await UserService.signIn(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
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
            Sign in Tanca
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            display: "flex",
            gap: 10,
            marginTop: 40,
          }}
        >
          <View
            style={{
              backgroundColor: "rgb(242,247,255)",
              height: 48,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={{ color: "#c8d0e9 " }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(242,247,255)",
              height: 48,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              style={{ color: "#c8d0e9 " }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ButtonComponent handleOnPress={handleSignIn} text={"Sign in"} />
        </View>
        <BrComponent text={"or"} />
        <View style={styles.containerButton}>
          <ButtonItem image={require("../../assets/email.png")} />
          <ButtonItem image={require("../../assets/faceboo.png")} />
          <ButtonItem image={require("../../assets/google.png")} />
          <ButtonItem image={require("../../assets/apple.png")} />
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <AccountComponent />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});
