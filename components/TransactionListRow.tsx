import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import { Transaction } from "@/types/transactions";

type Props = {
  transaction: Transaction;
};

export default function TransactionListRow({ transaction }: Props) {
  return (
    <View style={styles.transactionContainer}>
      <ThemedText>{transaction.description}</ThemedText>
      <ThemedText>{transaction.amount}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
