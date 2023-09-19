import { View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import Loading from "../Loading/Loading";
import { getHouseByName } from "../../api/house";
import { getHouseColor } from "../../helpers/houseColors";
import PointBar from "./PointBar/PointBar";
import { getBarHeight } from "../../helpers/barHeight";

export default function LeaderBoardItem({ navigation, size = "medium" }) {
  const [houses, setHouses] = useState([]);
  const [topPoint, setTopPoint] = useState(0);
  const [orderResult, setOrderResult] = useState();
  const fetchHouses = async () => {
    let houseArr = [];
    let sortedHouseArr = [];
    for (const houseName of ["Albemarle", "Lambert", "Hobler", "Ettl"]) {
      const { house, error } = await getHouseByName(houseName);
      if (error) return;
      houseArr.push(house);
      sortedHouseArr.push(house);
    }
    sortedHouseArr.sort((a, b) => b.point - a.point);

    const result = {};
    // Go through the sorted array and determine the rank of each house
    // If the house has the same point as the previous house, they have the same rank
    // The total number of ranks is the number of distinct points among all houses
    // For example, if the four houses' scores are [100, 200, 200, 300], the ranks are [3, 2, 2, 1]
    result[sortedHouseArr[0].name] = 1;
    for (let i = 1; i < sortedHouseArr.length; i++) {
      const house = sortedHouseArr[i];
      const prevHouse = sortedHouseArr[i - 1];
      if (house.point === prevHouse.point) {
        result[house.name] = result[prevHouse.name];
      } else {
        result[house.name] = result[prevHouse.name] + 1;
      }
    }

    setOrderResult(result);
    setHouses(houseArr);
    setTopPoint(sortedHouseArr[0].point);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  if (houses.length === 0 || orderResult === undefined) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      {houses.map((house) => {
        const barH = getBarHeight(orderResult[house.name]); // TODO: handle different number of distinct points
        return (
          <View style={styles.houseContainer} key={house.name}>
            <PointBar
              name={house.name}
              point={house.point}
              size={size}
              color={getHouseColor(house.name)}
              height={size === "small" ? barH * 0.6 : barH}
              url={house.crest.url}
              topPoint={topPoint}
              navigation={navigation}
            />
          </View>
        );
      })}
    </View>
  );
}
