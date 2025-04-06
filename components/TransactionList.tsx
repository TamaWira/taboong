import React from "react";
import { FlatList, StyleSheet, useColorScheme, View } from "react-native";
import Card from "./Card";
import TransactionListRow from "./TransactionListRow";
import { Transactions } from "@/constants/Transactions";
import TransactionListHeader from "./TransactionListHeader";
import { aggregateTransactions } from "@/utils/aggregrateTransactions";

export default function TransactionList() {
  const aggregatedTransactions = aggregateTransactions(Transactions);
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return (
    <FlatList
      data={aggregatedTransactions}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <>
          <TransactionListHeader aggregatedTransaction={item} />
          <Card
            style={{
              gap: 20,
            }}
          >
            {item.data.map((transaction, index) => (
              <View
                style={[
                  styles.item,
                  index === item.data.length - 1 ? styles.lastItem : null,
                ]}
                key={transaction.id}
              >
                <TransactionListRow
                  transaction={transaction}
                  key={transaction.id}
                />
              </View>
            ))}
          </Card>
        </>
      )}
      scrollEnabled={false}
    />
  );
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    item: {
      paddingBottom: 20,
      borderBottomWidth: 1, // Add border between items
      borderBottomColor: "#ffffff10",
    },
    lastItem: {
      borderBottomWidth: 0, // No border for the last item
      paddingBottom: 0,
    },
  });
};
