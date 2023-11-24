import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const BanBe = ({ navigation }) => {
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
            style={{ width: 40, height: 40, marginLeft: 12 }}
          />
        </Pressable>
        <Text style={styles.headerText}>Bạn bè</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          height: 40,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../../assets/img/search.png")}
          style={{ width: 24, height: 24, marginLeft: 12 }}
        />
        <TextInput
          style={{
            marginLeft: 10,
            height: 40,
            alignItems: "center",
            width: "100%",
            fontSize: 17,
          }}
          placeholder="Nhập tên hoặc số điện thoại để tìm kiếm"
        />
      </View>
    </View>
  );
};

export default BanBe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
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
    marginLeft: 120,
  },
});
