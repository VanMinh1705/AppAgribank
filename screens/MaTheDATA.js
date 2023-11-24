import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const MaTheDATA = ({ navigation }) => {
  const [selected, setSelected] = useState(1);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "12%",
          backgroundColor: "#FF6600",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../assets/img/arrow-left.png")}
              style={{ width: 40, height: 40 }}
            />
          </Pressable>
          <Text
            style={{
              color: "white", // Màu chữ trắng
              fontSize: 20,
              marginLeft: "70px",
            }}
          >
            Mã thẻ/DATA
          </Text>
        </View>
        <View
          style={{
            width: "350px",
            height: "39px",
            borderRadius: "22px",
            backgroundColor: "rgba(217, 217, 217, 0.34)",
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Pressable
            onPress={() => {
              setSelected(1);
            }}
            style={{
              width: "165px",
              height: "30px",
              borderRadius: "22px",
              backgroundColor:
                selected == 1 ? "#FFF" : "rgba(217, 217, 217, 0.0)",
              justifyContent: "center",
              marginLeft: "5px",
            }}
          >
            <Text
              style={{
                color: selected == 1 ? "#E77710" : "#D9D9D9",
                fontSize: "13px",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Mua mã thẻ
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setSelected(2);
            }}
            style={{
              width: "165px",
              height: "30px",
              borderRadius: "22px",
              backgroundColor:
                selected == 2 ? "#FFF" : "rgba(217, 217, 217, 0.0)",
              justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <Text
              style={{
                color: selected == 2 ? "#E77710" : "#D9D9D9",
                fontSize: "13px",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Nạp DATA
            </Text>
          </Pressable>
        </View>
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
          height: 250,
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
            Thông tin mã thẻ
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
          placeholder="Thẻ điện thoại"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
          }}
        />
        <TextInput
          style={{
            marginTop: 30,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Nhà cung cấp"
        />
        <View
          style={{
            width: "95%",
            height: 1,
            backgroundColor: "#ccc",
            alignSelf: "center",
          }}
        />
        <TextInput
          style={{
            marginTop: 30,
            color: "#91917e",
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: 10,
          }}
          placeholder="Mệnh giá"
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

export default MaTheDATA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
