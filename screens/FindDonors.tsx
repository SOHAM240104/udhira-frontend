import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DonorCardForm from "../components/DonorCardForm";
import DonorCard1 from "../components/DonorCard1";
import DonorContainer from "../components/DonorContainer";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const FindDonors = () => {
  return (
    <View style={styles.findDonors}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow1.png")}
      />
      <Text style={[styles.findDonors1, styles.searchTypo]}>Find Donors</Text>
      <DonorCardForm
        imageIconUrl={require("../assets/rectangle-24.png")}
        bloodType="A+"
        personImageUrl="Soham"
        itemCode={require("../assets/mappin4.png")}
        locationAddress="Mohammedpur, Dhaka"
        bloodFrameTop={190}
        frameViewLeft={5}
        frameViewWidth={26}
        frameViewTop={17}
        mohammedpurDhakaWidth={129}
        mohammedpurDhakaHeight={20}
      />
      <DonorCardForm
        imageIconUrl={require("../assets/rectangle-246.png")}
        bloodType="AB+"
        personImageUrl="Taylor swift"
        itemCode={require("../assets/mappin4.png")}
        locationAddress="Mirpur 10, Dhaka"
        bloodFrameTop={326}
        frameViewLeft={1}
        frameViewWidth={34}
        frameViewTop={17}
        mohammedpurDhakaWidth="unset"
        mohammedpurDhakaHeight="unset"
        mohammedpurDhakaAlignSelf="stretch"
      />
      <DonorCardForm
        imageIconUrl={require("../assets/rectangle-242.png")}
        bloodType="B-"
        personImageUrl="Ariana Grande"
        itemCode={require("../assets/mappin5.png")}
        locationAddress="Chittagong"
        bloodFrameTop={462}
        frameViewLeft={5}
        frameViewWidth={26}
        frameViewTop={18}
        mohammedpurDhakaWidth={129}
        mohammedpurDhakaHeight={20}
        mohammedpurDhakaAlignSelf="unset"
      />
      <DonorCard1
        userImageUrl={require("../assets/rectangle-243.png")}
        userDescription="Swetha"
        locationAddress="Lakshmipur"
        bloodType="O+"
        propTop={598}
        propWidth={115}
        propHeight={20}
      />
      <DonorCard1
        userImageUrl={require("../assets/rectangle-244.png")}
        userDescription="Single guy"
        locationAddress="Mohammedpur, Dhaka"
        bloodType="A+"
        propTop={734}
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
      />
      <DonorContainer />
      <View style={[styles.findDonorsChild, styles.findLayout]} />
      <View style={[styles.findDonorsItem, styles.findLayout]} />
      <Image
        style={styles.findDonorsInner}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>{`Search `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    left: 113,
    position: "absolute",
  },
  findLayout: {
    height: 48,
    top: 106,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  backArrowIcon: {
    top: 38,
    width: 44,
    height: 44,
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
  },
  findDonors1: {
    top: 43,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_300,
    textAlign: "center",
    width: 189,
    height: 34,
  },
  findDonorsChild: {
    shadowColor: "rgba(47, 47, 47, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 315,
    left: 20,
    top: 106,
    backgroundColor: Color.white,
  },
  findDonorsItem: {
    left: 346,
    backgroundColor: Color.colorCrimson_100,
    width: 48,
  },
  findDonorsInner: {
    top: 114,
    left: 359,
    width: 22,
    height: 32,
    position: "absolute",
  },
  searchIcon: {
    top: 118,
    left: 57,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 116,
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray_100,
    textAlign: "left",
    width: 117,
    height: 28,
  },
  findDonors: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default FindDonors;
