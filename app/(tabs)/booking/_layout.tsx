// app/(tabs)/booking/_layout.tsx
import { Stack } from "expo-router";

export default function BookingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="SelectServiceScreen"
        options={{ title: "Select Service" }}
      />
      <Stack.Screen
        name="SelectDateTimeScreen"
        options={{ title: "Select Date & Time" }}
      />
      <Stack.Screen
        name="UserDetailsScreen"
        options={{ title: "User Details" }}
      />
      <Stack.Screen
        name="ConfirmationScreen"
        options={{ title: "Confirmation" }}
      />
    </Stack>
  );
}
