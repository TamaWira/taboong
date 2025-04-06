import { AggregatedTransaction, Transaction } from "@/types/transactions";

/**
 * Aggregate transactions by date.
 * --------------------------------
 * Combine all transactions for a given date into a single object.
 * @param transactions - The transactions to aggregate.
 * @returns The aggregated transactions.
 */
export const aggregateTransactions = (transactions: Transaction[]) => {
  const aggregatedTransactions: AggregatedTransaction[] = Object.values(
    transactions.reduce<Record<string, AggregatedTransaction>>(
      (acc, transaction) => {
        // Extract just the date part (YYYY-MM-DD) from the timestamp
        const dateOnly = transaction.transaction_date.split("T")[0];

        // If the date hasn't been seen before, create a new entry
        if (!acc[dateOnly]) {
          acc[dateOnly] = {
            date: dateOnly,
            totalAmount: 0,
            data: [],
          };
        }
        // Add the current transaction to the corresponding date
        acc[dateOnly].data.push(transaction);
        // Update the total: add for income, subtract for expense
        acc[dateOnly].totalAmount +=
          transaction.type === "income"
            ? transaction.amount
            : -transaction.amount;
        return acc;
      },
      {}
    )
  );

  // Sort the aggregated transactions from newest to oldest based on the date.
  aggregatedTransactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // For each date group, sort the transactions by updated_at (newest first)
  aggregatedTransactions.forEach((group) => {
    group.data.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  });

  return aggregatedTransactions;
};
