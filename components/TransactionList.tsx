import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
import TransactionListRow from "./TransactionListRow";
import { Transactions } from "@/constants/Transactions";
import TransactionListHeader from "./TransactionListHeader";
import { aggregateTransactions } from "@/utils/aggregrateTransactions";

export default function TransactionList() {
  const aggregatedTransactions = aggregateTransactions(Transactions);

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
            {item.data.map((transaction) => (
              <TransactionListRow
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </Card>
        </>
      )}
      scrollEnabled={false}
    />
  );
}
