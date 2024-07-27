import React, { useRef, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated, Dimensions } from "react-native";
import { fb, dm, vimeo, yt } from "../assets"; 
import styles from "../style"; 
const { width: windowWidth } = Dimensions.get("window");

const images = [fb, dm, yt, vimeo, fb, dm, yt, vimeo, fb, dm, yt, vimeo];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -windowWidth * images.length / 2,
        duration: 20000, 
        useNativeDriver: true,
      })
    ).start();
  }, [scrollX]);

  return (
    <>
      <View style={[styles.marginY, localStyles.container]}>
        <View style={localStyles.header}>
          <Text style={localStyles.heading2}>Current Supported Platform</Text>
        </View>
      </View>
      <View style={localStyles.slider}>
        <Animated.View
          style={[
            localStyles.slideTrack,
            {
              width: windowWidth * images.length,
              transform: [{ translateX: scrollX }],
            },
          ]}
        >
          {images.map((source, index) => (
            <View key={index} style={localStyles.slide}>
              <Image source={source} style={localStyles.image} />
            </View>
          ))}
        </Animated.View>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
 heroContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "#1C1C1E",
  },
  container: {
    // backgroundColor: "#1F1F1F",
    borderRadius: 20,
    paddingVertical: 20,
    textAlign: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  heading2: {
    fontSize: 36,
    color: "#424042",
    fontWeight: "bold",
    textAlign: "center",
  },
  slider: {
    height: 110,
    overflow: "hidden",
  },
  slideTrack: {
    flexDirection: "row",
  },
  slide: {
    height: 110,
    width: 250,
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 250,
    resizeMode: "contain",
  },
});

export default Carousel;
