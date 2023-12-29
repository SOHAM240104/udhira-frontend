import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ProfileFormContainer from "../components/ProfileFormContainer";
import SignOutForm from "../components/SignOutForm";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={[styles.profile, styles.profileLayout]}>
      <ProfileFormContainer />
      <View style={styles.frame}>
        <SignOutForm />
        <View style={[styles.callParent, styles.parentFlexBox1]}>
          <View style={[styles.call, styles.callFlexBox]}>
            <View
              style={[
                styles.fluentpersonCall20RegularParent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.fluentpersonCall20RegularIcon}
                contentFit="cover"
                source={require("../assets/fluentpersoncall20regular1.png")}
              />
              <Text style={[styles.callNow, styles.callNowTypo]}>Call Now</Text>
            </View>
          </View>
          <View style={[styles.request, styles.callFlexBox]}>
            <View
              style={[
                styles.simpleLineIconsactionUndoParent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.simpleLineIconsactionUndo}
                contentFit="cover"
                source={require("../assets/simplelineiconsactionundo.png")}
              />
              <Text style={[styles.callNow, styles.callNowTypo]}>Request</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.taylorSwift, styles.callNowTypo]}>
          Taylor Swift
        </Text>
        <View style={styles.frame1}>
          <View style={styles.frameChild} />
          <View style={[styles.frameInner, styles.callFlexBox]}>
            <Image
              style={[styles.frameItem, styles.profileLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-271.png")}
            />
          </View>
        </View>
        <View style={[styles.mapPinParent, styles.parentFlexBox1]}>
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin3.png")}
          />
          <Text style={styles.chittagongBangladesh}>
            Chittagong, Bangladesh
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  callFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  parentFlexBox: {
    width: 114,
    alignItems: "center",
    flexDirection: "row",
  },
  callNowTypo: {
    fontWeight: "500",
    textAlign: "center",
  },
  fluentpersonCall20RegularIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  callNow: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    width: 71,
    marginLeft: 17,
    height: 24,
    textAlign: "center",
  },
  fluentpersonCall20RegularParent: {
    height: 26,
  },
  call: {
    backgroundColor: Color.colorCadetblue,
    height: 52,
    width: 158,
    justifyContent: "center",
  },
  simpleLineIconsactionUndo: {
    width: 25,
    height: 22,
    overflow: "hidden",
  },
  simpleLineIconsactionUndoParent: {
    height: 24,
  },
  request: {
    backgroundColor: Color.colorCrimson_100,
    height: 52,
    width: 158,
    justifyContent: "center",
  },
  callParent: {
    top: 259,
    left: 13,
    width: 349,
    alignItems: "center",
  },
  taylorSwift: {
    top: 148,
    left: 55,
    fontSize: FontSize.size_11xl,
    letterSpacing: 1.1,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_300,
    width: 265,
    height: 37,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    width: 103,
    height: 103,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  frameItem: {
    maxWidth: "100%",
    height: 120,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameInner: {
    marginTop: -101,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  frame1: {
    top: 0,
    left: 123,
    width: 130,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  chittagongBangladesh: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.6,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    width: 204,
    height: 23,
    textAlign: "center",
  },
  mapPinParent: {
    top: 195,
    left: 73,
    width: 228,
  },
  frame: {
    height: 773,
    marginTop: -456,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  profile: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xl,
    paddingTop: 38,
    paddingBottom: 31,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Profile;
