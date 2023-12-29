import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import MoreContainer from "../components/MoreContainer";
import AccountSettingsContainer from "../components/AccountSettingsContainer";
import SectionCard from "../components/SectionCard";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingsPageLight = () => {
  return (
    <View style={styles.settingsPageLight}>
      <View style={[styles.settingsPageLightChild, styles.settingsPosition]} />
      <Image
        style={[styles.settingsPageLightItem, styles.settingsPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.header, styles.settingsPosition]}>
        <Text style={[styles.text, styles.textTypo]}>09:20</Text>
        <Image
          style={[styles.headerChild, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
        <Image
          style={[styles.headerItem, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/group-10.png")}
        />
        <Image
          style={[styles.headerInner, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/group-9.png")}
        />
      </View>
      <View
        style={[styles.settingsPageLightInner, styles.rectangleViewShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={styles.yenneferDoe}>Yennefer Doe</Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
        <Text style={[styles.settings, styles.textTypo]}>Settings</Text>
      </View>
      <MoreContainer />
      <AccountSettingsContainer />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.settingsPageLightChild1, styles.lineViewLayout]} />
      <SectionCard />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsPosition: {
    width: 411,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
  },
  headerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewShadowBox: {
    width: 379,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 16,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 380,
    borderTopWidth: 0.5,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    left: 16,
    position: "absolute",
  },
  settingsPageLightChild: {
    backgroundColor: "#f4f4f4",
    height: 823,
  },
  settingsPageLightItem: {
    height: 294,
  },
  text: {
    top: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 46,
    height: 18,
    alignItems: "center",
    left: 16,
    position: "absolute",
    color: Color.white,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
  },
  headerChild: {
    right: "18.49%",
    left: "76.64%",
    bottom: "8.33%",
    top: "8.33%",
    width: "4.87%",
    height: "83.33%",
    maxWidth: "100%",
  },
  headerItem: {
    right: "11.68%",
    left: "83.45%",
    bottom: "8.33%",
    top: "8.33%",
    width: "4.87%",
    height: "83.33%",
    maxWidth: "100%",
  },
  headerInner: {
    height: "100%",
    width: "5.84%",
    top: "0%",
    right: "3.89%",
    bottom: "0%",
    left: "90.27%",
  },
  header: {
    backgroundColor: "#e5386d",
    height: 24,
  },
  settingsPageLightInner: {
    top: 128,
    borderRadius: 16,
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowRadius: 16,
    elevation: 16,
    height: 911,
  },
  rectangleView: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    height: 358,
    display: "none",
    top: 216,
  },
  maskGroupIcon: {
    height: 40,
    width: 40,
  },
  yenneferDoe: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.rubikRegular,
    color: Color.systemBlack,
    textAlign: "left",
  },
  maskGroupParent: {
    top: 152,
    left: 41,
    width: 165,
    alignItems: "center",
  },
  frameChild: {
    height: 42,
    width: 40,
  },
  settings: {
    fontSize: 28,
    letterSpacing: 1,
    textAlign: "left",
  },
  groupParent: {
    top: 59,
    width: 170,
    left: 16,
  },
  lineView: {
    top: 216,
  },
  settingsPageLightChild1: {
    top: 574,
  },
  settingsPageLight: {
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SettingsPageLight;
