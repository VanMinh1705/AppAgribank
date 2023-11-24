import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const TaxiAnimation = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Taxi");
  }, 1000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: "300px", height: "100px" }}
        source={require("../../assets/img/caranimation.png")}
      />
    </View>
  );
};

export default TaxiAnimation;

const styles = StyleSheet.create({});
