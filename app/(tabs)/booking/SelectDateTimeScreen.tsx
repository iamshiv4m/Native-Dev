import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
  useColorScheme,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter, useLocalSearchParams } from "expo-router";

const SelectDateTimeScreen: React.FC = () => {
  const router = useRouter();
  const { service } = useLocalSearchParams();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const colorScheme = useColorScheme();

  const onConfirm = () => {
    router.push({
      pathname: "./UserDetailsScreen",
      params: { service, date: date.toString() },
    });
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const closeDatePicker = () => {
    setShowPicker(false);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false); // Close picker automatically on Android after selection
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const isDarkMode = colorScheme === "dark";

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#333" }]}>
        Select Date and Time for {service}
      </Text>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
        <Text style={styles.dateButtonText}>
          {date ? date.toLocaleString() : "Choose Date & Time"}
        </Text>
      </TouchableOpacity>

      {Platform.OS === "ios" ? (
        <Modal
          transparent={true}
          visible={showPicker}
          animationType="slide"
          onRequestClose={closeDatePicker}
        >
          <View style={styles.modalOverlay}>
            <View
              style={[
                styles.modalContainer,
                { backgroundColor: isDarkMode ? "#333" : "#fff" },
              ]}
            >
              <Text
                style={[
                  styles.modalTitle,
                  { color: isDarkMode ? "#fff" : "#333" },
                ]}
              >
                Pick a Date and Time
              </Text>
              <DateTimePicker
                value={date}
                mode="datetime"
                display="spinner"
                onChange={(event, selectedDate) => {
                  if (selectedDate) setDate(selectedDate);
                }}
                themeVariant={isDarkMode ? "dark" : "light"}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={closeDatePicker}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={handleDateChange}
            themeVariant={isDarkMode ? "dark" : "light"}
          />
        )
      )}

      <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  dateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 30,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  dateButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#008CBA",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  modalCloseButton: {
    backgroundColor: "#FF5252",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  modalCloseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SelectDateTimeScreen;
