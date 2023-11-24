import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const MuaBaoHiem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/img/arrow-left.png")}
            style={{ width: 40, height: 40, marginLeft: "10px" }}
          />
        </Pressable>
        <Text style={styles.headerText}>Mua bảo hiểm Agribank ABIC</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
        <Pressable
          style={{
            width: 110,
            height: 130,
            borderRadius: 10,
            backgroundColor: "#fff",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/imgtaichinh/icon-thanhtoan.jpg")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Thông tin bảo hiểm
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 110,
            height: 130,
            borderRadius: 10,
            backgroundColor: "#fff",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/imgtaichinh/icon-baohiem.jpg")}
            style={{ width: 50, height: 50, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Mua bảo hiểm ABIC
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MuaBaoHiem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600", // Màu cam
    height: "50px",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white", // Màu chữ trắng
    fontSize: 18,
    marginLeft: 50,
  },
});
