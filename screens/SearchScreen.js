import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <Image
            style={{ width: "24px", height: "24px" }}
            source={require("../assets/img/search.png")}
          />
          <TextInput style={styles.inputS} placeholder="Tìm kiếm" />
        </View>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "#ff6600",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Đóng
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          width: 900,
          height: "1px",
          backgroundColor: "#ccc",
          marginTop: "10px",
        }}
      />
      <View style={{ marginLeft: "5px", marginTop: "20px" }}>
        <Text style={{ fontWeight: 700, fontSize: "18px" }}>Từ khóa gợi ý</Text>
        <View style={{ flexDirection: "row", marginTop: "10px" }}>
          <View
            style={{
              width: "125px",
              height: "39px",
              borderRadius: "22px",
              backgroundColor: "rgba(217, 217, 217, 0.4)",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: "10px",
            }}
          >
            <Text style={{ fontSize: "16px" }}>Chuyển khoản</Text>
          </View>
          <View
            style={{
              marginLeft: "30px",
              width: "170px",
              height: "39px",
              borderRadius: "22px",
              backgroundColor: "rgba(217, 217, 217, 0.4)",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: "10px",
            }}
          >
            <Text style={{ fontSize: "16px" }}>Thanh toán hóa đơn</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10px" }}>
          <View
            style={{
              width: "210px",
              height: "39px",
              borderRadius: "22px",
              backgroundColor: "rgba(217, 217, 217, 0.4)",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: "10px",
            }}
          >
            <Text style={{ fontSize: "16px" }}>Nhận tin biến động số dư</Text>
          </View>
          <View
            style={{
              marginLeft: "20px",
              width: "140px",
              height: "39px",
              borderRadius: "22px",
              backgroundColor: "rgba(217, 217, 217, 0.4)",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <Text style={{ fontSize: "16px" }}>Cài đặt Soft OTP</Text>
          </View>
        </View>
        <Text style={{ fontSize: "14px" }}>
          Lưu ý: Quý khách có thể tìm kiếm chức năng, dịch vụ, danh bạ
          <br />
          thụ hưởng, mẫu thanh toán hóa đơn...
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: "10px",
    marginTop: "25px",
  },
  headerSearch: {
    width: "280px",
    height: "39px",
    borderRadius: "22px",
    backgroundColor: "rgba(217, 217, 217, 0.4)",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "10px",
  },
  inputS: {
    width: "300px",
    height: "39px",
    borderRadius: "22px",
    fontSize: "20px",
    paddingLeft: "20px",
  },
});
