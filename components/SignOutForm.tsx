import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignOutForm = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameShadowBox]} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <View style={[styles.rectangleView, styles.frameShadowBox]} />
        <Text style={[styles.availableForDonate, styles.getHelpLayout]}>
          Available for donate
        </Text>
        <Text style={[styles.inviteAFriend, styles.getHelpTypo]}>
          Invite a friend
        </Text>
        <Text style={[styles.getHelp, styles.getHelpLayout]}>Get help</Text>
        <Text style={[styles.signOut, styles.getHelpTypo]}>Sign out</Text>
        <View style={[styles.frameChild1, styles.getHelpLayout]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <Image
        style={[styles.lasignOutAltIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lasignoutalt.png")}
      />
      <Image
        style={[styles.clarityhelpInfoLineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clarityhelpinfoline.png")}
      />
      <Image
        style={[styles.bpmnstartEventMessageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bpmnstarteventmessage.png")}
      />
      <Image
        style={[styles.carboneventScheduleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/carboneventschedule.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameShadowBox: {
    height: 55,
    shadowOpacity: 1,
    elevation: 26,
    shadowRadius: 26,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(86, 86, 86, 0.12)",
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
    width: 374,
    left: 0,
    position: "absolute",
  },
  getHelpLayout: {
    height: 20,
    position: "absolute",
  },
  getHelpTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    left: 54,
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 15,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    top: 0,
  },
  frameItem: {
    top: 69,
  },
  frameInner: {
    top: 138,
  },
  rectangleView: {
    top: 207,
  },
  availableForDonate: {
    width: 153,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    left: 54,
    top: 18,
    height: 20,
  },
  inviteAFriend: {
    top: 87,
    width: 106,
    height: 19,
    position: "absolute",
  },
  getHelp: {
    top: 156,
    width: 65,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    left: 54,
  },
  signOut: {
    top: 224,
    width: 88,
    height: 22,
    position: "absolute",
  },
  frameChild1: {
    left: 310,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorCrimson_100,
    width: 46,
    top: 18,
    height: 20,
  },
  ellipseIcon: {
    top: 21,
    left: 340,
    width: 14,
    height: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    height: 262,
    width: 374,
    left: 0,
    position: "absolute",
  },
  lasignOutAltIcon: {
    top: 223,
  },
  clarityhelpInfoLineIcon: {
    top: 154,
  },
  bpmnstartEventMessageIcon: {
    top: 85,
  },
  carboneventScheduleIcon: {
    top: 16,
  },
  frame: {
    top: 511,
    overflow: "hidden",
    height: 262,
    width: 374,
    left: 0,
    position: "absolute",
  },
});

export default SignOutForm;
