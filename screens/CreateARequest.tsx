import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateARequest = () => {
  return (
    <View style={styles.createARequest}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow2.png")}
      />
      <Text style={styles.createARequest1}>Create A Request</Text>
      <View style={[styles.createARequestChild, styles.createShadowBox]} />
      <View style={[styles.createARequestItem, styles.createShadowBox]} />
      <View style={[styles.createARequestInner, styles.createShadowBox]} />
      <View style={[styles.rectangleView, styles.createShadowBox]} />
      <View
        style={[
          styles.createARequestChild1,
          styles.completedpanaParentShadowBox,
        ]}
      />
      <Text style={[styles.city, styles.cityTypo]}>City</Text>
      <Text style={[styles.hospital, styles.cityTypo]}>Hospital</Text>
      <Text style={[styles.bloodType, styles.addANoteTypo]}>Blood Type</Text>
      <Text style={[styles.mobile, styles.cityTypo]}>Mobile</Text>
      <Text style={[styles.addANote, styles.addANoteTypo]}>Add a note</Text>
      <View style={styles.createARequestChild2} />
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
      <View
        style={[
          styles.completedpanaParent,
          styles.completedpanaParentShadowBox,
        ]}
      >
        <Image
          style={styles.completedpanaIcon}
          contentFit="cover"
          source={require("../assets/completedpana.png")}
        />
        <Text style={[styles.bloodIsSuccessfully, styles.requestTypo]}>
          Blood is successfully requested.
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
        <Image
          style={[styles.arrowRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowright.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createShadowBox: {
    height: 60,
    width: 374,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(123, 123, 123, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
  },
  completedpanaParentShadowBox: {
    width: 374,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.white,
    left: 20,
    position: "absolute",
  },
  cityTypo: {
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 91,
    fontSize: FontSize.size_lg,
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
  requestTypo: {
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
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
  createARequest1: {
    top: 43,
    left: 103,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_300,
    width: 208,
    height: 34,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    position: "absolute",
  },
  createARequestChild: {
    top: 205,
  },
  createARequestItem: {
    top: 290,
  },
  createARequestInner: {
    top: 375,
  },
  rectangleView: {
    top: 460,
  },
  createARequestChild1: {
    top: 545,
    height: 120,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(123, 123, 123, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  city: {
    top: 222,
    width: 67,
  },
  hospital: {
    top: 307,
    width: 84,
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
  createARequestChild2: {
    top: 733,
    left: 116,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCrimson_100,
    width: 186,
    height: 56,
    position: "absolute",
  },
  request: {
    top: 740,
    left: 157,
    fontSize: FontSize.size_5xl,
    lineHeight: 39,
    color: Color.white,
    width: 105,
    height: 42,
  },
  carbonlocationIcon: {
    top: 223,
    left: 42,
    width: 24,
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
    left: 42,
    width: 24,
  },
  fluentnote20RegularIcon: {
    top: 566,
    left: 42,
    width: 24,
  },
  carbonphoneIcon: {
    top: 481,
    left: 42,
    width: 24,
  },
  completedpanaIcon: {
    height: "51.96%",
    width: "63.37%",
    top: "4.44%",
    right: "18.45%",
    bottom: "43.6%",
    left: "18.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bloodIsSuccessfully: {
    top: 338,
    left: 47,
    lineHeight: 29,
    color: "rgba(38, 50, 56, 0.5)",
    width: 280,
    height: 61,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.2,
  },
  frameChild: {
    top: 427,
    left: 165,
    width: 45,
    height: 45,
    position: "absolute",
  },
  arrowRightIcon: {
    top: 438,
    left: 176,
  },
  completedpanaParent: {
    top: 201,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(67, 67, 67, 0.05)",
    shadowRadius: 28,
    elevation: 28,
    height: 495,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.white,
  },
  createARequest: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CreateARequest;
