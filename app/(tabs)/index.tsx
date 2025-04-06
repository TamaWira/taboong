import BalanceSummary from "@/components/BalanceSummary";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import TransactionList from "@/components/TransactionList";
import { Colors } from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme } from "react-native";

export default function HomePage() {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewStyle}
    >
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.title}>Welcome, Bayu!</ThemedText>
        <BalanceSummary />
        <ThemedText style={styles.subTitle}>Recent Transactions</ThemedText>
        <TransactionList />
      </ThemedView>
    </ScrollView>
  );
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    scrollViewStyle: {
      backgroundColor: Colors[theme].background,
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingBottom: 30,
      gap: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
};
