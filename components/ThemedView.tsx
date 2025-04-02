import { Colors } from "@/constants/Colors";
import React, { PropsWithChildren } from "react";
import { StyleSheet, useColorScheme, View, ViewStyle } from "react-native";

type Props = PropsWithChildren<{
  style?: ViewStyle;
}>;

const getStyles = (theme: "dark" | "light") => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].background,
    },
  });
};

export default function ThemedView({ children, style }: Props) {
  const theme = useColorScheme() ?? "light";
  const styles = getStyles(theme);

  return <View style={[styles.container, style]}>{children}</View>;
}
