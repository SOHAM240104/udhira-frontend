import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Onboarding4 = () => {
  return (
    <View style={styles.onboarding4}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Image
            style={styles.bloodTestbroIcon}
            contentFit="cover"
            source={require("../assets/bloodtestbro.png")}
          />
          <View style={[styles.findBloodDonorsParent, styles.frameFlexBox]}>
            <Text style={[styles.findBloodDonors, styles.findBloodDonorsTypo]}>
              Find Blood Donors
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.findBloodDonorsTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              tristique tristique quam in.
            </Text>
          </View>
        </View>
        <ScrollView
          style={styles.rectangleParent}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameChild} />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </ScrollView>
      </View>
      <Button
        style={[styles.frame2, styles.frameFlexBox]}
        disabled={true}
        uppercase={true}
        mode="text"
        labelStyle={styles.frameBtn}
      >
        Skip
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameBtn: {
    color: "#3a4351",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
  frameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  findBloodDonorsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bloodTestbroIcon: {
    width: 280,
    height: 266,
  },
  findBloodDonors: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_300,
    width: 244,
    height: 39,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_100,
    marginTop: 38,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  findBloodDonorsParent: {
    justifyContent: "center",
    marginTop: 90,
  },
  frame: {
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorCrimson_100,
    width: 45,
    height: 10,
  },
  frameItem: {
    width: 10,
    marginLeft: 16,
    height: 10,
  },
  rectangleParent: {
    maxHeight: 10,
    marginTop: 19,
    height: 10,
    width: "100%",
  },
  frame2: {
    flexDirection: "row",
    marginTop: 146,
    overflow: "hidden",
  },
  onboarding4: {
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "flex-end",
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_25xl,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_25xl,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding4;
