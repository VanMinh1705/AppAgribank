import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { RadioButton } from "react-native-paper";
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

const lichSuGD = ({ navigation }) => {
  const [isAccountModalVisible, setAccountModalVisible] = useState(false);
  const [isTransactionTypeModalVisible, setTransactionTypeModalVisible] =
    useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedText, setSelectedText] = useState("Tất cả");
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  const [selectedTransactionTypeText, setSelectedTransactionTypeText] =
    useState("Tất cả");
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const openAccountModal = () => {
    setAccountModalVisible(true);
  };

  const closeAccountModal = () => {
    setAccountModalVisible(false);
  };

  const openTransactionTypeModal = () => {
    setTransactionTypeModalVisible(true);
  };

  const closeTransactionTypeModal = () => {
    setTransactionTypeModalVisible(false);
  };
  const openCalendarModal = () => {
    setCalendarModalVisible(true);
  };

  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };

  const handleRadioPress = (value, text) => {
    setSelectedAccount(value);
    setSelectedText(text);
    closeAccountModal();
  };

  const handleTransactionTypeRadioPress = (value, text) => {
    setSelectedTransactionType(value);
    setSelectedTransactionTypeText(text);
    closeTransactionTypeModal();
  };

  const onDayPress = (day) => {
    const currentDate = new Date(day.dateString);
    const today = new Date(); // Ngày hiện tại

    // Kiểm tra nếu ngày chọn là ngày trong tương lai
    if (currentDate > today) {
      alert("Không thể chọn ngày trong tương lai. Vui lòng chọn lại.");
    } else {
      if (!selectedStartDate || currentDate < new Date(selectedStartDate)) {
        // Nếu chưa có ngày bắt đầu, set ngày bắt đầu
        setSelectedStartDate(formatDate(currentDate));
      } else {
        // Nếu đã có ngày bắt đầu nhưng chưa có ngày kết thúc, set ngày kết thúc
        setSelectedEndDate(formatDate(currentDate));

        // Các xử lý khác bạn muốn thêm vào đây...

        closeCalendarModal();
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
  return (
    <View style={styles.container}>
      {/* Phần Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/img/arrow-left.png")}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
        <Text style={styles.headerText}>LỊCH SỬ GD</Text>
      </View>

      {/* Phần chính của ứng dụng */}
      <View style={styles.mainContent}>
        {/* Phần thông tin thanh toán */}
        <View style={styles.paymentInfoContainer}>
          <Image
            source={require("../../assets/img/table.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.paymentInfoText}>Tra cứu giao dịch</Text>
        </View>

        {/* Dòng hiển thị tài khoản */}
        <TouchableOpacity onPress={openAccountModal}>
          <View style={{}}>
            <Text style={{ color: "grey" }}>Tài khoản</Text>
            <Text style={{ color: "#FF6600" }}>{selectedText}</Text>
            <Image
              source={require("../../assets/img/list.jpg")}
              style={{ width: 20, height: 20, marginLeft: 280 }}
            />
          </View>
        </TouchableOpacity>

        {/* Dòng loại giao dịch */}
        <TouchableOpacity onPress={openTransactionTypeModal}>
          <View style={{}}>
            <Text style={{}}>Loại giao dịch</Text>
            <Text style={{ color: "#FF6600" }}>
              {selectedTransactionTypeText}
            </Text>
            <Image
              source={require("../../assets/img/list.jpg")}
              style={{ width: 20, height: 20, marginLeft: 280 }}
            />
          </View>
        </TouchableOpacity>

        {/* Dòng chọn từ ngày và đến ngày */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ color: "grey" }}>Từ ngày</Text>
            <TouchableOpacity onPress={openCalendarModal}>
              {selectedStartDate ? (
                <Text style={{}}>{selectedStartDate}</Text>
              ) : (
                <Image
                  source={require("../../assets/img/list.jpg")}
                  style={{ width: 20, height: 20, marginLeft: 65 }}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ marginRight: 150, color: "grey" }}>Đến ngày</Text>
            <TouchableOpacity onPress={openCalendarModal}>
              {selectedEndDate ? (
                <Text style={{ marginRight: 150 }}>{selectedEndDate}</Text>
              ) : (
                <Image
                  source={require("../../assets/img/list.jpg")}
                  style={{ width: 20, height: 20, marginRight: 70 }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require("../../assets/img/search_or.jpg")}
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            position: "absolute",
            marginTop: "180px",
            marginLeft: "270px",
          }}
        />
      </View>
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
                    source={require("../../assets/img/close.jpg")}
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

      {/* Modal để hiển thị Tài Khoản Nguồn */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAccountModalVisible}
        onRequestClose={closeAccountModal}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 10,
              padding: 20,
              width: 300,
            }}
          >
            <View style={styles.accountModal}>
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
                  Tài Khoản Nguồn
                </Text>
                {/* Hình ảnh làm nút close */}
                <TouchableOpacity onPress={closeAccountModal}>
                  <Image
                    source={require("../../assets/img/close.jpg")}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
              {/* RadioButton cho tài khoản 1 */}
              <TouchableOpacity
                onPress={() => handleRadioPress("account1", "Tài khoản 1")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <RadioButton
                    value="account1"
                    status={
                      selectedAccount === "account1" ? "checked" : "unchecked"
                    }
                    onPress={() => setSelectedAccount("account1")}
                  />
                  <Text style={{ marginLeft: 10 }}>Tài khoản 1</Text>
                </View>
              </TouchableOpacity>
              {/* RadioButton cho tài khoản 2 */}
              <TouchableOpacity
                onPress={() => handleRadioPress("account2", "Tài khoản 2")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <RadioButton
                    value="account2"
                    status={
                      selectedAccount === "account2" ? "checked" : "unchecked"
                    }
                    onPress={() => setSelectedAccount("account2")}
                  />
                  <Text style={{ marginLeft: 10 }}>Tài khoản 2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal để hiển thị Loại giao dịch */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isTransactionTypeModalVisible}
        onRequestClose={closeTransactionTypeModal}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 10,
              padding: 20,
              width: 300,
            }}
          >
            <View style={styles.accountModal}>
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
                  Loại giao dịch
                </Text>
                {/* Hình ảnh làm nút close */}
                <TouchableOpacity onPress={closeTransactionTypeModal}>
                  <Image
                    source={require("../../assets/img/close.jpg")}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
              {/* RadioButton cho từng loại giao dịch */}
              <TouchableOpacity
                onPress={() =>
                  handleTransactionTypeRadioPress("type1", "Loại giao dịch 1")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <RadioButton
                    value="type1"
                    status={
                      selectedTransactionType === "type1"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() =>
                      handleTransactionTypeRadioPress(
                        "type1",
                        "Loại giao dịch 1"
                      )
                    }
                  />
                  <Text style={{ marginLeft: 10 }}>Loại giao dịch 1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleTransactionTypeRadioPress("type2", "Loại giao dịch 2")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <RadioButton
                    value="type2"
                    status={
                      selectedTransactionType === "type2"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() =>
                      handleTransactionTypeRadioPress(
                        "type2",
                        "Loại giao dịch 2"
                      )
                    }
                  />
                  <Text style={{ marginLeft: 10 }}>Loại giao dịch 2</Text>
                </View>
              </TouchableOpacity>
              {/* Thêm các RadioButton khác tùy theo số lượng loại giao dịch */}
            </View>
          </View>
        </View>
      </Modal>

      <Text style={{ marginLeft: 10, fontStyle: "italic" }}>
        Lưu ý: Báo cáo chỉ bao gồm các giao dịch trên ứng dụng Agribank E-Mobile
        Banking
      </Text>
    </View>
  );
};

export default lichSuGD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  header: {
    backgroundColor: "#FF6600",
    padding: 15,
    width: "100%",
    alignItems: "center",

    flexDirection: "row",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "80px",
  },
  mainContent: {
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 250,
    marginVertical: 10,
    padding: 10,
    left: 10,
  },
  paymentInfoContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    borderColor: "gray",
    alignItems: "center",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  accountModal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
});
