import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const TraNo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/img/arrow-left.png")}
            style={{ width: 40, height: 40, marginLeft: 12 }}
          />
        </Pressable>
        <Text style={styles.headerText}>Trả nợ tiền vay</Text>
      </View>
      <Image
        source={require("../../assets/img/edit.png")}
        style={{
          width: 80,
          height: 80,
          marginLeft: "10px",
          alignSelf: "center",
          tintColor: "#ccc",
          marginTop: 200,
        }}
      />
      <Text style={{ fontSize: 20, alignSelf: "center", marginTop: 20 }}>
        Quý khách chưa có hợp đồng tín dụng
      </Text>
    </View>
  );
};

export default TraNo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginLeft: 80,
  },
});
