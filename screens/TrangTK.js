import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const TrangTK = ({ navigation, route }) => {
  const { item } = route.params;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
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
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.headerText}>THÔNG TIN KHÁCH HÀNG</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../assets/img/itemcard.jpg")}
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentInfoText}> Tài khoản thanh toán</Text>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountNumber}>{item.SoTK}</Text>
          <Image
            source={require("../assets/img/copy.jpg")}
            style={styles.copyIcon}
          />
          <Pressable
            onPress={() => {
              navigation.navigate("TaiKhoan");
            }}
          >
            <Image
              source={require("../assets/img/qr.png")}
              style={styles.qrIcon}
            />
          </Pressable>
        </View>
        <Text style={styles.balance}>Số dư: {formatCurrency(item.SoDu)}</Text>
      </View>

      <View style={styles.savingsAccount}>
        <Image
          source={require("../assets/img/pig.jpg")}
          style={styles.savingsIcon}
        />
        <Text style={styles.savingsText}> Tài khoản tiết kiệm</Text>
        <Text style={styles.detailsLink}>Xem chi tiết</Text>
      </View>

      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          // Thêm xử lý khi nhấn vào nút
        }}
      >
        <Text style={styles.buttonText}>Quản lý nickname tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600",
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 40,
    height: 40,
    right: 45,
  },
  headerText: {
    color: "white",
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
    padding: 10,
  },
  paymentInfoContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "gray",
    alignItems: "center",
    marginBottom: 10,
  },
  paymentIcon: {
    width: 30,
    height: 30,
  },
  paymentInfoText: {
    marginLeft: 10,
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountNumber: {
    left: 15,
    color: "#ff6600",
    fontWeight: "bold",
  },
  copyIcon: {
    top: 2.5,
    left: 20,
    width: 20,
    height: 20,
  },
  qrIcon: {
    width: 24,
    height: 24,
    tintColor: "#ff6600",
    marginLeft: 200,
  },
  balance: {
    left: 15,
    fontWeight: "bold",
  },
  savingsAccount: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 60,
    marginLeft: 10,
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  savingsIcon: {
    width: 30,
    height: 30,
    top: 10,
    left: 5,
  },
  savingsText: {
    left: 10,
    top: 15,
  },
  detailsLink: {
    left: 100,
    top: 15,
    color: "#FF6600",
    textDecorationLine: "underline",
    fontStyle: "italic",
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

export default TrangTK;
