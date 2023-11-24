import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Carousel from "./Carousel";
import CarouselFooter from "./CarouselFooter";

const home = ({ navigation, route }) => {
  const { id, item } = route.params;
  const taichinh = [
    {
      id: 1,
      image: require("../assets/imgtaichinh/icon-ck.jpg"),
      name: "Chuyển khoản",
    },
    {
      id: 2,
      image: require("../assets/imgtaichinh/icon-naptien.jpg"),
      name: "Nạp tiền điện thoại",
    },
    {
      id: 3,
      image: require("../assets/imgtaichinh/icon-thanhtoan.jpg"),
      name: "Thanh toán hóa đơn ",
    },
    {
      id: 4,
      image: require("../assets/imgtaichinh/icon-mathe.jpg"),
      name: "Mã thẻ/Data",
    },
    {
      id: 5,
      image: require("../assets/imgtaichinh/icon-pigmoney.jpg"),
      name: "Tiền gửi trực tuyến",
    },
    {
      id: 6,
      image: require("../assets/imgtaichinh/icon-chungkhoan.jpg"),
      name: "Chứng khoán",
    },
    {
      id: 7,
      image: require("../assets/imgtaichinh/icon-naptiendv.jpg"),
      name: "Nạp tiền dịch vụ",
    },
    {
      id: 8,
      image: require("../assets/imgtaichinh/icon-guitienmung.jpg"),
      name: "Gửi tiền mừng ",
    },
    {
      id: 9,
      image: require("../assets/imgtaichinh/icon-nhantienkieuhoi.jpg"),
      name: "Nhận tiền kiều hối ",
    },
    {
      id: 10,
      image: require("../assets/imgtaichinh/icon-trano.jpg"),
      name: "Trả nợ tiền vay ",
    },
    {
      id: 11,
      image: require("../assets/imgtaichinh/icon-banbe.jpg"),
      name: "Bạn bè",
    },
    {
      id: 12,
      image: require("../assets/imgtaichinh/icon-baohiem.jpg"),
      name: "Bảo hiểm Agribank Abic",
    },
  ];
  const muasam = [
    {
      id: 1,
      image: require("../assets/imgmuasam/icon-vemaybay.jpg"),
      name: "Vé máy bay",
    },
    {
      id: 2,
      image: require("../assets/imgmuasam/icon-muasam.jpg"),
      name: "Mua sắm VnShop",
    },
    {
      id: 3,
      image: require("../assets/imgmuasam/icon-taxi.jpg"),
      name: "Gọi taxi",
    },
    {
      id: 4,
      image: require("../assets/imgmuasam/icon-tauhoa.jpg"),
      name: "Vé tàu hỏa",
    },
    {
      id: 5,
      image: require("../assets/imgmuasam/icon-vexe.jpg"),
      name: "Vé xe",
    },
    {
      id: 6,
      image: require("../assets/imgmuasam/icon-xemphim.jpg"),
      name: "Vé xem phim",
    },
    {
      id: 7,
      image: require("../assets/imgmuasam/icon-dathoa.jpg"),
      name: "Đặt hoa",
    },
    {
      id: 8,
      image: require("../assets/imgmuasam/icon-khachsan.jpg"),
      name: "Đặt phòng khách sạn",
    },
    {
      id: 9,
      image: require("../assets/imgmuasam/icon-golf.jpg"),
      name: "Đặt sân golf",
    },
    {
      id: 10,
      image: require("../assets/imgmuasam/icon-giaohang.jpg"),
      name: "Giao hàng",
    },
    {
      id: 11,
      image: require("../assets/imgmuasam/icon-thethao.jpg"),
      name: "Thể thao giải trí",
    },
  ];
  const tienich = [
    {
      id: 1,
      image: require("../assets/img/tienich1.png"),
      name: "Cài đặt SoftOTP",
    },
    {
      id: 2,
      image: require("../assets/img/tienich2.png"),
      name: "Cài đặt vân tay",
    },
    {
      id: 3,
      image: require("../assets/img/tienich3.png"),
      name: "Cài đặt hạn mức",
    },
    {
      id: 4,
      image: require("../assets/img/tienich4.png"),
      name: "Nhận tin biến động số dư",
    },
    {
      id: 5,
      image: require("../assets/img/tienich5.png"),
      name: "Cài đặt tài khoản",
    },
    {
      id: 6,
      image: require("../assets/img/tienich6.png"),
      name: "Quản lý nickname",
    },
    {
      id: 7,
      image: require("../assets/img/tienich7.png"),
      name: "Cài đặt mật khẩu",
    },
    {
      id: 8,
      image: require("../assets/img/tienich8.png"),
      name: "Quản lý danh bạ",
    },
    {
      id: 9,
      image: require("../assets/img/tienich9.png"),
      name: "Thông tin ứng dụng",
    },
    {
      id: 10,
      image: require("../assets/img/tienich10.png"),
      name: "Tra cứu thông tin",
    },
    {
      id: 11,
      image: require("../assets/img/tienich11.png"),
      name: "Tìm kiếm địa điểm",
    },
  ];
  const itemModal = [
    {
      id: 1,
      image: require("../assets/img/modal1.png"),
      name: "Cài đặt Soft OTP",
    },
    {
      id: 2,
      image: require("../assets/img/modal2.png"),
      name: "Nhận tin biến động số dư",
    },
    {
      id: 3,
      image: require("../assets/img/modal3.png"),
      name: "Cài đặt vân tay",
    },
    {
      id: 4,
      image: require("../assets/img/modal4.png"),
      name: "Cài đặt hạn mức chuyển khoản",
    },
    {
      id: 5,
      image: require("../assets/img/modal5.png"),
      name: "Cài đặt ngôn ngữ",
    },
    {
      id: 6,
      image: require("../assets/img/modal6.png"),
      name: "Đổi mật khẩu",
    },
    {
      id: 7,
      image: require("../assets/img/modal7.png"),
      name: "Cấp/Đổi mã PIN",
    },
    {
      id: 8,
      image: require("../assets/img/modal8.png"),
      name: "Quản lý nickname",
    },
    {
      id: 9,
      image: require("../assets/img/modal9.png"),
      name: "Quản lý danh bạ",
    },
    {
      id: 10,
      image: require("../assets/img/modal10.png"),
      name: "Quản lý đầu tư",
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        >
          <Image
            style={{ tintColor: "#000", width: "24px", height: "24px" }}
            source={require("../assets/img/search.png")}
          />
        </Pressable>
        <Image
          style={{ width: "250px", height: "50px" }}
          source={require("../assets/img/agribank-logo.png")}
        />
        <Pressable onPress={toggleModal}>
          <Image
            style={{ width: "24px", height: "24px" }}
            source={require("../assets/img/menu-burger.png")}
          />
        </Pressable>

        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalContentHeader}>
                <View
                  style={{
                    marginTop: "10px",
                    flexDirection: "row",
                    marginLeft: "10px",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: "45px",
                      height: "45px",
                      borderRadius: "30px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "32px",
                        height: "32px",
                        tintColor: "#f09329",
                      }}
                      source={require("../assets/img/icon-user.png")}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "70px" }}>
                    <Pressable
                      style={{
                        backgroundColor: "#edc39f",
                        width: "120px",
                        height: "20px",
                        borderRadius: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        navigation.goBack();
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Thoát ứng dụng</Text>
                    </Pressable>
                    <Pressable
                      style={{
                        backgroundColor: "#edc39f",
                        width: "20px",
                        height: "20px",
                        borderRadius: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "10px",
                      }}
                      onPress={toggleModal}
                    >
                      <Text style={{ color: "#fff" }}>X</Text>
                    </Pressable>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      marginLeft: "10px",
                      marginTop: "10px",
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginLeft: "10px",
                      marginTop: "5px",
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 200,
                    }}
                  >
                    {item.SoTK}
                  </Text>
                </View>
              </View>

              <FlatList
                data={itemModal}
                renderItem={({ item }) => (
                  <View style={{ height: "50px" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                    >
                      <Image
                        style={{ width: "36px", height: "36px" }}
                        source={item.image}
                      />
                      <Text
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                          marginLeft: 10,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 700,
                        height: 1,
                        borderBottomWidth: 2,
                        borderBottomColor: "#ccc",
                        borderStyle: "dashed",
                      }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <Image
          style={{ width: "100%", height: "200px" }}
          source={require("../assets/img/background.jpg")}
        />
        <View style={styles.banner}>
          <Pressable
            onPress={() => {
              navigation.navigate("TrangTK", { id: id, item: item });
            }}
            style={{ alignItems: "center" }}
          >
            <Image
              style={{ width: "70px", height: "70px" }}
              source={require("../assets/img/icon-tk.png")}
            />
            <Text
              style={{
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              Tài khoản
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("QRScanner");
            }}
            style={{ alignItems: "center" }}
          >
            <Image
              style={{ width: "70px", height: "70px" }}
              source={require("../assets/img/icon-qr.jpg")}
            />
            <Text
              style={{
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              QR Pay
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("DichVuThe");
            }}
            style={{ alignItems: "center" }}
          >
            <Image
              style={{ width: "70px", height: "70px" }}
              source={require("../assets/img/icon-dv.jpg")}
            />
            <Text
              style={{
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              Dịch vụ thẻ
            </Text>
          </Pressable>
        </View>

        <SafeAreaView style={{ marginTop: "20px" }}>
          <Carousel />
        </SafeAreaView>

        <View style={styles.sectionTaiChinh}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginLeft: "30px",
              marginBottom: "10px",
            }}
          >
            Tài Chính
          </Text>

          <FlatList
            numColumns={3}
            data={taichinh}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  if (item.id === 1) {
                    navigation.navigate("ChuyenKhoan");
                  } else if (item.id === 2) {
                    navigation.navigate("NapTien");
                  } else if (item.id === 3) {
                    navigation.navigate("ThanhToanHD");
                  } else if (item.id === 4) {
                    navigation.navigate("MaTheDATA");
                  }
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "130px",
                  justifyContent: "space-around",
                }}
              >
                <Image
                  style={{ width: "55px", height: "55px" }}
                  source={item.image}
                />
                <Text
                  style={{
                    width: "95px",
                    height: "70px",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.sectionMuaSam}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginLeft: "30px",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            Mua sắm
          </Text>

          <FlatList
            numColumns={3}
            data={muasam}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  if (item.id === 3) {
                    navigation.navigate("TaxiAnimation");
                  } else if (item.id === 1) {
                    navigation.navigate("DatVeMayBay");
                  }
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "130px",
                  justifyContent: "space-around",
                }}
              >
                <Image
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "5px",
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    width: "95px",
                    height: "70px",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <SafeAreaView style={{ marginTop: "20px" }}>
          <CarouselFooter style={{ borderRadius: "20px" }} />
        </SafeAreaView>
        <View style={styles.sectionTaiChinh}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginLeft: "30px",
              marginBottom: "10px",
            }}
          >
            Tiện ích
          </Text>

          <FlatList
            numColumns={3}
            data={tienich}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("TienIch");
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "130px",
                  justifyContent: "space-around",
                }}
              >
                <Image
                  style={{ width: "55px", height: "55px" }}
                  source={item.image}
                />
                <Text
                  style={{
                    width: "95px",
                    height: "70px",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={{ alignItems: "center" }}>
          <Image
            style={{
              opacity: 0.7,
              tintColor: "#0b4712",
              width: "24px",
              height: "24px",
            }}
            source={require("../assets/img/icon-home.png")}
          />
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Trang chủ
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("infoAgri");
          }}
          style={{ alignItems: "center" }}
        >
          <Image
            style={{ tintColor: "#ccc", width: "24px", height: "24px" }}
            source={require("../assets/img/bell-footer.png")}
          />
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Thông báo
          </Text>
        </Pressable>
        <Pressable style={{ alignItems: "center" }}>
          <Image
            style={{ tintColor: "#ccc", width: "24px", height: "24px" }}
            source={require("../assets/img/icon-cart.png")}
          />
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            VnShop
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TaxiAnimation");
          }}
          style={{ alignItems: "center" }}
        >
          <Image
            style={{ tintColor: "#ccc", width: "24px", height: "24px" }}
            source={require("../assets/img/taxi.png")}
          />
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Gọi Taxi
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("lichSuGD");
          }}
          style={{ alignItems: "center" }}
        >
          <Image
            style={{ tintColor: "#ccc", width: "24px", height: "24px" }}
            source={require("../assets/img/clipboard.png")}
          />
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Lịch sử GD
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
    width: "100%", // Ensure the header takes up the full width
    zIndex: 1, // Ensure the header is above the scrollable content
    borderWidth: "1px",
    borderColor: "#ccc",
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  sectionTaiChinh: {
    marginTop: "30px",
  },
  sectionMuaSam: {
    marginTop: "5px",
    borderRadius: "10px",
    width: "95%",
    marginLeft: "3px",
    alignSelf: "center",
    backgroundImage: "linear-gradient(#ebf7ed, #faf1e3)",
  },
  footer: {
    borderWidth: "1px",
    borderColor: "#ccc",
    width: "100%",
    height: "80px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    marginTop: "55px",
    marginRight: "10px",
    borderRadius: "20px",
    width: 300,
    height: 725,
    backgroundColor: "#fff",
  },
  modalContentHeader: {
    backgroundColor: "#f09329",
    width: "100%",
    height: 150,
    marginBottom: "20px",
  },
});
