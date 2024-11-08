import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const ConfirmationScreen: React.FC = () => {
  const router = useRouter();
  const { service, date, address, specialInstructions } =
    useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmBooking = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.push("/"); // Redirect to Home screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Confirm Your Booking</Text>

      <View style={styles.infoBox}>
        <FontAwesome5
          name="concierge-bell"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Service:</Text>
          <Text style={styles.infoText}>{service}</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5
          name="calendar-alt"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Date:</Text>
          <Text style={styles.infoText}>
            {new Date(date as string).toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5
          name="map-marker-alt"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Address:</Text>
          <Text style={styles.infoText}>{address}</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5
          name="info-circle"
          size={24}
          color="#4CAF50"
          style={styles.icon}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Special Instructions:</Text>
          <Text style={styles.infoText}>{specialInstructions}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmBooking}
      >
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>

      {/* Custom Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FontAwesome5
              name="check-circle"
              size={60}
              color="#4CAF50"
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>Booking Confirmed!</Text>
            <Text style={styles.modalMessage}>
              Thank you for booking with us.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
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
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalIcon: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ConfirmationScreen;
