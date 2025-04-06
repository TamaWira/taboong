import React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import ThemedText from "./ThemedText";
import { Transaction } from "@/types/transactions";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";

type Props = {
  transaction: Transaction;
};

export default function TransactionListRow({ transaction }: Props) {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return (
    <TouchableHighlight
      onPress={() => alert(`You clicked on ${transaction.description}`)}
      underlayColor={Colors[theme].background}
      style={styles.containerButton}
    >
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color={Colors[theme].tint}
            />
          </View>
          <View>
            <ThemedText style={styles.description}>
              {transaction.description}
            </ThemedText>
            <ThemedText style={styles.category}>
              {transaction.category}
            </ThemedText>
          </View>
        </View>
        <ThemedText>{transaction.amount}</ThemedText>
      </View>
    </TouchableHighlight>
  );
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    containerButton: {
      margin: -10,
      padding: 10,
      borderRadius: 10,
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // margin: -10,
      // padding: 10,

      // borderWidth: 1,
      // borderColor: "white",
      // borderStyle: "solid",
    },
    detailsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    iconContainer: {
      backgroundColor: Colors[theme].card,
      padding: 5,
      borderRadius: 5,
    },
    description: {
      fontWeight: "bold",
    },
    category: {
      opacity: 0.5,
    },
  });
};
