import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const NapTienDV = ({ navigation }) => {
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
        <Text style={styles.headerText}>Nạp tiền dịch vụ</Text>
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
            source={require("../../assets/imgtaichinh/icon-ck.jpg")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Dịch vụ tài chính
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
            source={require("../../assets/imgtaichinh/icon-ck.jpg")}
            style={{ width: 50, height: 50, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Nạp tiền giao thông
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
            source={require("../../assets/imghd/hd5.png")}
            style={{ width: 50, height: 50, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Nạp học phí số tiền động
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          width: 110,
          height: 130,
          borderRadius: 10,
          backgroundColor: "#fff",
          marginLeft: 15,
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../assets/imghd/hd9.png")}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
        <Text style={{ textAlign: "center", fontSize: 16 }}>Nộp thuế</Text>
      </Pressable>
    </View>
  );
};

export default NapTienDV;

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
