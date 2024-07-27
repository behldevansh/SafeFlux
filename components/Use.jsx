import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { features } from "../constants";
// import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <View style={[styles.featureCard, { marginBottom: index !== features.length - 1 ? 16 : 0 }]}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  </View>
);

const Business = () => (
  <View style={styles.section}>
    <View style={styles.sectionInfo}>
      <Text style={styles.heading}>
        Why use
        {"\n"}
        CenShield?
      </Text>
      <Text style={styles.paragraph}>
        At Palanam, our mission is to ensure a safer and cleaner internet experience for everyone. We provide a platform for reporting and monitoring sensitive content across the web. Join us in our commitment to making the internet a safer place for all.
      </Text>
    </View>

    <View style={styles.sectionImg}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </View>
  </View>
);

export default Business;

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#1C1C1E",
  },
  sectionInfo: {
    marginBottom: 40,
  },
  heading: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#7cd6de", 
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 20,
    textAlign: "center",
  },
  featureCard: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "#2C2C2C",
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
  },
  icon: {
    width: "50%",
    height: "50%",
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#7cd6de", 
    marginBottom: 4,
  },
  content: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
  sectionImg: {
    flexDirection: "column",
  },
});
