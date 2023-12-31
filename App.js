import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import infoAgri from "./screens/Tab/infoAgri";
import home from "./screens/home";
import TrangTK from "./screens/TrangTK";
import lichSuGD from "./screens/Tab/lichSuGD";
import QRScanner from "./screens/QRScanner";
import SearchScreen from "./screens/SearchScreen";
import TaxiAnimation from "./screens/Tab/TaxiAnimation";
import Taxi from "./screens/Tab/Taxi";
import DichVuThe from "./screens/DichVuThe";
import DatVeMayBay from "./screens/DatVeMayBay";
import ChuyenKhoan from "./screens/ChuyenKhoan";
import CKNoiBoForm from "./screens/CKNoiBoForm";
import CKLNHForm from "./screens/CKLNHForm";
import NapTien from "./screens/TaiChinh/NapTien";
import ThanhToanHD from "./screens/ThanhToanHD";
import MaTheDATA from "./screens/MaTheDATA";
import TienIch from "./screens/TienIch";
import TaiKhoan from "./screens/TaiKhoan";
import TienGuiTrucTuyen from "./screens/TaiChinh/TienGuiTrucTuyen";
import ChungKhoan from "./screens/TaiChinh/ChungKhoan";
import NapTienDV from "./screens/TaiChinh/NapTienDV";
import GuiTienMung from "./screens/TaiChinh/GuiTienMung";
import NhanTienKHForm from "./screens/TaiChinh/NhanTienKHForm";
import TraNo from "./screens/TaiChinh/TraNo";
import BanBe from "./screens/TaiChinh/BanBe";
import MuaBaoHiem from "./screens/TaiChinh/MuaBaoHiem";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    fetch("https://650424bdc8869921ae2491fd.mockapi.io/account")
      .then((response) => response.json())
      .then((json) => {
        var arr = json.filter((item) => item.SoDT === username);
        if (arr.length !== 0) {
          if (arr[0].password === password) {
            navigation.navigate("Home", { id: arr[0].id, item: arr[0] });
          } else {
            setError("Mật khẩu sai");
            setIsErrorModalVisible(true);
          }
        } else {
          setError("Số điện thoại sai");
          setIsErrorModalVisible(true);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: "250px", height: "70px", marginLeft: 50 }}
          source={require("./assets/img/agribank-logo.png")}
        />
        <Text
          style={{
            color: "#db7b14",
            fontSize: "20px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Đăng Nhập
        </Text>

        <View style={{ marginTop: "20px" }}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={{
              fontSize: "20px",
              color: "#c4c4c4",
              width: "300px",
              height: "50px",
            }}
            placeholder="Số điện thoại"
          />
          <View
            style={{ width: "auto", height: "1px", backgroundColor: "#ccc" }}
          />
        </View>

        <View style={{ marginTop: "20px" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={{
                fontSize: "20px",
                color: "#c4c4c4",
                width: "300px",
                height: "50px",
              }}
              placeholder="Mật khẩu"
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={toggleShowPassword}
            />
          </View>
          <View
            style={{
              width: "auto",
              height: "1px",
              backgroundColor: "#ccc",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",

            marginTop: "20px",
          }}
        >
          <Pressable
            onPress={() => {
              handleLogin();
            }}
            style={{
              width: 180,
              height: 50,
              backgroundColor: "#db7b14",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
              Đăng Nhập
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#db7b14",
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Image
              style={{
                width: "26px",
                height: "26px",
              }}
              source={require("./assets/img/fingerprint.png")}
            />
          </Pressable>
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "#db7b14",
            fontSize: "18px",
            fontWeight: 700,
            marginTop: "30px",
          }}
        >
          Quên mật khẩu
        </Text>
      </View>
      <View
        style={{
          width: "340px",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "350px",
        }}
      >
        <View
          style={{
            width: "90px",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("./assets/img/share.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Chia sẻ
          </Text>
        </View>

        <View
          style={{
            width: "90px",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("./assets/img/message-question.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Hỏi đáp
          </Text>
        </View>

        <View
          style={{
            width: "90px",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Image
            style={{
              width: "24px",
              height: "24px",
            }}
            source={require("./assets/img/phone-flip.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Liên hệ
          </Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isErrorModalVisible}
        onRequestClose={() => {
          setIsErrorModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>{error}</Text>
            <Pressable
              style={styles.okButton}
              onPress={() => setIsErrorModalVisible(false)}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="infoAgri" component={infoAgri} />
        <Stack.Screen name="TrangTK" component={TrangTK} />
        <Stack.Screen name="lichSuGD" component={lichSuGD} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="TaxiAnimation" component={TaxiAnimation} />
        <Stack.Screen name="Taxi" component={Taxi} />
        <Stack.Screen name="DichVuThe" component={DichVuThe} />
        <Stack.Screen name="DatVeMayBay" component={DatVeMayBay} />
        <Stack.Screen name="ChuyenKhoan" component={ChuyenKhoan} />
        <Stack.Screen name="CKNoiBoForm" component={CKNoiBoForm} />
        <Stack.Screen name="CKLNHForm" component={CKLNHForm} />
        <Stack.Screen name="NapTien" component={NapTien} />
        <Stack.Screen name="ThanhToanHD" component={ThanhToanHD} />
        <Stack.Screen name="MaTheDATA" component={MaTheDATA} />
        <Stack.Screen name="TienIch" component={TienIch} />
        <Stack.Screen name="TaiKhoan" component={TaiKhoan} />
        <Stack.Screen name="TienGuiTrucTuyen" component={TienGuiTrucTuyen} />
        <Stack.Screen name="ChungKhoan" component={ChungKhoan} />
        <Stack.Screen name="NapTienDV" component={NapTienDV} />
        <Stack.Screen name="GuiTienMung" component={GuiTienMung} />
        <Stack.Screen name="NhanTienKHForm" component={NhanTienKHForm} />
        <Stack.Screen name="TraNo" component={TraNo} />
        <Stack.Screen name="BanBe" component={BanBe} />
        <Stack.Screen name="MuaBaoHiem" component={MuaBaoHiem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  errorText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  okButton: {
    width: 120,
    height: 40,
    backgroundColor: "#db7b14",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
