import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";

const MaTheDATA = ({ navigation }) => {
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
            style={styles.backButton}
          />
        </Pressable>
        <Text style={styles.headerText}>Mã thẻ/DATA</Text>
      </View>

      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => {
            setSelected(1);
          }}
          style={[
            styles.tabButton,
            {
              backgroundColor:
                selected === 1 ? "#FFF" : "rgba(217, 217, 217, 0.0)",
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: selected === 1 ? "#E77710" : "#D9D9D9" },
            ]}
          >
            Mua mã thẻ
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setSelected(2);
          }}
          style={[
            styles.tabButton,
            {
              backgroundColor:
                selected === 2 ? "#FFF" : "rgba(217, 217, 217, 0.0)",
              marginLeft: 10,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: selected === 2 ? "#E77710" : "#D9D9D9" },
            ]}
          >
            Nạp DATA
          </Text>
        </Pressable>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <Image
            style={styles.infoIcon}
            source={require("../assets/img/icon-thuhuong.png")}
          />
          <Text style={styles.infoHeaderText}>Tài khoản nguồn</Text>
        </View>
        <Text style={styles.infoText}>55555555555</Text>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Số dư</Text>
          <View style={styles.infoBalanceContainer}>
            <Text style={styles.infoBalance}>0 VND</Text>
            <Image
              style={styles.eyeIcon}
              source={require("../assets/img/eye-crossed.png")}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardInfoContainer}>
        <View style={styles.cardInfoHeader}>
          <Image
            style={styles.cardInfoIcon}
            source={require("../assets/img/usd.png")}
          />
          <Text style={styles.cardInfoHeaderText}>Thông tin mã thẻ</Text>
        </View>
        <TextInput style={styles.cardInfoInput} placeholder="Thẻ điện thoại" />
        <View style={styles.infoDivider} />
        <TextInput style={styles.cardInfoInput} placeholder="Nhà cung cấp" />
        <View style={styles.infoDivider} />
        <TextInput style={styles.cardInfoInput} placeholder="Mệnh giá" />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.cancelButton}
        >
          <Text style={styles.buttonText}>Hủy</Text>
        </Pressable>
        <Pressable style={styles.continueButton}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
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
  header: {
    height: "12%",
    backgroundColor: "#FF6600",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  backButton: {
    width: 40,
    height: 40,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "70px",
  },
  tabContainer: {
    width: "350px",
    height: "39px",
    borderRadius: "22px",
    backgroundColor: "rgba(217, 217, 217, 0.34)",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  tabButton: {
    width: "165px",
    height: "30px",
    borderRadius: "22px",
    justifyContent: "center",
    marginLeft: "5px",
  },
  tabText: {
    fontSize: "13px",
    fontWeight: 400,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#fff",
    width: 350,
    height: 150,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  infoIcon: {
    width: "24px",
    height: "24px",
  },
  infoHeaderText: {
    fontWeight: 600,
    fontSize: "18px",
  },
  infoText: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#ff6600",
    marginBottom: 20,
    marginLeft: 10,
  },
  infoDivider: {
    width: "95%",
    height: 1,
    backgroundColor: "#ccc",
    alignSelf: "center",
  },
  infoRow: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
  infoLabel: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#91917e",
  },
  infoBalanceContainer: {
    flexDirection: "row",
    marginLeft: 190,
  },
  infoBalance: {
    fontWeight: 600,
    fontSize: "18px",
  },
  eyeIcon: {
    tintColor: "#ff6600",
    width: "24px",
    height: "24px",
    marginLeft: 10,
  },
  cardInfoContainer: {
    backgroundColor: "#fff",
    width: 350,
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  cardInfoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  cardInfoIcon: {
    tintColor: "#ff6600",
    width: "24px",
    height: "24px",
  },
  cardInfoHeaderText: {
    fontWeight: 600,
    fontSize: "18px",
  },
  cardInfoInput: {
    marginTop: 20,
    color: "#91917e",
    fontSize: "18px",
    fontWeight: 600,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
  },
  cancelButton: {
    borderColor: "#ff6600",
    borderWidth: 3,
    borderRadius: 30,
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButton: {
    borderColor: "#ff6600",
    backgroundColor: "#ff6600",
    borderWidth: 3,
    borderRadius: 30,
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "18px",
  },
});


