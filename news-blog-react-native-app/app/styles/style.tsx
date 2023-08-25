import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLight: {
    color: "#fff",
  },
  textDark: {
    color: "#2c3e50",
  },
  rounded: {
    borderRadius: 5,
  },
  textNormal: {
    fontSize: 17,
    letterSpacing: 2,
    fontWeight: "400",
  },
  textLarge: {
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: "500",
  },
  textSmall: {
    fontSize: 13,
    letterSpacing: 2,
    fontWeight: "300",
  },
});
