import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

type DonationPostContainerType = {
  timestamp?: string;
  personName?: string;
  hospitalName?: string;

  /** Style props */
  nameTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DonationPostContainer = ({
  timestamp,
  personName,
  hospitalName,
  nameTop,
}: DonationPostContainerType) => {
  const donationPostStyle = useMemo(() => {
    return {
      ...getStyleValue("top", nameTop),
    };
  }, [nameTop]);

  return (
    <View style={[styles.donationPost, donationPostStyle]}>
      <Text style={styles.minAgo}>{timestamp}</Text>
      <View style={styles.name}>
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        <Text style={[styles.syedHussain, styles.syedHussainTypo]}>
          {personName}
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={[styles.location1, styles.name1Typo]}>Location</Text>
        <Text style={[styles.hertfordBritishHospital, styles.syedHussainTypo]}>
          {hospitalName}
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
  );
};

const styles = StyleSheet.create({
  name1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    height: 20,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  syedHussainTypo: {
    marginTop: 2,
    color: Color.colorGray_300,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
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
  minAgo: {
    top: 116,
    left: 24,
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
  syedHussain: {
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
    height: 28,
    letterSpacing: 0.8,
    textAlign: "center",
    width: 73,
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
    top: 110,
    left: 20,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(66, 66, 66, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 374,
    height: 146,
    position: "absolute",
  },
});

export default DonationPostContainer;
