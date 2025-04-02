import { Colors } from "@/constants/Colors";
import React, { PropsWithChildren } from "react";
import { View, ViewStyle, StyleSheet, useColorScheme } from "react-native";

type Props = PropsWithChildren<{
  style?: ViewStyle;
}>;

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: Colors[theme].highlight,
      borderRadius: 10,
      width: "100%",
      borderWidth: 1.3,
      borderColor: "#00000010", // 50% opacity black
    },
  });
};

export default function Card({ style, children }: Props) {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return <View style={[styles.container, style]}>{children}</View>;
}
