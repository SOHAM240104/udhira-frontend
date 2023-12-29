import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileFormContainer = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Text style={[styles.profile, styles.aTypo]}>Profile</Text>
        <Image
          style={styles.feathereditIcon}
          contentFit="cover"
          source={require("../assets/featheredit.png")}
        />
        <View style={styles.backArrow}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/back-arrow1.png")}
          />
          <View style={styles.backArrowChild} />
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.backArrow}>
          <View style={styles.frameShadowBox} />
          <View style={styles.frameItem} />
          <View style={styles.frameShadowBox} />
        </View>
        <View style={[styles.aParent, styles.parentLayout]}>
          <Text style={[styles.a, styles.aTypo]}>A+</Text>
          <Text style={styles.bloodType}>Blood Type</Text>
        </View>
        <View style={[styles.parent, styles.parentLayout]}>
          <Text style={[styles.a, styles.aTypo]}>05</Text>
          <Text style={styles.bloodType}>Donated</Text>
        </View>
        <View style={[styles.group, styles.parentLayout]}>
          <Text style={[styles.a, styles.aTypo]}>02</Text>
          <Text style={styles.bloodType}>Requested</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aTypo: {
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  parentLayout: {
    height: 74,
    top: 14,
    width: 80,
    position: "absolute",
    alignItems: "center",
  },
  profile: {
    top: 5,
    left: 93,
    fontSize: FontSize.size_3xl,
    letterSpacing: 0.4,
    width: 189,
    height: 34,
    position: "absolute",
  },
  feathereditIcon: {
    top: 10,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    width: 44,
    borderRadius: Border.br_8xs,
    height: 44,
    overflow: "hidden",
  },
  backArrowChild: {
    backgroundColor: Color.white,
    width: 44,
    borderRadius: Border.br_8xs,
    height: 44,
  },
  backArrow: {
    top: 0,
    left: 0,
    width: 374,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
  },
  frame1: {
    height: 44,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameShadowBox: {
    width: 102,
    shadowOpacity: 1,
    elevation: 47,
    shadowRadius: 47,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(83, 83, 83, 0.15)",
    borderRadius: Border.br_3xs,
    height: 102,
    backgroundColor: Color.white,
  },
  frameItem: {
    width: 100,
    shadowOpacity: 1,
    elevation: 47,
    shadowRadius: 47,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(83, 83, 83, 0.15)",
    borderRadius: Border.br_3xs,
    height: 102,
    backgroundColor: Color.white,
  },
  a: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.3,
    lineHeight: 48,
    width: 50,
    height: 43,
  },
  bloodType: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    lineHeight: 23,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    height: 21,
    marginTop: 10,
    width: 80,
    textAlign: "center",
  },
  aParent: {
    left: 10,
  },
  parent: {
    left: 147,
  },
  group: {
    left: 284,
  },
  frameParent: {
    marginTop: 364,
    height: 102,
    alignSelf: "stretch",
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default ProfileFormContainer;
