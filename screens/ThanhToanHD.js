import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";

const ThanhToanHD = ({ navigation }) => {
  const hd = [
    {
      id: 1,
      image: require("../assets/imghd/hd1.png"),
      name: "Cước viễn thông",
    },
    {
      id: 2,
      image: require("../assets/imghd/hd2.png"),
      name: "Tiền điện",
    },
    {
      id: 3,
      image: require("../assets/imghd/hd3.png"),
      name: "Nước & VSMT",
    },
    {
      id: 4,
      image: require("../assets/imghd/hd4.png"),
      name: "Thanh toán vé máy bay",
    },
    {
      id: 5,
      image: require("../assets/imghd/hd5.png"),
      name: "Nộp tiền học phí",
    },
    {
      id: 6,
      image: require("../assets/imghd/hd6.png"),
      name: "Cước truyền hình",
    },
    {
      id: 7,
      image: require("../assets/imghd/hd7.png"),
      name: "Viện phí",
    },
    {
      id: 8,
      image: require("../assets/imghd/hd8.png"),
      name: "Chuyển phát",
    },
    {
      id: 9,
      image: require("../assets/imghd/hd9.png"),
      name: "Phí chung cư",
    },
    {
      id: 10,
      image: require("../assets/imghd/hd10.png"),
      name: "Bảo hiểm",
    },
    {
      id: 11,
      image: require("../assets/imghd/hd11.png"),
      name: "Lưu trú",
    },
    {
      id: 12,
      image: require("../assets/imghd/hd12.png"),
      name: "Dịch vụ học trực tuyến",
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
        <Text style={styles.headerText}>Thanh toán hóa đơn</Text>
      </View>
      <View style={styles.sectiondv}>
        <FlatList
          numColumns={3}
          data={hd}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                justifyContent: "space-around",
              }}
            >
              <Pressable
                onPress={() => {}}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  marginTop: 10,
                }}
              >
                <Image
                  style={{ width: "55px", height: "55px" }}
                  source={item.image}
                />
                <Text
                  style={{
                    width: "95px",
                    height: "70px",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ThanhToanHD;

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
  sectiondv: {
    marginTop: "30px",
  },
});
