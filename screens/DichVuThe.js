import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";

const DichVuThe = ({ navigation }) => {
  const dinhvu = [
    {
      id: 1,
      image: require("../assets/imgdv/dv1.png"),
      name: "Truy vấn thông tin thẻ",
    },
    {
      id: 2,
      image: require("../assets/imgdv/dv2.png"),
      name: "CK LNH nhanh qua số thẻ",
    },
    {
      id: 3,
      image: require("../assets/imgdv/dv3.png"),
      name: "CK LNH nhanh qua Số TK",
    },
    {
      id: 4,
      image: require("../assets/imgdv/dv4.png"),
      name: "Phát hành thẻ vật lý",
    },
    {
      id: 5,
      image: require("../assets/imgdv/dv5.png"),
      name: "Phát hành thẻ phi vật lý",
    },
    {
      id: 6,
      image: require("../assets/imgdv/dv6.png"),
      name: "Thanh toán qua thẻ tín dụng",
    },
    {
      id: 7,
      image: require("../assets/imgdv/dv7.png"),
      name: "Kích hoạt thẻ",
    },
    {
      id: 8,
      image: require("../assets/imgdv/dv8.png"),
      name: "Cấp/Đổi mã PIN",
    },
    {
      id: 9,
      image: require("../assets/imgdv/dv9.png"),
      name: "Khóa/Mở khóa thẻ",
    },
    {
      id: 10,
      image: require("../assets/imgdv/dv10.png"),
      name: "Chuyển đổi sang thẻ chip ",
    },
    {
      id: 11,
      image: require("../assets/imgdv/dv11.png"),
      name: "Định danh thẻ",
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
        <Text style={styles.headerText}>DỊCH VỤ THẺ</Text>
      </View>
      <Text
        style={{
          fontSize: "18px",
          textAlign: "center",
          marginLeft: "30px",
          marginTop: 10,
        }}
      >
        Dịch vụ áp dụng cho khách hàng có sử <br />
        dụng <b>Thẻ Agribank </b>
      </Text>
      <View style={styles.sectiondv}>
        <FlatList
          numColumns={3}
          data={dinhvu}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: 130,
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
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DichVuThe;

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
