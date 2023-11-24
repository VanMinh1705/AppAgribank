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
    const today = new Date();

    if (currentDate > today) {
      alert("Không thể chọn ngày trong tương lai. Vui lòng chọn lại.");
    } else {
      const differenceInDays = Math.ceil(
        (today - currentDate) / (24 * 60 * 60 * 1000)
      );

      if (differenceInDays > 30) {
        alert("Chọn khoảng thời gian tối đa là 30 ngày.");
      } else {
        setSelectedFromDate(formatDate(currentDate));
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

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const onMonthChange = (month) => {
    setSelectedMonth(month.month);
  };

  const onYearChange = (year) => {
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
            style={styles.backButton}
          />
        </Pressable>
        <Text style={styles.headerText}>TÀI KHOẢN THANH TOÁN</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../assets/img/itemcard.jpg")}
            style={styles.paymentInfoIcon}
          />
          <Text style={styles.paymentInfoText}> Tài khoản thanh toán</Text>
        </View>
<<<<<<< HEAD
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
=======
        <View style={styles.accountDetails}>
          <Text style={styles.accountNumber}>011111111111</Text>
          <Image source={require("../assets/img/copy.jpg")} style={styles.copyIcon} />
          <Image source={require("../assets/img/qrcode.jpg")} style={styles.qrCodeIcon} />
        </View>
        <Text style={styles.accountBalance}>Số dư :57,367</Text>
        <Text style={styles.separator}>Chủ tài khoản</Text>
        <View style={styles.accountHolder}>
          <Text style={styles.accountHolderName}>HUYNH VY HAO</Text>
>>>>>>> 271e71d3fdd1c324f3d04cd4f84910d3074b011d
        </View>
        <View style={styles.branchDetails}>
          <Text style={styles.branchLabel}>Chi nhánh mở</Text>
        </View>
        <View style={styles.branchInfo}>
          <Text style={styles.branchName}>Chi nhanh My Tho - Tien Giang</Text>
        </View>
      </View>

      <View style={styles.additionalSection1}>
        <View style={styles.additionalContent}>
          <Image source={require("../assets/img/dt.jpg")} style={styles.additionalImage} />
          <View style={styles.additionalTextContainer}>
            <Text style={styles.additionalText}>
              Đăng ký và Quản lý nickname thay
              <br />
              cho số TK để thực hiện chuyển tiền
              <br />
              nhanh chóng và thuận tiện.
            </Text>
            <Pressable style={styles.additionalButton}>
              <Text style={styles.buttonText}>Quản lý nickname</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.additionalSection2}>
        <View style={styles.additionalContent}>
          <Image source={require("../assets/img/table.jpg")} style={styles.additionalImage} />
          <Text style={styles.additionalText}>Tra cứu giao dịch</Text>
          <TouchableOpacity onPress={openCalendarModal}>
            <View style={styles.dateSelection}>
              <View style={styles.fromDateContainer}>
                <Text style={styles.dateLabel}>Từ ngày</Text>
                {selectedFromDate ? (
                  <Text style={styles.selectedDate}>{selectedFromDate}</Text>
                ) : (
                  <Image source={require("../assets/img/list.jpg")} style={styles.listIcon} />
                )}
              </View>
              <View style={styles.toDateContainer}>
                <Text style={styles.dateLabel}>Đến ngày</Text>
                {selectedToDate ? (
                  <Text style={styles.selectedDate}>{selectedToDate}</Text>
                ) : (
                  <Image source={require("../assets/img/list.jpg")} style={styles.listIcon} />
                )}
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isCalendarModalVisible}
            onRequestClose={closeCalendarModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.calendarModal}>
                <View style={styles.calendarHeader}>
                  <Text style={styles.calendarHeaderText}>Chọn ngày</Text>
                  <TouchableOpacity onPress={closeCalendarModal}>
                    <Image source={require("../assets/img/close.jpg")} style={styles.closeButton} />
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
                  onMonthChange={onMonthChange}
                  onYearChange={onYearChange}
                  hideExtraDays={true}
                  enableSwipeMonths={true}
                />
              </View>
            </View>
          </Modal>
          <Image source={require("../assets/img/search_or.jpg")} style={styles.searchButton} />
        </View>
      </View>

      <Text style={styles.noteText}>
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
    backgroundColor: "#FF6600",
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
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
    height: 175,
    marginVertical: 10,
    padding: 10,
    left: 10,
  },
  paymentInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentInfoIcon: {
    width: 30,
    height: 30,
  },
  paymentInfoText: {
    left: 15,
    color: "#FF6600",
    fontWeight: "700",
  },
  accountDetails: {
    flexDirection: "row",
    marginLeft: 15,
  },
  accountNumber: {
    left: 15,
    color: "#FF6600",
    fontWeight: "700",
  },
  copyIcon: {
    top: 2.5,
    left: 20,
    width: 20,
    height: 20,
  },
  qrCodeIcon: {
    marginLeft: 200,
    width: 25,
    height: 25,
  },
  accountBalance: {
    left: 15,
  },
  separator: {
    color: "grey",
    borderTopWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    borderColor: "gray",
    marginLeft: 15,
  },
  accountHolder: {
    flexDirection: "row",
    marginLeft: 15,
  },
  accountHolderName: {
    marginLeft: 15,
  },
  branchDetails: {
    borderTopWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    borderColor: "gray",
    flexDirection: "row",
  },
  branchLabel: {
    color: "grey",
    marginLeft: 15,
  },
  branchInfo: {
    flexDirection: "row",
    marginLeft: 15,
  },
  additionalSection1: {
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#FFFFCC",
    width: 370,
    height: 130,
    marginLeft: 10,
  },
  additionalSection2: {
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 130,
    marginLeft: 10,
    padding: 10,
  },
  additionalContent: {
    flexDirection: "row",
  },
  additionalImage: {
    width: "150px",
    height: "120px",
  },
  additionalTextContainer: {
    flexDirection: "column",
  },
  additionalText: {
    padding: 3,
  },
  additionalButton: {
    borderRadius: 25,
    marginLeft: 30,
    width: 170,
    height: 60,
    backgroundColor: "#FF6600",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  searchButton: {
    width: 40,
    height: 40,
    marginLeft: 250,
    bottom: 40,
  },
  dateSelection: {
    flexDirection: "row",
  },
  fromDateContainer: {
    alignItems: "center",
  },
  toDateContainer: {
    flexDirection: "colum",
    alignItems: "center",
  },
  dateLabel: {
    color: "grey",
  },
  selectedDate: {
    marginLeft: 40,
  },
  listIcon: {
    width: 20,
    height: 20,
    marginLeft: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarModal: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "center"
  },
  calendarHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6600",
    textAlign: "center",
  },
  closeButton: {
    width: 30,
    height: 30,
  },
  noteText: {
    marginLeft: 10,
    fontWeight: 400,
  },
});
