import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DonationContainer = () => {
  return (
    <View style={styles.donationRequest}>
      <Text style={styles.donationRequest1}>Donation Request</Text>
      <View style={styles.donationPost}>
        <Text style={styles.minAgo}>5 Min Ago</Text>
        <View style={styles.name}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
          <Text style={[styles.amirHamza, styles.amirHamzaTypo]}>
            Amir Hamza
          </Text>
        </View>
        <View style={styles.location}>
          <Text style={[styles.location1, styles.name1Typo]}>Location</Text>
          <Text style={[styles.hertfordBritishHospital, styles.amirHamzaTypo]}>
            Hertford British Hospital
          </Text>
        </View>
        <Text style={[styles.donate, styles.bTypo]}>Donate</Text>
        <View style={[styles.bloodFrame, styles.bPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.b, styles.bPosition]}>B+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    height: 20,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  amirHamzaTypo: {
    marginTop: 2,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bPosition: {
    top: 20,
    position: "absolute",
  },
  donationRequest1: {
    fontSize: FontSize.size_mid,
    letterSpacing: 1.2,
    width: 203,
    height: 28,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  minAgo: {
    top: 116,
    left: 24,
    fontSize: FontSize.size_smi,
    height: 20,
    width: 73,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  name1: {
    width: 63,
  },
  amirHamza: {
    width: 115,
    height: 20,
  },
  name: {
    top: 10,
    left: 26,
    height: 42,
    width: 115,
    position: "absolute",
  },
  location1: {
    width: 71,
  },
  hertfordBritishHospital: {
    alignSelf: "stretch",
  },
  location: {
    top: 60,
    left: 25,
    width: 210,
    position: "absolute",
  },
  donate: {
    top: 112,
    left: 285,
    fontSize: FontSize.size_lg,
    color: Color.colorCrimson_100,
    letterSpacing: 0.8,
    textAlign: "center",
    width: 73,
    height: 28,
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  b: {
    left: 3,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.9,
    color: Color.white,
    width: 35,
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bloodFrame: {
    left: 320,
    width: 38,
    height: 55,
  },
  donationPost: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(30, 30, 30, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    height: 146,
    marginTop: 16,
    alignSelf: "stretch",
  },
  donationRequest: {
    top: 586,
    left: 0,
    width: 374,
    position: "absolute",
  },
});

export default DonationContainer;
