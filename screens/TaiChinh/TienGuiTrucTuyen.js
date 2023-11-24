import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const TienGuiTrucTuyen = ({ navigation }) => {
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
        <Text style={styles.headerText}>Tiền gửi trực tuyến</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
        <Pressable
          style={{
            width: 110,
            height: 130,
            borderRadius: 10,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../../assets/imgtaichinh/icon-pigmoney.jpg")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Mở tài khoản tiền gửi trực tuyến
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 110,
            height: 130,
            borderRadius: 10,
            backgroundColor: "#fff",
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../../assets/imgtaichinh/icon-pigmoney.jpg")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Tất toán tiền gửi trực tuyến
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TienGuiTrucTuyen;

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
    fontSize: 20,
    marginLeft: 90,
  },
});
