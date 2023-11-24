import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const NapTien = ({ navigation }) => {
  const [selected, setSelected] = useState(1);
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
        <Text style={styles.headerText}>Nạp tiền điện thoại</Text>
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
          55555555555
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
          <View style={{ flexDirection: "row", marginLeft: 190 }}>
            <Text style={{ fontWeight: 600, fontSize: "18px" }}>0 VND</Text>

            <Image
              style={{
                tintColor: "#ff6600",
                width: "24px",
                height: "24px",
                marginLeft: 10,
              }}
              source={require("../assets/img/eye-crossed.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: 350,
          height: 100,
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
            style={{ tintColor: "#ff6600", width: "24px", height: "24px" }}
            source={require("../assets/img/phone-flip.png")}
          />
          <Text style={{ fontWeight: 600, fontSize: "18px" }}>
            Chọn số điện thoại
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
          placeholder="Nhập số điện thoại"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: 350,
          height: 180,
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
            style={{ tintColor: "#ff6600", width: "24px", height: "24px" }}
            source={require("../assets/img/usd.png")}
          />
          <Text style={{ fontWeight: 600, fontSize: "18px" }}>
            Chọn mệnh giá nạp
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Pressable
            onPress={() => {
              setSelected(1);
            }}
            style={{
              backgroundColor: selected == 1 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>30,000 VND</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected(2);
            }}
            style={{
              backgroundColor: selected == 2 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>50,000 VND</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected(3);
            }}
            style={{
              backgroundColor: selected == 3 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>100,000 VND</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Pressable
            onPress={() => {
              setSelected(4);
            }}
            style={{
              backgroundColor: selected == 4 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>200,000 VND</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected(5);
            }}
            style={{
              backgroundColor: selected == 5 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>300,000 VND</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected(6);
            }}
            style={{
              backgroundColor: selected == 6 ? "#ff6600" : "#fff",
              borderColor: "#ccc",
              borderWidth: 1,
              width: 100,
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>500,000 VND</Text>
          </Pressable>
        </View>
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

export default NapTien;

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
