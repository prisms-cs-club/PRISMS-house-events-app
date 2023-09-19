import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

/**
 * A component that represents a point bar of a house
 * @param {{
 *  name: string,
 *  point: number,
 *  height: number,
 *  topPoint: number
 * }} param parameters of the point bar
 * @returns The component
 */
export default function PointBar({
  name,
  point,
  color,
  height,
  url,
  navigation,
  topPoint,
  size = "medium",
}) {
  return (
    <View
      style={[
        size === "small" ? styles.smallContainer : styles.container,
        { height: height, backgroundColor: color },
      ]}
    >
      <View style={styles.contents}>
        <View style={styles.pointBarContents}>
          {topPoint === point && (
            <Image
              source={require("../../../../assets/Leaderboard/crown.png")}
              style={styles.crown}
            />
          )}
          <TouchableOpacity
            style={styles.buttonCrestStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("HouseProfile", { houseName: name })
            }
          >
            <Image
              source={{ uri: url }}
              style={
                size === "small" ? styles.smallCrestImage : styles.crestImage
              }
            />
          </TouchableOpacity>

          <View style={styles.scoreReporterContainer}>
            <Text
              style={
                size === "small"
                  ? styles.smallHouseNameText
                  : styles.houseNameText
              }
            >
              {name}
            </Text>
            <Text
              style={
                size === "small" ? styles.smallScoreText : styles.scoreText
              }
            >
              {point}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
