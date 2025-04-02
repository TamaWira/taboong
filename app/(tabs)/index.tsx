import BalanceSummary from "@/components/BalanceSummary";
import ThemedView from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, useColorScheme } from "react-native";

export default function HomePage() {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Welcome, Bayu!</Text>
      <BalanceSummary />
    </ThemedView>
  );
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      gap: 20,
    },
    title: {
      color: Colors[theme].text,
      fontSize: 28,
      fontWeight: "bold",
    },
  });
};
