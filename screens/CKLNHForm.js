import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CKLNHForm = ({ navigation, route }) => {
  const iconBank = [
    { id: 1, image: require("../assets/img/icon-BIDV.png") },
    { id: 2, image: require("../assets/img/icon-Agribank.png") },
    { id: 3, image: require("../assets/img/icon-eximbank.png") },
    { id: 4, image: require("../assets/img/icon-Nam_A_Bank.png") },
    { id: 5, image: require("../assets/img/icon-techcombank.png") },
    { id: 6, image: require("../assets/img/icon-TPBank.png") },
    { id: 7, image: require("../assets/img/icon-Vietcombank.png") },
    { id: 8, image: require("../assets/img/icon-Vietinbank.png") },
  ];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND", // You can change the currency code as needed
    }).format(amount);
  };
  const { accounts } = route.params;
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
        <Text style={styles.headerText}>Chuyển khoản Liên ngân hàng</Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: 350,
          height: 150,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 10,
            marginBottom: 5,
          }}
        >
          <Image
            style={{ width: "24px", height: "24px" }}
            source={require("../assets/img/icon-thuhuong.png")}
          />
          <Text style={{ fontWeight: 600, fontSize: "18px" }}>
            Tài khoản nguồn
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: "18px",
            color: "#ff6600",
            marginBottom: 20,
            marginLeft: 10,
          }}
        >
          {accounts[0].SoTK}
        </Text>
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              fontWeight: 600,
              fontSize: "18px",
              marginLeft: 10,
              color: "#91917e",
            }}
          >
            Số dư
          </Text>

          <Text style={{ fontWeight: 600, fontSize: "18px", marginLeft: 100 }}>
            {!showPassword
              ? "*".repeat(String(accounts[0].SoDu).length) + " VND"
              : formatCurrency(accounts[0].SoDu) + " VND"}
          </Text>
          <Pressable onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              style={{ marginLeft: 10 }}
              color="#ff6600"
            />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: 350,
          height: 400,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 15,
          }}
        >
          <Image
            style={{ width: "24px", height: "24px", tintColor: "#ff6600" }}
            source={require("../assets/img/icon-user.png")}
          />
          <Text style={{ fontWeight: 400, fontSize: "18px", marginLeft: 10 }}>
            Thông tin thụ hưởng
          </Text>
        </View>
        <TextInput
          style={{
            marginTop: 20,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Ngân hàng thụ hưởng"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontWeight: 400,
            fontSize: "18px",
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          Gợi ý
        </Text>
        <FlatList
          data={iconBank}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginLeft: 10,
                  marginTop: 10,
                  backgroundColor: "#fff",
                  borderColor: "#000",
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image style={{ width: 30, height: 30 }} source={item.image} />
              </View>
            </View>
          )}
        />
        <TextInput
          style={{
            marginTop: 20,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Số tài khoản thụ hưởng"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
        <TextInput
          style={{
            marginTop: 20,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Số tiền"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
        <TextInput
          style={{
            marginTop: 20,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Nội dung chuyển khoản"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            borderColor: "#ff6600",
            borderWidth: 3,
            borderRadius: 30,
            width: 170,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#ff6600", fontWeight: 700, fontSize: "18px" }}>
            Hủy
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderColor: "#ff6600",
            backgroundColor: "#ff6600",
            borderWidth: 3,
            borderRadius: 30,
            width: 170,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>
            Tiếp tục
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CKLNHForm;

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
    fontSize: 18,
    marginLeft: 50,
  },
});
