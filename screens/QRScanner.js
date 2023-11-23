import React, { useState } from "react";
import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import QrScanner from "react-qr-scanner";

const QRScanner = ({ navigation }) => {
  const [result, setResult] = useState("");

  const handleError = (error) => {
    console.error(error);
  };

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };
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
            marginLeft: "10px",
            justifyContent: "space-around",
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
              marginLeft: "20px",
            }}
          >
            THANH TOÁN QR CODE
          </Text>
          <Image
            source={require("../assets/img/bolt-slash.png")}
            style={{ tintColor: "#fff", width: 24, height: 24 }}
          />

          <Image
            source={require("../assets/img/interrogation.png")}
            style={{ tintColor: "#fff", width: 24, height: 24 }}
          />
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
              Quét mã QR
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
              VNPAY-TAP
            </Text>
          </Pressable>
        </View>
      </View>
      <QrScanner
        onScan={handleScan}
        onError={handleError}
        style={{ width: "100%", height: "100000" }}
        delay={10} // Giảm độ trễ
      />
      <Text style={{ color: "#fff", fontSize: "30px" }}>{result.text}</Text>

      <Text
        style={{
          color: "#fff",
          fontSize: "18px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        Đưa mã QR vào trung tâm của camera, <br />
        tiến trình quét sẽ diễn ra tự động
      </Text>
      <View
        style={{
          width: "200px",
          height: "39px",
          borderRadius: "22px",
          backgroundColor: "#FF6600",
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
          marginTop: "20px",
          justifyContent: "space-around",
        }}
      >
        <Image
          style={{
            width: "24px",
            height: "24px",
          }}
          source={require("../assets/img/ticket.png")}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Mã Khuyến mãi
        </Text>
      </View>
      <View
        style={{
          marginLeft: "10px",
          marginTop: "70px",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("../assets/img/clock-three.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Lịch sử GD
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("../assets/img/qr.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            My QR
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("../assets/img/picture.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Thư viện ảnh
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
