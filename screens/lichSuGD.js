import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

const lichSuGD = ({ navigation }) => {
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
            style={{ width: 40, height: 40, right: 110 }}
          />
        </Pressable>
        <Text style={styles.headerText}>LỊCH SỬ GD</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../assets/img/table.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.paymentInfoText}>Tra cứu giao dịch</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "grey" }}>Tài khoản</Text>
          <Image
            source={require("../assets/img/list.jpg")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 260,
              marginBottom: 30,
              top: 20,
            }}
          />
        </View>
        <Text
          style={{
            color: "grey",
            borderTopWidth: 1,
            borderStyle: "dashed",
            width: "100%",
            borderColor: "gray",
          }}
        >
          Loại giao dịch
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{}}>Tất cả</Text>
          <Image
            source={require("../assets/img/list.jpg")}
            style={{ width: 21, height: 21, marginLeft: 281.5 }}
          />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderStyle: "dashed",
            width: "100%",
            borderColor: "gray",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "grey", marginLeft: 10 }}>Từ ngày</Text>
          <Text style={{ color: "grey", marginLeft: 85 }}>Đến ngày</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{}}>22/11/2023</Text>
          <Image
            source={require("../assets/img/list.jpg")}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <Text style={{ marginLeft: 40 }}>22/11/2023</Text>
          <Image
            source={require("../assets/img/list.jpg")}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <Image
            source={require("../assets/img/search_or.jpg")}
            style={{ width: 35, height: 30, marginLeft: 30, marginBottom: 30 }}
          />
        </View>
      </View>
      <Text style={{ marginLeft: 10, fontStyle: "italic" }}>
        Lưu ý: Báo cáo chỉ bao gồm các giao dịch trên ứng dụng Agribank E-Mobile
        Banking
      </Text>
    </View>
  );
};

export default lichSuGD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600", // Màu cam
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    height: 200,
    marginVertical: 10,
    padding: 10,
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
});
