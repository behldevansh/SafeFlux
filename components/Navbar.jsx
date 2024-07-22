import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logo, menu, close } from "../assets"; 
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();

  const handleNavigation = (nav) => {
    setActive(nav.title);
    setToggle(false);
    navigation.navigate(nav.title);
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.navLinksContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {navLinks.map((nav) => (
            <TouchableOpacity
              key={nav.id}
              style={[
                styles.navLink,
                active === nav.title && styles.navLinkActive,
                nav.id === "try" && styles.navLinkTry,
                nav.id === "output" && styles.navLinkOutput,
              ]}
              onPress={() => handleNavigation(nav)}
            >
              <Text
                style={[
                  styles.navLinkText,
                  active === nav.title
                    ? styles.navLinkTextActive
                    : styles.navLinkTextInactive,
                ]}
              >
                {nav.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity onPress={() => setToggle(!toggle)} style={styles.menuIcon}>
        <Image source={toggle ? close : menu} style={styles.menuImage} />
      </TouchableOpacity>

      {toggle && (
        <View style={styles.sidebar}>
          {navLinks.map((nav) => (
            <TouchableOpacity
              key={nav.id}
              style={[
                styles.sidebarLink,
                active === nav.title && styles.navLinkActive,
                nav.id === "try" && styles.navLinkTry,
                nav.id === "output" && styles.navLinkOutput,
              ]}
              onPress={() => handleNavigation(nav)}
            >
              <Text
                style={[
                  styles.navLinkText,
                  active === nav.title
                    ? styles.navLinkTextActive
                    : styles.navLinkTextInactive,
                ]}
              >
                {nav.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(12, 11, 12, 0.77)",
    position: "absolute",
    top: 0,
    zIndex: 50,
  },
  logo: {
    width: 220,
    height: 60,
  },
  navLinksContainer: {
    display: "none",
    flexDirection: "row",
    '@media (min-width: 640px)': {
      display: "flex",
    },
  },
  navLink: {
    marginRight: 10,
  },
  navLinkActive: {
    borderBottomWidth: 2,
    borderColor: "white",
  },
  navLinkTry: {
    backgroundColor: "red",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 20,
    shadowOpacity: 0.8,
    transform: [{ scale: 1.05 }],
  },
  navLinkOutput: {
    backgroundColor: "green",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 20,
    shadowOpacity: 0.8,
    transform: [{ scale: 1.05 }],
  },
  navLinkText: {
    fontSize: 20,
  },
  navLinkTextActive: {
    color: "white",
  },
  navLinkTextInactive: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  menuIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40, 
    height: 40, 
  },
  menuImage: {
    width: 28,
    height: 28,
    tintColor: "white",
  },
  sidebar: {
    padding: 6,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    position: "absolute",
    top: 70, 
    right: 0,
    marginHorizontal: 4,
    marginVertical: 2,
    minWidth: 140,
    borderRadius: 20,
  },
  sidebarLink: {
    marginBottom: 4,
  },
});

export default Navbar;
