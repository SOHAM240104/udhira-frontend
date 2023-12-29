import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AccountSettingsContainer = () => {
  return (
    <View style={styles.accountSettingsParent}>
      <Text style={styles.accountSettings}>Account Settings</Text>
      <View style={[styles.editProfileParent, styles.editParentPosition]}>
        <Text style={[styles.editProfile, styles.editProfileTypo]}>
          Edit profile
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-14.png")}
        />
      </View>
      <View style={[styles.changePasswordParent, styles.editParentPosition]}>
        <Text style={[styles.editProfile, styles.editProfileTypo]}>
          Change password
        </Text>
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
      </View>
      <View style={[styles.pushNotificationsParent, styles.parentFlexBox]}>
        <Text style={styles.editProfileTypo}>Push notifications</Text>
        <Image
          style={[styles.frameInner, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-20.png")}
        />
      </View>
      <View style={[styles.darkModeParent, styles.parentFlexBox]}>
        <Text style={styles.editProfileTypo}>Dark mode</Text>
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
      </View>
      <View style={[styles.addAPaymentMethodParent, styles.editParentPosition]}>
        <Text style={[styles.editProfile, styles.editProfileTypo]}>
          Add a payment method
        </Text>
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-19.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editParentPosition: {
    left: 0,
    position: "absolute",
  },
  editProfileTypo: {
    color: Color.systemBlack,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_lg,
  },
  frameChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    width: 329,
    position: "absolute",
  },
  groupIconLayout: {
    height: 29,
    width: 56,
  },
  accountSettings: {
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
    position: "absolute",
  },
  editProfile: {
    left: 0,
    position: "absolute",
    top: 0,
    color: Color.systemBlack,
  },
  frameChild: {
    height: "67.47%",
    top: "32.53%",
    bottom: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
  },
  editProfileParent: {
    top: 53,
    height: 37,
    width: 329,
  },
  frameItem: {
    height: "61.67%",
    top: "38.33%",
    bottom: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
  },
  changePasswordParent: {
    top: 108,
    height: 41,
    width: 329,
  },
  frameInner: {
    borderRadius: Border.br_xl,
  },
  pushNotificationsParent: {
    top: 220,
  },
  darkModeParent: {
    top: 281,
    paddingTop: 29,
  },
  frameChild1: {
    height: "62.44%",
    top: "37.81%",
    bottom: "-0.25%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "92.71%",
    right: "0%",
    width: "7.29%",
  },
  addAPaymentMethodParent: {
    top: 167,
    height: 40,
    width: 329,
  },
  accountSettingsParent: {
    top: 240,
    left: 41,
    height: 310,
    width: 329,
    position: "absolute",
  },
});

export default AccountSettingsContainer;
