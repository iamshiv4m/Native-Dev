// app/(tabs)/booking.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bookings</Text>
      <Text style={styles.subtitle}>
        View, schedule, or reschedule your bookings here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default BookingScreen;
