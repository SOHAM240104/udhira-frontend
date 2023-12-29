import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DonationPostContainer from "../components/DonationPostContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DonationRequest = () => {
  return (
    <View style={[styles.donationRequest, styles.vectorIconLayout]}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow1.png")}
      />
      <Text style={[styles.donationRequest1, styles.bTypo]}>
        Donation Request
      </Text>
      <DonationPostContainer
        timestamp="5 Min Ago"
        personName="Syed hussain"
        hospitalName="Hertford British Hospital"
        nameTop={110}
      />
      <DonationPostContainer
        timestamp="16 Min Ago"
        personName="Soham"
        hospitalName="Apollo Hospital"
        nameTop={276}
      />
      <DonationPostContainer
        timestamp="45 Min Ago"
        personName="shwetha"
        hospitalName="Square Hospital"
        nameTop={442}
      />
      <View style={[styles.donationPost, styles.donationPostLayout]}>
        <Text style={styles.minAgo}>59 Min Ago</Text>
        <View style={styles.name}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
          <Text style={[styles.taylorSwift, styles.taylorSwiftTypo]}>
            Taylor swift
          </Text>
        </View>
        <View style={styles.location}>
          <Text style={[styles.location1, styles.name1Typo]}>Location</Text>
          <Text style={[styles.popularHospital, styles.taylorSwiftTypo]}>
            Popular Hospital
          </Text>
        </View>
        <Text style={styles.donate}>Donate</Text>
        <View style={styles.bloodFrame}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.b, styles.bTypo]}>B+</Text>
        </View>
      </View>
      <Image
        style={[styles.navigationBarIcon, styles.donationPostLayout]}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  bTypo: {
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  donationPostLayout: {
    width: 374,
    position: "absolute",
  },
  name1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    height: 20,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  taylorSwiftTypo: {
    marginTop: 2,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  backArrowIcon: {
    top: 38,
    borderRadius: Border.br_8xs,
    width: 44,
    height: 44,
    left: 20,
    position: "absolute",
  },
  donationRequest1: {
    top: 43,
    left: 113,
    letterSpacing: 0.4,
    width: 222,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
  },
  minAgo: {
    top: 109,
    left: 32,
    fontSize: FontSize.size_smi,
    height: 20,
    width: 73,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  name1: {
    width: 63,
  },
  taylorSwift: {
    width: 115,
    height: 20,
  },
  name: {
    top: 3,
    left: 34,
    height: 42,
    width: 115,
    position: "absolute",
  },
  location1: {
    width: 71,
  },
  popularHospital: {
    alignSelf: "stretch",
  },
  location: {
    top: 53,
    left: 33,
    width: 210,
    position: "absolute",
  },
  donate: {
    top: 105,
    left: 293,
    fontSize: FontSize.size_lg,
    color: Color.colorCrimson_100,
    height: 28,
    letterSpacing: 0.8,
    width: 73,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  b: {
    top: 20,
    left: 3,
    letterSpacing: -1.9,
    color: Color.white,
    width: 35,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
  },
  bloodFrame: {
    top: 13,
    left: 328,
    width: 38,
    height: 55,
    position: "absolute",
  },
  donationPost: {
    top: 615,
    left: 12,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(66, 66, 66, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    height: 146,
    backgroundColor: Color.white,
  },
  navigationBarIcon: {
    top: 807,
    height: 79,
    left: 20,
  },
  donationRequest: {
    flex: 1,
    height: 896,
    backgroundColor: Color.white,
  },
});

export default DonationRequest;
