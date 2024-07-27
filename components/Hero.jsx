import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { discount, hero } from "../assets";

const { width, height } = Dimensions.get("window");

const Hero = () => {
  return (
    <View style={localStyles.heroContainer}>
      <View style={localStyles.contentContainer}>
        <View style={localStyles.headerContainer}>
        

        </View>
      </View>

      <View style={localStyles.heroImageContainer}>
        <Image source={hero} style={localStyles.heroImage} resizeMode="contain" />
      </View>
      <View style={localStyles.contentContainer}>
        <View style={localStyles.headerContainer}>
          <Text style={localStyles.headerText}>
            Welcome to{"\n"}
            <Text style={localStyles.gradientText}>CenShield</Text>
          </Text>
        </View>
        <Text style={localStyles.paragraph}>
          Ensure a safer and cleaner video streaming experience for your children with our advanced content filtering and monitoring solutions.
        </Text>
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
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "#1C1C1E",
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  gradientText: {
    color: "#7cd6de", 
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
