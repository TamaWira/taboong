import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export default function TabsLayout() {
  const theme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        headerStyle: {
          backgroundColor: Colors[theme].background,
        },
        headerShadowVisible: false,
        headerTintColor: Colors[theme].highlight,
        tabBarStyle: {
          backgroundColor: Colors[theme].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bar-chart" : "bar-chart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="squared-plus" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "pie-chart" : "pie-chart-outline"}
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
