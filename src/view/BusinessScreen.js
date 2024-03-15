import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  FlatList,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { sliders } from "../contains/slider";
import { ViewBusinessComponent } from "../component/ViewBusinessComponent";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export const BusinessScreen = () => {
  const handleOnChange = (nativeEvent) => {};

  return (
    <>
      <ViewBusinessComponent />
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
});
