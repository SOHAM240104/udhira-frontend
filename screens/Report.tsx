import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Report = () => {
  return (
    <View style={styles.report}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow1.png")}
      />
      <Text style={[styles.report1, styles.reportTypo]}>Report</Text>
      <Image
        style={styles.reportChild}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
        <View style={[styles.rectangleView, styles.frameInnerLayout]} />
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
      </View>
      <View style={[styles.mmollParent, styles.parentFlexBox]}>
        <Text style={[styles.mmoll, styles.mmollTypo]}>
          <Text style={styles.text}>{`6 `}</Text>
          <Text style={styles.mmoll1}>mmol/L</Text>
        </Text>
        <Text style={[styles.glucose, styles.glucoseTypo]}>Glucose</Text>
      </View>
      <View style={[styles.mmollGroup, styles.mmollLayout]}>
        <Text style={[styles.mmoll2, styles.mmollTypo]}>
          <Text style={styles.text}>{`6.2 `}</Text>
          <Text style={styles.mmoll1}>mmol/L</Text>
        </Text>
        <Text style={[styles.cholesterol, styles.glucoseTypo]}>
          Cholesterol
        </Text>
      </View>
      <View style={[styles.mmollContainer, styles.blParentPosition]}>
        <Text style={[styles.mmoll, styles.mmollTypo]}>
          <Text style={styles.text}>{`12 `}</Text>
          <Text style={styles.mmoll1}>mmol/L</Text>
        </Text>
        <Text style={[styles.glucose, styles.glucoseTypo]}>Bilirubin</Text>
      </View>
      <View style={[styles.mllParent, styles.myReportFlexBox]}>
        <Text style={[styles.mll, styles.mmollTypo]}>
          <Text style={styles.text}>{`3.6 `}</Text>
          <Text style={styles.mmoll1}>ml/L</Text>
        </Text>
        <Text style={[styles.glucose, styles.glucoseTypo]}>RBC</Text>
      </View>
      <View style={[styles.flParent, styles.parentPosition]}>
        <Text style={[styles.mmoll, styles.mmollTypo]}>
          <Text style={styles.text}>{`102 `}</Text>
          <Text style={styles.mmoll1}>fl</Text>
        </Text>
        <Text style={[styles.glucose, styles.glucoseTypo]}>MCV</Text>
      </View>
      <View style={[styles.blParent, styles.parentPosition]}>
        <Text style={[styles.mmoll, styles.mmollTypo]}>
          <Text style={styles.text}>{`276 `}</Text>
          <Text style={styles.mmoll1}>bL</Text>
        </Text>
        <Text style={[styles.glucose, styles.glucoseTypo]}>Platelets</Text>
      </View>
      <View style={[styles.myReport, styles.myReportFlexBox]}>
        <Text style={[styles.myReport1, styles.reportTypo]}>My Report</Text>
      </View>
      <View style={styles.location}>
        <Text style={[styles.reseachCenter, styles.reseachCenterTypo]}>
          Reseach Center
        </Text>
        <Text style={[styles.madrasMedicalCollege, styles.reseachCenterTypo]}>
          Madras Medical College, Chennai
        </Text>
        <Image
          style={styles.mapPinIcon}
          contentFit="cover"
          source={require("../assets/mappin2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reportTypo: {
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
  },
  frameLayout: {
    height: 87,
    borderRadius: Border.br_3xs,
    width: 116,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameInnerLayout: {
    width: 114,
    left: 130,
    height: 87,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChildLayout: {
    left: 258,
    height: 87,
    width: 116,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  parentFlexBox: {
    alignItems: "center",
    width: 86,
    position: "absolute",
  },
  mmollTypo: {
    height: 31,
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  glucoseTypo: {
    marginTop: 11,
    height: 25,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  mmollLayout: {
    height: 67,
    top: 533,
  },
  blParentPosition: {
    left: 293,
    alignItems: "center",
    width: 86,
    position: "absolute",
  },
  myReportFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  parentPosition: {
    top: 646,
    height: 67,
  },
  reseachCenterTypo: {
    height: 20,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  backArrowIcon: {
    top: 38,
    borderRadius: Border.br_8xs,
    width: 44,
    height: 44,
    left: 20,
    position: "absolute",
  },
  report1: {
    top: 43,
    width: 189,
    color: Color.colorGray_300,
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
    left: 113,
    position: "absolute",
  },
  reportChild: {
    height: "29.39%",
    width: "66.67%",
    top: "22.99%",
    right: "24.4%",
    bottom: "47.62%",
    left: "8.94%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 0,
  },
  frameItem: {
    top: 114,
  },
  frameInner: {
    top: 0,
  },
  rectangleView: {
    top: 114,
  },
  frameChild1: {
    top: 0,
  },
  frameChild2: {
    top: 114,
  },
  rectangleParent: {
    top: 522,
    shadowColor: "rgba(66, 66, 66, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 374,
    height: 201,
    left: 20,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xl,
  },
  mmoll1: {
    fontSize: FontSize.size_sm,
  },
  mmoll: {
    width: 86,
  },
  glucose: {
    width: 86,
  },
  mmollParent: {
    left: 35,
    height: 67,
    top: 533,
  },
  mmoll2: {
    width: 97,
  },
  cholesterol: {
    width: 100,
  },
  mmollGroup: {
    left: 157,
    justifyContent: "flex-end",
    width: 100,
    position: "absolute",
  },
  mmollContainer: {
    height: 67,
    top: 533,
  },
  mll: {
    width: 101,
  },
  mllParent: {
    left: 28,
    width: 101,
    top: 646,
    height: 67,
  },
  flParent: {
    left: 164,
    alignItems: "center",
    width: 86,
    position: "absolute",
  },
  blParent: {
    left: 293,
    alignItems: "center",
    width: 86,
    position: "absolute",
  },
  myReport1: {
    color: Color.white,
    width: 122,
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
  },
  myReport: {
    top: 795,
    borderRadius: Border.br_71xl,
    backgroundColor: Color.colorCrimson_100,
    width: 188,
    left: 113,
    justifyContent: "center",
    height: 44,
  },
  reseachCenter: {
    left: 61,
    width: 116,
    height: 20,
    color: Color.colorGray_100,
    top: 0,
  },
  madrasMedicalCollege: {
    top: 28,
    width: 250,
    height: 20,
    color: Color.colorGray_100,
    left: 0,
  },
  mapPinIcon: {
    top: 1,
    left: 36,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  location: {
    top: 115,
    left: 93,
    height: 48,
    width: 250,
    position: "absolute",
  },
  report: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Report;
