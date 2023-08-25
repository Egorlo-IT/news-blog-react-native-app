import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";

import ButtonCustom from "../components/Button";
import { mainStyles } from "../styles/style";
import MyModal from "../components/MyModal";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming,
  withSequence,
} from "react-native-reanimated";

const Home = ({ navigation }: any) => {
  const [show, setModalShow] = useState<boolean>(false);

  const offset1 = useSharedValue(-100);
  const offset2 = useSharedValue(100);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset1.value }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset2.value }],
    };
  });

  const animatedScale = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const animatedStyle4 = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const showModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const showNewsPage = () => {
    navigation.navigate("News");
  };

  useEffect(() => {
    offset1.value = withDelay(
      1000,
      withSpring(0, { damping: 10, mass: 1, stiffness: 200 })
    );
    offset2.value = withDelay(
      1000,
      withSpring(0, { damping: 10, mass: 1, stiffness: 200 })
    );
    scale.value = withSequence(
      withDelay(750, withSpring(1, { damping: 8, mass: 1, stiffness: 900 })),
      withDelay(
        1150,
        withSequence(withTiming(0.8), withTiming(1.5), withTiming(1))
      )
    );
    opacity.value = withTiming(1, { duration: 3000 });
  }, []);

  return (
    <View collapsable={false} style={[mainStyles.container, styles.container]}>
      <MyModal isVisible={show}>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={[mainStyles.textLarge]}>This is Modal window</Text>
          </View>
          <View>
            <ButtonCustom
              text="Close Modal"
              textColor="white"
              backgroundColor="red"
              func={closeModal}
            />
          </View>
        </View>
      </MyModal>

      <Animated.View style={[{ flex: 1 / 3 }, animatedScale]}>
        <Text style={[mainStyles.textLarge, mainStyles.textLight]}>
          Welcome to the application
        </Text>
      </Animated.View>

      <Animated.View style={[animatedStyle1, animatedStyle4, { width: 200 }]}>
        <ButtonCustom
          text="Open Modal"
          textColor="white"
          backgroundColor="#27ae60"
          func={showModal}
        />
      </Animated.View>
      <Animated.View style={[animatedStyle2, animatedStyle4, { width: 200 }]}>
        <ButtonCustom
          text="Open News"
          textColor="white"
          backgroundColor="#e74c3c"
          func={showNewsPage}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default Home;
