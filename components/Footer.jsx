import React from "react";
import { View, Text, Image, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => {
  const isEmail = (link) => link.startsWith("mailto:");

  return (
    <View style={[styles.flexCenter, styles.paddingY, localStyles.container]}>
      <View style={[styles.flexStart, localStyles.logoContainer]}>
        <TouchableOpacity onPress={() => scrollToHome()}>
          <Image source={logo} style={localStyles.logo} />
        </TouchableOpacity>
        <Text style={[styles.paragraph, localStyles.description]}>
        </Text>
      </View>

      <View style={localStyles.linksContainer}>
        {footerLinks.map((footerlink) => (
          <View key={footerlink.title} style={localStyles.linkSection}>
            <Text style={localStyles.linkTitle}>{footerlink.title}</Text>
            {footerlink.links.map((link, index) => (
              <TouchableOpacity key={link.name} onPress={() => Linking.openURL(isEmail(link.link) ? `mailto:${link.link}` : link.link)}>
                <Text style={localStyles.linkText}>{link.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={localStyles.footerBottom}>
        <Text style={localStyles.footerText}>
          Copyright Ⓒ 2024 Palanam Technology. All Rights Reserved.
        </Text>
        <View style={localStyles.socialMediaContainer}>
          {socialMedia.map((social, index) => (
            <TouchableOpacity key={social.id} onPress={() => Linking.openURL(social.link)}>
              <Image source={social.icon} style={localStyles.socialIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#1C1C1E",
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  description: {
    marginTop: 4,
    color: '#B0B0B0',
    maxWidth: 312,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  linkSection: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  linkTitle: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: "white",
    marginBottom: 8,
  },
  linkText: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#B0B0B0",
    marginBottom: 8,
  },
  footerBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#3F3E45",
  },
  footerText: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  socialMediaContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginHorizontal: 8,
  },
});

export default Footer;
