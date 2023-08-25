import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { mainStyles } from "../styles/style";
import Button from "./Button";

type ItemProps = {
  title?: string;
  urlToImage?: string | null;
  content?: string;
  description?: string;
  index?: number;
  navigation?: any;
};

const Item = ({
  title,
  urlToImage,
  content,
  description,
  navigation,
  index,
}: ItemProps) => {
  const [value, setValue] = useState(index);

  const showDetailsPage = () => {
    navigation.navigate("Details", {
      item: { title, urlToImage, content, description, index },
    });
  };

  useEffect(() => {
    setValue(index);
  }, [index]);

  return (
    <View style={mainStyles.container}>
      <View style={[styles.item, { gap: 5 }]}>
        {urlToImage && (
          <Animated.Image
            sharedTransitionTag={`image-${value}`}
            style={styles.image}
            source={{ uri: urlToImage }}
          />
        )}
        <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
          {title}
        </Text>
        <Button
          text="Read more..."
          func={showDetailsPage}
          textColor="#fff"
          backgroundColor="#e74c3c"
          iconColor="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 220,
    borderRadius: 5,
  },
  text: {
    color: "#2c3e50",
    fontSize: 12,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default Item;
