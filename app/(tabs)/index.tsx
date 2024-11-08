import { Image, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <LinearGradient
          colors={["#A1CEDC", "#4CA1AF"]}
          style={styles.headerContainer}
        >
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        </LinearGradient>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>
          Welcome to HomeHelper!
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.stepTitle}>
          Step 1: Get Started
        </ThemedText>
        <ThemedText style={styles.stepDescription}>
          Discover and schedule trusted household help with ease!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.stepTitle}>
          Step 2: Explore Services
        </ThemedText>
        <ThemedText style={styles.stepDescription}>
          Tap the Explore tab to find out more about available services.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.stepTitle}>
          Step 3: Manage Your Bookings
        </ThemedText>
        <ThemedText style={styles.stepDescription}>
          Go to your bookings tab to view or reschedule your appointments.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4CA1AF",
  },
  stepContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CA1AF",
  },
  stepDescription: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
