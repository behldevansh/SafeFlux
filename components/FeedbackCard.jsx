import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <View style={styles.feedbackCard}>
    <Image source={quotes} style={styles.quotes} />
    <Text style={styles.content}>
      {content}
    </Text>

    <View style={styles.row}>
      {/* <Image source={{ uri: img }} style={styles.profileImage} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  feedbackCard: {
    justifyContent: "space-between",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
    maxWidth: 370,
    marginRight: 10,
    marginVertical: 5,
    backgroundColor: "#333",
  },
  quotes: {
    width: 42.6,
    height: 27.6,
    resizeMode: "contain",
  },
  content: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    lineHeight: 32.4,
    color: "white", // Changed color to white for the content
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 4,
    flexDirection: "column",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    lineHeight: 32,
    color: "#2192a6", 
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#AAA",
  },
});

export default FeedbackCard;
