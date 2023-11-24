import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";

const CKLNHForm = ({ navigation }) => {
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
