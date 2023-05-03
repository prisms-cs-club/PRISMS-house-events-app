import { View } from "react-native";
import React from "react";

const Separator = ({
  width = "100%",
  height = 1,
  backgroundColor = "#000000",
  style,
}) => {
  return (
    <View
      style={[{ width, height, backgroundColor, alignSelf: "center" }, style]}
    />
  );
};

export default Separator;
