import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const MoreContainer = () => {
  return (
    <View style={styles.moreParent}>
      <Text style={[styles.more, styles.moreTypo]}>More</Text>
      <View style={[styles.aboutUsParent, styles.parentPosition]}>
        <Text style={[styles.aboutUs, styles.moreTypo]}>About us</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
      </View>
      <View style={[styles.privacyPolicyParent, styles.parentPosition]}>
        <Text style={[styles.aboutUs, styles.moreTypo]}>Privacy policy</Text>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-23.png")}
        />
      </View>
      <View style={[styles.termsAndConditionsParent, styles.parentPosition]}>
        <Text style={[styles.aboutUs, styles.moreTypo]}>
          Terms and conditions
        </Text>
        <Image
          style={[styles.frameInner, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-231.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moreTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_lg,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    width: 329,
    position: "absolute",
  },
  framePosition: {
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
    position: "absolute",
  },
  more: {
    color: Color.colorDarkgray_200,
  },
  aboutUs: {
    color: Color.systemBlack,
  },
  frameChild: {
    height: "47.09%",
    top: "53.1%",
    bottom: "-0.19%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
    position: "absolute",
  },
  aboutUsParent: {
    top: 54,
    height: 53,
  },
  frameItem: {
    height: "44.11%",
    top: "55.89%",
  },
  privacyPolicyParent: {
    top: 109,
    height: 57,
  },
  frameInner: {
    height: "42.26%",
    top: "57.74%",
  },
  termsAndConditionsParent: {
    top: 165,
    height: 59,
  },
  moreParent: {
    top: 598,
    left: 41,
    height: 224,
    width: 329,
    position: "absolute",
  },
});

export default MoreContainer;
