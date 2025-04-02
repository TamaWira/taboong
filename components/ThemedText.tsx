import { Colors } from "@/constants/Colors";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, TextStyle, useColorScheme } from "react-native";

type Props = PropsWithChildren<{
  style?: TextStyle;
}>;

export default function ThemedText({ children, style }: Props) {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return <Text style={[styles.text, style]}>{children}</Text>;
}

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    text: {
      color: Colors[theme].text,
    },
  });
};
