import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

const TrangTK = ({ navigation, route }) => {
  const { id, item } = route.params;
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // You can change the currency code as needed
    }).format(amount);
  };
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
            style={{ width: 40, height: 40, right: 45 }}
          />
        </Pressable>
        <Text style={styles.headerText}>THÔNG TIN KHÁCH HÀNG</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../assets/img/itemcard.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.paymentInfoText}> Tài khoản thanh toán</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ left: 15, color: "#FF6600", fontWeight: 700 }}>
            {item.SoTK}
          </Text>
          <Image
            source={require("../assets/img/copy.jpg")}
            style={{ top: 2.5, left: 20, width: 20, height: 20 }}
          />
        </View>
        <Text style={{ left: 15, fontWeight: 700 }}>
          Số dư: {formatCurrency(item.SoDu)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",

          borderRadius: 20,
          backgroundColor: "#fff",
          width: 370,
          height: 60,
          marginLeft: 10,
        }}
      >
        <Image
          source={require("../assets/img/pig.jpg")}
          style={{ width: 30, height: 30, top: 10, left: 5 }}
        />
        <Text style={{ left: 10, top: 15 }}> Tài khoản tiết kiệm</Text>
        <Text
          style={{
            left: 100,
            top: 15,
            color: "#FF6600",
            textDecorationLine: "underline",
            fontStyle: "italic",
          }}
        >
          {" "}
          Xem chi tiết{" "}
        </Text>
      </View>

      <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Quản lý nickname tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrangTK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600", // Màu cam
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white", // Màu chữ trắng
    fontSize: 20,
  },
  mainContent: {
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 100,
    marginVertical: 10,

    left: 10,
  },
  paymentInfoContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    borderColor: "gray",
    alignItems: "center",
    marginBottom: 10,
  },

  bottomButton: {
    position: "absolute",
    bottom: 20,

    backgroundColor: "#FF6600",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    textAlign: "center",
    left: 70,
  },
  buttonText: {
    color: "white",
  },
});
