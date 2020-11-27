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
  
  let label: any = count;

    if (count >= 0) {
      label = count;
    } else if (count < 0) {
      label = "お疲れ様でした";
    }

  let message;

  if (count === 75) {
    message = "まだまだ！";
  } else if (count === 50) {
    message = "がんばれ！";
  } else if (count === 25) {
    message = "もうすこし！";
  } else if (count === 0) {
    message = "おめでとう！";
  }

  let eggImage;
  const number = count;

  if (number <= 0 ) {
    eggImage = egg3;
  } else if (number <= 90 && number > 0) {
    eggImage = egg2;
  } else if (number <= 100) {
    eggImage = egg1;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.num}>{label}</Text>
      <Pressable onPress={countDown}>
        <Image source={eggImage} style={styles.eggImage}></Image>
      </Pressable>

  <Text style={styles.mess}>{message}</Text>
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
  eggImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  count: {
    fontSize: 100,
  },
  mess: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  num: {
    fontSize: 50,
  }
});
