import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const ChuyenKhoan = ({ navigation }) => {
  const chuyenkhoan = [
    {
      id: 1,
      image: require("../assets/img/ck1.png"),
      name: "CK nội bộ qua số TK/ĐT",
    },
    {
      id: 2,
      image: require("../assets/img/ck2.png"),
      name: "CK LNH nhanh qua Số TK",
    },
    {
      id: 3,
      image: require("../assets/img/ck3.png"),
      name: "CK LNH nhanh qua số thẻ",
    },
    {
      id: 4,
      image: require("../assets/img/ck4.png"),
      name: "Chuyển tiền 24/7 mã QR",
    },
    {
      id: 5,
      image: require("../assets/img/ck5.png"),
      name: "Chuyển khoản LNH thường",
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
        <Text style={styles.headerText}>CHUYỂN KHOẢN</Text>
      </View>
      <View style={styles.sectiondv}>
        <FlatList
          numColumns={3}
          data={chuyenkhoan}
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
                onPress={() => {
                  if (item.id === 1) {
                    navigation.navigate("CKNoiBoForm");
                  } else if (item.id === 2) {
                    navigation.navigate("CKLNHForm");
                  } else if (item.id === 3) {
                    navigation.navigate("CKLNHForm");
                  } else if (item.id === 4) {
                    navigation.navigate("QRScanner");
                  } else if (item.id === 5) {
                    navigation.navigate("CKLNHForm");
                  }
                }}
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
              </Pressable>
            </View>
          )}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: 350,
          height: 200,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 5,
          }}
        >
          <Image
            style={{ width: "24px", height: "24px" }}
            source={require("../assets/img/icon-thuhuong.png")}
          />
          <Text style={{ fontWeight: 600, fontSize: "18px" }}>
            Danh sách thụ hưởng
          </Text>
          <Image
            style={{ width: "18px", height: "18px" }}
            source={require("../assets/img/search.png")}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 1,
            borderBottomWidth: 2,
            borderBottomColor: "#ccc",
            borderStyle: "dashed",
          }}
        />
      </View>
    </View>
  );
};

export default ChuyenKhoan;

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
