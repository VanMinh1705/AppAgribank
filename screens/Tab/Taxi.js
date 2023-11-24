import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const Taxi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.goBack();
            }}
          >
            <Image
              source={require("../../assets/img/arrow-left.png")}
              style={{ tintColor: "#000", width: 40, height: 40 }}
            />
          </Pressable>

          <Text
            style={{
              fontSize: "18px",
              marginTop: "5px",
              marginLeft: "15px",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Chúng tôi luôn có mặt <br />
            khi bạn cần taxi
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginTop: "5px",
              marginLeft: "15px",
              fontWeight: 400,
              color: "#a3a289",
              marginTop: "20px",
            }}
          >
            Hướng dẫn đặt xe
          </Text>
        </View>
        <Image
          style={{ width: "200px", height: "200px", resizeMode: "contain" }}
          source={require("../../assets/img/vector-taxi.png")}
        />
      </View>
      <View style={styles.inputAddress}>
        <Image
          style={{ width: "24px", height: "24px", tintColor: "#FF6600" }}
          source={require("../../assets/img/location.png")}
        />
        <TextInput
          style={{
            width: 350,
            height: 60,
            fontSize: "18px",
            fontWeight: "700",
            paddingLeft: "10px",
          }}
          placeholder="Bạn muốn đến đâu?"
        />
      </View>

      <View style={styles.body}>
        <Text
          style={{
            fontSize: "22px",
            marginTop: "5px",
            marginLeft: "15px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Địa điểm đã lưu
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
              <Image
                style={{ tintColor: "#FF6600", width: "24px", height: "24px" }}
                source={require("../../assets/img/home-heart.png")}
              />
            </View>
            <Text
              style={{ fontSize: "18px", marginTop: "5px", marginLeft: "30px" }}
            >
              Nhà
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
              <Image
                style={{ tintColor: "#FF6600", width: "24px", height: "24px" }}
                source={require("../../assets/img/case.png")}
              />
            </View>
            <Text
              style={{ fontSize: "18px", marginTop: "5px", marginLeft: "30px" }}
            >
              Cơ quan
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
              <Image
                style={{ tintColor: "#FF6600", width: "24px", height: "24px" }}
                source={require("../../assets/img/plus.png")}
              />
            </View>
            <Text
              style={{ fontSize: "18px", marginTop: "5px", marginLeft: "30px" }}
            >
              Thêm
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: "20px",
        }}
      >
        <Image
          style={{
            width: "370px",
            height: "100px",
          }}
          source={require("../../assets/img/taxifooter.png")}
        />
      </View>
    </View>
  );
};

export default Taxi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundImage: "linear-gradient(to left,#ebf7ed, #ede76f)",
    flexDirection: "row",
  },
  body: { marginTop: "30px" },
  circle: {
    marginLeft: "30px",
    width: "60px",
    height: "60px",
    borderRadius: "30px",
    backgroundColor: "rgba(217, 217, 217, 0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  inputAddress: {
    marginLeft: "20px",
    width: 350,
    height: 60,
    position: "absolute",
    top: 160,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: "5px",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
