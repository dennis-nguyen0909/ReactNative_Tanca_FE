import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

export const ButtonItem = ({ image, handleOnPress }) => {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image source={image} />
    </TouchableOpacity>
  );
};
