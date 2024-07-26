import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import styles from "../style";

const Testimonials = () => (
  <View style={[styles.paddingY, styles.flexCenter, localStyles.container]}>
    <View style={localStyles.gradientBackground} />

    <View style={[localStyles.headerContainer, styles.flexCenter]}>
      <Text style={localStyles.heading2}>
        Testimonials
      </Text>
      <View style={localStyles.paragraphContainer}>
        <Text style={[styles.paragraph, localStyles.paragraph]}>
          The notable users below have a lot of good things to say about
          the value of CenShield working and how it helped in their life.
        </Text>
      </View>
    </View>

    <ScrollView contentContainerStyle={localStyles.feedbackContainer}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </ScrollView>
  </View>
);

const localStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "relative",
    // backgroundColor: "rgba(12, 11, 12, 0.77)",
  },
  gradientBackground: {
    position: "absolute",
    zIndex: 0,
    width: "60%",
    height: "60%",
    right: "-50%",
    borderRadius: 1000,
    backgroundColor: "#56CCF2", 
    bottom: 40,
  },
  headerContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 16,
    zIndex: 1,
  },
  paragraphContainer: {
    width: "100%",
    marginTop: 6,
    maxWidth: 450,
  },
  paragraph: {
    textAlign: "left",
  },
  feedbackContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  heading2: {
    fontSize: 36,
    color: "#424042",
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 18,
    // color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    marginTop: 10,
    maxWidth: 470,
  },
});

export default Testimonials;
