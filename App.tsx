import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  const [count, setCount] = useState(100);

  const countDown = () => {
    setCount(count - 1);
  };

  let message;

  if (count === 75) {
    message = "まだまだ！";
  } else if (count === 50) {
    message = "がんばれ！";
  } else if (count === 25) {
    message = "もうすこし！";
  } else {
    message = "おめでとう！";
  }

  const imageArray = [egg1, egg2, egg3];
  let eggImage = imageArray[0];

  const number = count;

  if (count === 100) {
    eggImage = imageArray[3];
  } else if (count < 99 && count > 0) {
    eggImage = imageArray[2];
  } else {
    eggImage = imageArray[1];
  }

  return (
    <View style={styles.container}>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 50,
  },
  eggImage: {
    width: 300,
    heigth: 300,
    resizeMode: "contain",
  },
});
