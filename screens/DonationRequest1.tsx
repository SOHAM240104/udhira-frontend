import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const DonationRequest1 = () => {
  return (
    <View style={styles.donationRequest}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow1.png")}
      />
      <Text style={[styles.createARequest, styles.requestTypo]}>
        Create A Request
      </Text>
      <View style={[styles.donationRequestChild, styles.donationShadowBox]} />
      <View style={[styles.donationRequestItem, styles.donationShadowBox]} />
      <View style={[styles.donationRequestInner, styles.donationShadowBox]} />
      <View style={[styles.rectangleView, styles.donationShadowBox]} />
      <View style={styles.donationRequestChild1} />
      <Text style={[styles.lastDonation, styles.mobileTypo]}>
        Last Donation
      </Text>
      <Text style={[styles.bloodType, styles.addANoteTypo]}>Blood Type</Text>
      <Text style={[styles.mobile, styles.mobileTypo]}>Mobile</Text>
      <Text style={[styles.addANote, styles.addANoteTypo]}>Add a note</Text>
      <Button
        style={styles.rectangleButton}
        mode="contained"
        contentStyle={styles.rectangleButtonBtn}
      >
        Request
      </Button>
      <Text style={[styles.request, styles.requestTypo]}>Request</Text>
      <Image
        style={[styles.carbonlocationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/carbonlocation.png")}
      />
      <Image
        style={styles.lacityIcon}
        contentFit="cover"
        source={require("../assets/lacity.png")}
      />
      <Image
        style={[styles.notodropOfBloodIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/notodropofblood1.png")}
      />
      <Image
        style={[styles.fluentnote20RegularIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fluentnote20regular.png")}
      />
      <Image
        style={[styles.carbonphoneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/carbonphone1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 10,
    height: 56,
    width: 186,
  },
  requestTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  donationShadowBox: {
    height: 60,
    width: 374,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(101, 101, 101, 0.1)",
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  mobileTypo: {
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_lg,
    left: 91,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    position: "absolute",
  },
  addANoteTypo: {
    width: 104,
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_lg,
    left: 91,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 42,
    position: "absolute",
    overflow: "hidden",
  },
  backArrowIcon: {
    top: 38,
    width: 44,
    height: 44,
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
  },
  createARequest: {
    top: 43,
    left: 103,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_300,
    width: 208,
    height: 34,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donationRequestChild: {
    top: 205,
  },
  donationRequestItem: {
    top: 290,
  },
  donationRequestInner: {
    top: 375,
  },
  rectangleView: {
    top: 460,
  },
  donationRequestChild1: {
    top: 545,
    height: 120,
    width: 374,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(101, 101, 101, 0.1)",
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  lastDonation: {
    top: 307,
    width: 150,
  },
  bloodType: {
    top: 392,
  },
  mobile: {
    top: 477,
    width: 152,
  },
  addANote: {
    top: 562,
  },
  rectangleButton: {
    top: 733,
    left: 116,
    position: "absolute",
  },
  request: {
    top: 740,
    left: 157,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    lineHeight: 39,
    color: Color.white,
    width: 105,
    height: 42,
  },
  carbonlocationIcon: {
    top: 223,
  },
  lacityIcon: {
    top: 309,
    left: 43,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  notodropOfBloodIcon: {
    top: 393,
  },
  fluentnote20RegularIcon: {
    top: 566,
  },
  carbonphoneIcon: {
    top: 481,
  },
  donationRequest: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default DonationRequest1;
