import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";
import Card from "./Card";
import ThemedText from "./ThemedText";

export default function BalanceSummary() {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return (
    <Card style={styles.container}>
      <View>
        <ThemedText>Total Balance</ThemedText>
        <Text style={styles.title}>$2,450</Text>
      </View>

      <View style={styles.balancesContainer}>
        <View style={styles.balance}>
          <Text style={styles.income}>Income</Text>
          <ThemedText>$100</ThemedText>
        </View>
        <View style={styles.balance}>
          <Text style={styles.expense}>Expense</Text>
          <ThemedText>$100</ThemedText>
        </View>
      </View>
    </Card>
  );
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    container: {
      gap: 10,
    },
    title: {
      color: Colors[theme].text,
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 5,
    },
    balancesContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    balance: {
      flexBasis: "50%",
      gap: 3,
    },
    income: {
      color: Colors[theme].tint,
    },
    expense: {
      color: Colors[theme].danger,
    },
  });
};
