import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={theme} />
    </>
  );
}
