export type TransactionType = "expense" | "income";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  transaction_date: string;
  category: string;
  type: TransactionType;

  created_at: string;
  updated_at: string;
};

export type AggregatedTransaction = {
  date: string;
  totalAmount: number;
  data: Transaction[];
};
