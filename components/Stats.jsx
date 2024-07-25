import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { discount, hero } from "../assets"; // Ensure these assets are compatible with React Native

const { width, height } = Dimensions.get("window");

const Hero = () => {
  return (
    <View style={localStyles.heroContainer}>
      <View style={localStyles.contentContainer}>
        <View style={localStyles.headerContainer}>
          <Text style={localStyles.headerText}>
            Billions {" "}
            <Text style={localStyles.gradientText}>of Unsafe Videos</Text>
          </Text>
          <Text style={localStyles.headerText}>
            1 {" "}
            <Text style={localStyles.gradientText}>Solution</Text>
          </Text>
          <Text style={localStyles.headerText}>
            Cen
            <Text style={localStyles.gradientText}>Shield</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  heroContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 5,
    // backgroundColor: "rgba(12, 11, 12, 0.77)",
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 36,
    color: "#424042",
    fontWeight: "bold",
    textAlign: "center",
  },
  gradientText: {
    color: "#2192a6", 
  },
  paragraph: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    marginTop: 10,
    maxWidth: 470,
  },
  heroImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  heroImage: {
    width: width * 0.8,
    height: height * 0.4,
  },
});

export default Hero;
