import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const GuiTienMung = ({ navigation }) => {
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
        <Text style={styles.headerText}>Gửi tiền mừng</Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#fff",
          width: 350,
          height: 300,
          alignItems: "center",
          marginTop: 50,
          borderRadius: 20,
        }}
      >
        <Image
          style={{ width: 300, height: 250 }}
          source={require("../../assets/img/friend-gift.jpg")}
        />
      </View>
      <Pressable
        style={{
          backgroundColor: "#ff6600",
          width: 200,
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 180,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
          Gửi tiền mừng
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#DDDDDD",
          borderColor: "#ff6600",
          borderWidth: 3,
          width: 200,
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#ff6600", fontSize: 18, fontWeight: 600 }}>
          Tiền mừng của tôi
        </Text>
      </Pressable>
    </View>
  );
};

export default GuiTienMung;

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
