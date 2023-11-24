import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";

const DatVeMayBay = ({ navigation }) => {
  const mb = [
    {
      id: 1,
      image: require("../assets/img/mb1.png"),
      name: "Đặt vé máy bay Nội địa",
    },
    {
      id: 2,
      image: require("../assets/img/mb2.png"),
      name: "Đặt vé máy bay Quốc tế",
    },
    {
      id: 3,
      image: require("../assets/img/mb3.png"),
      name: "Lịch sử đặt, thay đổi vé máy bay",
    },
    {
      id: 4,
      image: require("../assets/img/mb4.png"),
      name: "Quản lý đặt chỗ",
    },
    {
      id: 5,
      image: require("../assets/img/mb5.png"),
      name: "Làm thủ tục trực tuyến",
    },
    {
      id: 6,
      image: require("../assets/img/mb6.png"),
      name: "Thanh toán vé máy bay",
    },
    {
      id: 7,
      image: require("../assets/img/mb7.png"),
      name: "Danh bạ hành khách",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/img/arrow-left.png")}
            style={{ width: 40, height: 40, marginLeft: "10px" }}
          />
        </Pressable>
        <Text style={styles.headerText}>Đặt vé máy bay</Text>
        <Image
          source={require("../assets/img/phone-flip.png")}
          style={{
            tintColor: "#fff",
            width: 20,
            height: 20,
            marginLeft: "75px",
          }}
        />
      </View>
      <FlatList
        data={mb}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={item.image}
                style={{ width: 40, height: 40, marginLeft: "10px" }}
              />
              <Text style={{ fontSize: "16px", marginLeft: 10 }}>
                {item.name}
              </Text>
            </View>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DatVeMayBay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
