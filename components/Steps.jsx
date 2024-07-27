import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { chapters } from "../constants";

const Steps = () => (
  <View style={[styles.paddingY, styles.flexCenter, styles.flexCol, styles.relative]}>
    <View style={[styles.absolute, styles.z0, styles.w60, styles.h60, styles.bottom40, { right: "-50%" }]} />

    <View style={[styles.wFull, styles.flex, styles.justifyBetween, styles.itemsCenter, styles.mdFlexRow, styles.flexCol, styles.smMb16, styles.mb6, styles.relative, styles.z1]}>
      <Text style={styles.heading2}>
        How to use CenShield? <Text style={styles.smBlockHidden} />
      </Text>
      <View style={[styles.wFull, styles.mdMt0, styles.mt6]}>
        <Text style={[styles.paragraph, styles.textLeft, styles.maxW450]}>
          Using CenShield is easy and very straightforward to use. The steps involved are very simple and easy to follow.
        </Text>
      </View>
    </View>

    <ScrollView contentContainerStyle={[styles.flexWrap, styles.justifyCenter, styles.wFull, styles.feedbackContainer, styles.relative, styles.z1]}>
      {chapters.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  paddingY: {
    paddingVertical: 20,
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexCol: {
    flexDirection: "column",
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
  },
  z0: {
    zIndex: 0,
  },
  w60: {
    width: "60%",
  },
  h60: {
    height: "60%",
  },
  blueGradient: {
    backgroundColor: "blue",
    borderRadius: 100,
  },
  bottom40: {
    bottom: 40,
  },
  wFull: {
    width: "100%",
  },
  flex: {
    display: "flex",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  itemsCenter: {
    alignItems: "center",
  },
  mdFlexRow: {
    flexDirection: "row",
  },
  smMb16: {
    marginBottom: 16,
  },
  mb6: {
    marginBottom: 6,
  },
  z1: {
    zIndex: 1,
  },
  heading2: {
    fontSize: 36,
    color: "#2192a6", 
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
  smBlockHidden: {
    display: "none",
  },
  wFull: {
    width: "100%",
  },
  mdMt0: {
    marginTop: 0,
  },
  mt6: {
    marginTop: 6,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "left",
    maxWidth: 450,
  },
  textLeft: {
    textAlign: "left",
  },
  maxW450: {
    maxWidth: 450,
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  feedbackContainer: {
    padding: 10,
  },
});

export default Steps;
