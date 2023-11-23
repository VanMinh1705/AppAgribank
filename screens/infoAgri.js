import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";

const infoAgri = ({ navigation }) => {
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            marginTop: "19px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={{
                width: "30px",
                height: "28px",
                marginLeft: "5px",
              }}
              source={require("../assets/img/arrow-left.png")}
            />
          </Pressable>
          <Text
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontWeight: 500,
              paddingLeft: "80px",
              paddingRight: "60px",
            }}
          >
            THÔNG TIN AGRIBANK
          </Text>
          <Image
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "10px",
            }}
            source={require("../assets/img/menu-dots.png")}
          />
        </View>

        <View
          style={{
            marginLeft: "10px",
            marginTop: "10px",
            width: "350px",
            height: "39px",
            borderRadius: "22px",
            backgroundColor: "rgba(217, 217, 217, 0.34)",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            onPress={() => {
              setSelected(1);
            }}
            style={{
              width: "106px",
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
              Biến động SD
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setSelected(2);
            }}
            style={{
              width: "106px",
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
              Khuyến mại
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setSelected(3);
            }}
            style={{
              width: "106px",
              height: "30px",
              borderRadius: "22px",
              backgroundColor:
                selected == 3 ? "#FFF" : "rgba(217, 217, 217, 0.0)",
              justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <Text
              style={{
                color: selected == 3 ? "#E77710" : "#D9D9D9",

                fontSize: "13px",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Tin Khác
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "41px",
          alignItems: "center",
          marginLeft: "16px",
        }}
      >
        <Image
          style={{
            width: "18px",
            height: "18px",
            marginLeft: "5px",
          }}
          source={require("../assets/img/search.png")}
        />
        <TextInput
          style={{
            marginLeft: "13px",
            color: "#817B7B",
            fontSize: "15px",
            fontWeight: 400,
          }}
          placeholder="Tìm kiếm"
        />
      </View>

      <View
        style={{
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: "640px",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "5px",
            marginTop: "106px",
          }}
          source={require("../assets/img/bell.png")}
        />
        <Text
          style={{
            color: "#817B7B",
            fontSize: "13px",
            fontWeight: 500,
            marginTop: "57px",
          }}
        >
          Quý khách chưa có thông báo mới.
        </Text>
      </View>
    </View>
  );
};

export default infoAgri;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: "106px",
    backgroundColor: "#E77710",
    alignItems: "center",
  },
});
