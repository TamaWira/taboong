import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import { AggregatedTransaction } from "@/types/transactions";

type Props = {
  aggregatedTransaction: AggregatedTransaction;
};

export default function TransactionListHeader({
  aggregatedTransaction,
}: Props) {
  return (
    <View style={styles.headerContainer}>
      <ThemedText style={styles.headerText}>
        {aggregatedTransaction.date}
      </ThemedText>
      <ThemedView style={styles.headerSeparator} />
      <ThemedText style={styles.headerText}>
        ${aggregatedTransaction.totalAmount}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  headerSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#00000050",
    height: "100%",
    flex: 1,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
