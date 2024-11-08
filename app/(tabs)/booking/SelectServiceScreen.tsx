// app/(tabs)/booking/SelectServiceScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const services = ["Maid", "Cook", "Babysitter", "Gardener", "Driver"];

const SelectServiceScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Service</Text>
      {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/(tabs)/booking/SelectDateTimeScreen",
              params: { service },
            })
          }
        >
          <Text style={styles.buttonText}>{service}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SelectServiceScreen;
