import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { mainStyles } from "../styles/style";

const Button = ({
  text,
  func,
  textColor,
  backgroundColor,
  icon,
  iconColor,
}: any) => {
  return (
    <TouchableOpacity onPress={func}>
      <View
        style={[
          mainStyles.rounded,
          styles().button,
          styles(backgroundColor).backgroundColor,
        ]}
      >
        {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
        {text && (
          <Text style={[mainStyles.textNormal, styles(textColor).textColor]}>
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = (value?: string) =>
  StyleSheet.create({
    backgroundColor: {
      backgroundColor: value,
    },
    button: {
      paddingHorizontal: 25,
      paddingVertical: 10,
      alignItems: "center",
    },
    textColor: {
      color: value,
    },
  });

export default Button;
