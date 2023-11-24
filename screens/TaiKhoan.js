import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
LocaleConfig.locales["vi"] = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "Th.1",
    "Th.2",
    "Th.3",
    "Th.4",
    "Th.5",
    "Th.6",
    "Th.7",
    "Th.8",
    "Th.9",
    "Th.10",
    "Th.11",
    "Th.12",
  ],
  dayNames: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ],
  dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
};

LocaleConfig.defaultLocale = "vi";

const TaiKhoan = ({ navigation, route }) => {
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const openCalendarModal = () => {
    setCalendarModalVisible(true);
  };

  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };
  const onDayPress = (day) => {
    const currentDate = new Date(day.dateString);
    const today = new Date(); // Ngày hiện tại

    // Kiểm tra nếu ngày chọn là ngày trong tương lai
    if (currentDate > today) {
      alert("Không thể chọn ngày trong tương lai. Vui lòng chọn lại.");
    } else {
      // Tính khoảng cách giữa ngày chọn và ngày hiện tại
      const differenceInDays = Math.ceil(
        (today - currentDate) / (24 * 60 * 60 * 1000)
      );

      if (differenceInDays > 30) {
        // Nếu chênh lệch quá 30 ngày, thông báo và không có thay đổi
        alert("Chọn khoảng thời gian tối đa là 30 ngày.");
      } else {
        // Set ngày bắt đầu là ngày chọn
        setSelectedFromDate(formatDate(currentDate));

        // Set ngày kết thúc là ngày hiện tại
        setSelectedToDate(formatDate(today));

        alert(
          `Đã đặt lại ngày bắt đầu là ${formatDate(
            currentDate
          )} và ngày kết thúc là ${formatDate(today)}.`
        );
        closeCalendarModal();

        setSelectedMonth(currentDate.getMonth() + 1);
        setSelectedYear(currentDate.getFullYear());
      }
    }
  };

  // Hàm chuyển định dạng ngày
  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const onMonthChange = (month) => {
    // Cập nhật giá trị tháng khi thay đổi
    setSelectedMonth(month.month);
  };

  const onYearChange = (year) => {
    // Cập nhật giá trị năm khi thay đổi
    setSelectedYear(year.year);
  };
  const { id, item } = route.params;
  //Đổi giá trị tiền tệ
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND", // You can change the currency code as needed
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
            style={{ width: 40, height: 40, right: 45 }}
          />
        </Pressable>
        <Text style={styles.headerText}>TÀI KHOẢN THANH TOÁN</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../assets/img/itemcard.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.paymentInfoText}> Tài khoản thanh toán</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ left: 15, color: "#FF6600", fontWeight: 700 }}>
            {item.SoTK}
          </Text>

          <Image
            source={require("../assets/img/copy.jpg")}
            style={{ top: 2.5, left: 20, width: 20, height: 20 }}
          />
          <View
            style={{
              borderColor: "red",
              borderWidth: 1,
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 200,
            }}
          >
            <Image
              source={require("../assets/img/qrcode.jpg")}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>

        <Text style={{ left: 15 }}>Số dư :{formatCurrency(item.SoDu)}</Text>

        <Text
          style={{
            color: "grey",
            borderTopWidth: 1,
            borderStyle: "dashed",
            width: "100%",
            borderColor: "gray",
            marginLeft: 15,
          }}
        >
          Chủ tài khoản
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 15 }}>{item.name}</Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderStyle: "dashed",
            width: "100%",
            borderColor: "gray",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "grey", marginLeft: 15 }}>Chi nhánh mở</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 15 }}>{item.chiNhanh}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 5,
          borderRadius: 20,
          backgroundColor: "#FFFFCC",
          width: 370,
          height: 130,
          marginLeft: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/img/dt.jpg")}
            style={{ width: "150px", height: "120px" }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ padding: 3 }}>
              Đăng ký và Quản lý nickname thay
              <br />
              cho số TK để thực hiện chuyển tiền
              <br />
              nhanh chóng và thuận tiện.
            </Text>
            <Pressable
              style={{
                borderRadius: 25,
                marginLeft: 30,
                width: 170,
                height: 60,
                backgroundColor: "#FF6600",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Quản lý nickname
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          borderRadius: 20,
          backgroundColor: "#fff",
          width: 370,
          height: 130,
          marginLeft: 10,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/img/table.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ marginTop: 6 }}>Tra cứu giao dịch</Text>
        </View>
        <View style={{}}>
          {/* Dòng chọn từ ngày và đến ngày */}
          <TouchableOpacity onPress={openCalendarModal}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "grey" }}>Từ ngày</Text>
                {selectedFromDate ? (
                  <Text style={{}}>{selectedFromDate}</Text>
                ) : (
                  <Image
                    source={require("../assets/img/list.jpg")}
                    style={{ width: 20, height: 20 }}
                  />
                )}
              </View>
              <View style={{ flexDirection: "colum", alignItems: "center" }}>
                <Text style={{ color: "grey", marginLeft: 60 }}>Đến ngày</Text>
                {selectedToDate ? (
                  <Text style={{ marginLeft: 40 }}>{selectedToDate}</Text>
                ) : (
                  <Image
                    source={require("../assets/img/list.jpg")}
                    style={{ width: 20, height: 20, marginLeft: 40 }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* Modal để hiển thị chỉnh ngày*/}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isCalendarModalVisible}
            onRequestClose={closeCalendarModal}
          >
            <View style={styles.modalContainer}>
              <View
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: 10,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <View style={styles.calendarModal}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#FF6600",
                        textAlign: "center",
                      }}
                    >
                      Chọn ngày
                    </Text>
                    <TouchableOpacity onPress={closeCalendarModal}>
                      <Image
                        source={require("../assets/img/close.jpg")}
                        style={{ width: 30, height: 30 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                      [selectedFromDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: "orange",
                      },
                    }}
                    onMonthChange={(month) => onMonthChange(month)}
                    onYearChange={(year) => onYearChange(year)}
                    hideExtraDays={true} // Ẩn các ngày không thuộc tháng hiện tại
                    enableSwipeMonths={true} // Cho phép vuốt để thay đổi tháng
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Image
            source={require("../assets/img/search_or.jpg")}
            style={{ width: 40, height: 40, marginLeft: 250, bottom: 40 }}
          />
        </View>
      </View>

      <Text style={{ marginLeft: 10, fontWeight: 400 }}>
        Quý khách lưu ý: Thời gian tìm kiếm giới hạn trong 30 ngày
      </Text>
    </View>
  );
};

export default TaiKhoan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600", // Màu cam
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white", // Màu chữ trắng
    fontSize: 20,
  },
  mainContent: {
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 175,
    marginVertical: 10,
    padding: 10,
    left: 10,
  },
  paymentInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
