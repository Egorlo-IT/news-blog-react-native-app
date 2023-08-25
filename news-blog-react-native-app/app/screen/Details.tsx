import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Animated from "react-native-reanimated";

import Button from "../components/Button";
import { mainStyles } from "../styles/style";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Details = ({ navigation, route }: any) => {
  const { title, urlToImage, content, index } = route.params.item;
  const [value, setValue] = useState(index);

  useEffect(() => {
    console.log("Details index: ", index);

    setValue(index);
  }, [index]);

  return (
    <SafeAreaView style={[mainStyles.container, styles.container]}>
      <ScrollView>
        <Text
          style={[
            mainStyles.textLight,
            mainStyles.textLarge,
            { textAlign: "center", marginBottom: 20, color: "#000" },
          ]}
        >
          {title}
        </Text>
        {urlToImage && (
          <View style={[styles.item, { gap: 5 }]}>
            <Animated.Image
              sharedTransitionTag={`image-${value}`}
              style={styles.image}
              source={{ uri: urlToImage }}
            />
          </View>
        )}
        <Text
          style={[
            mainStyles.textDark,
            mainStyles.textNormal,
            { textAlign: "left", padding: 10 },
          ]}
        >
          {content}
        </Text>
        <View style={styles.btnGroup}>
          <Button
            text=""
            func={() => {
              navigation.navigate("Home");
            }}
            textColor="black"
            backgroundColor="#2980b9"
            icon={faHouse}
            iconColor="#fff"
          />
          <Button
            text=""
            func={() => {
              navigation.navigate("News");
            }}
            textColor="black"
            backgroundColor="#e74c3c"
            icon={faNewspaper}
            iconColor="#fff"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    backgroundColor: "#f5f5f5",
    paddingVertical: 40,
  },
  item: {
    height: 300,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  btnGroup: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
    marginTop: 30,
  },
});

export default Details;
