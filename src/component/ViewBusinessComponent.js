import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { sliders } from "../contains/slider";
import { ButtonComponent } from "./ButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export const ViewBusinessComponent = ({ navigation }) => {
  const [imageActive, setImageActive] = useState(0);
  const [user, setUser] = useState([]);
  const handleOnChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      setUser(currentUser);
    } catch (error) {}
  };
  getUser();
  const onPress = () => {
    if (user?.token) {
      navigation.navigate("HomeScreen", { user: user });
    } else {
      navigation.navigate("LoginWithPhone", { name: "phone" });
    }
  };
  return (
    <View>
      <View style={{ position: "relative", height: 500 }}>
        <SafeAreaView
          style={{
            zIndex: 100,
            marginTop: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.wrapper}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrapper}
              onScroll={({ nativeEvent }) => handleOnChange(nativeEvent)}
            >
              {sliders.map((slider, index) => {
                return (
                  <View key={index} style={{ position: "relative" }}>
                    <Image source={slider.slide} style={styles.wrapper} />
                    {/* <View>
                      <Text
                        style={{
                          bottom: 100,
                          position: "absolute",
                          zIndex: 1000,
                        }}
                      >
                        {slider.description}
                      </Text>
                    </View> */}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              position: "absolute",
              width: 510,
              height: 540,
              borderRadius: 500,
              backgroundColor: "#fff",
              bottom: -50,
              left: -50,
            }}
          ></View>
        </SafeAreaView>
        <View
          style={{
            position: "absolute",
            top: 230,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <View>
              <Image
                style={styles.image}
                source={require("../../assets/backgroundBusiness.png")}
              />
            </View>
            {/* {sliders?.map((slider, index) => {
              return (
                <Text
                  style={{
                    position: "absolute",
                    bottom: 60,
                    left: 50,
                    color: "#fff",
                    width: 280,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {slider.description}
                </Text>
              );
            })} */}
            <Text
              style={{
                position: "absolute",
                bottom: 60,
                left: 50,
                color: "#fff",
                width: 280,
                textAlign: "center",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {sliders[imageActive].description}
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                left: 120,
              }}
            >
              {sliders?.map((slider, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 40,
                    color: imageActive === index ? "black" : "rgb(228,236,255)",
                  }}
                >
                  •
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ width: 200, height: 80, textAlign: "center", fontSize: 20 }}
        >
          Try Tanca for free, find the right plan later
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <ButtonComponent
          text={"Create business on Tanca"}
          handleOnPress={onPress}
        />
        <ButtonComponent
          text={"Join team on Tanca"}
          backgroundTransparent={true}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 500 }}>Have an account?</Text>
        <Text
          style={{ color: "#1ECC78", fontWeight: 500, paddingLeft: 5 }}
          onPress={() => navigation.navigate("SignInTanca")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: WIDTH * 0.8,
    zIndex: 100,
    // height: HEIGHT * 0.4,
  },
  image: {
    width: 400,
    backgroundColor: "rgb(31,204,120)",
  },
});
