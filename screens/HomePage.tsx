import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import DonationContainer from "../components/DonationContainer";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.hamePage}>
        <View style={styles.home}>
          <View style={styles.topBar}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameLayout]} />
              <View style={[styles.frameItem, styles.frameLayout]} />
              <View style={[styles.frameInner, styles.frameInnerLayout]} />
              <View style={[styles.rectangleView, styles.frameInnerLayout]} />
            </View>
            <Image
              style={styles.claritynotificationOutlineBIcon}
              contentFit="cover"
              source={require("../assets/claritynotificationoutlinebadged.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-13.png")}
            />
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-18.png")}
            />
          </View>
          <View
            style={[styles.browseByCategories, styles.rectangleGroupPosition]}
          >
            <View style={[styles.findDonors, styles.findDonorsShadowBox]}>
              <Image
                style={styles.ionsearchOutlineIcon}
                contentFit="cover"
                source={require("../assets/ionsearchoutline.png")}
              />
              <Text style={[styles.findDonors1, styles.donates1Typo]}>
                Find Donors
              </Text>
            </View>
            <View style={styles.donates}>
              <Image
                style={styles.openmojibloodTransfusionIcon}
                contentFit="cover"
                source={require("../assets/openmojibloodtransfusion.png")}
              />
              <Text style={[styles.donates1, styles.donates1Typo]}>
                Donates
              </Text>
            </View>
            <View style={[styles.orderBloods, styles.findDonorsShadowBox]}>
              <Image
                style={[styles.siGlyphbloodBagIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/siglyphbloodbag.png")}
              />
              <Text style={[styles.orderBloods1, styles.donates1Typo]}>
                Order Bloods
              </Text>
            </View>
            <View style={[styles.assistant, styles.reportShadowBox]}>
              <Image
                style={[styles.makidoctor11Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/makidoctor11.png")}
              />
              <Text style={[styles.assistant1, styles.donates1Typo]}>
                Assistant
              </Text>
            </View>
            <View style={[styles.report, styles.reportShadowBox]}>
              <Image
                style={[styles.makidoctor11Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/lafilemedicalalt.png")}
              />
              <Text style={[styles.findDonors1, styles.donates1Typo]}>
                Report
              </Text>
            </View>
            <View style={[styles.campaign, styles.reportShadowBox]}>
              <Image
                style={[styles.makidoctor11Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/grommeticonsannounce.png")}
              />
              <Text style={[styles.assistant1, styles.donates1Typo]}>
                Campaign
              </Text>
            </View>
          </View>
          <DonationContainer />
        </View>
        <Image
          style={[styles.navigationBarIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/navigation-bar1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 12,
    width: 12,
    backgroundColor: Color.colorCrimson_100,
    borderRadius: Border.br_11xs,
    left: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    left: 15,
    height: 12,
    width: 12,
    backgroundColor: Color.colorCrimson_100,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  rectangleGroupPosition: {
    width: 374,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  findDonorsShadowBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xs,
    height: 111,
    width: 111,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(66, 66, 66, 0.1)",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  donates1Typo: {
    height: 25,
    width: 95,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    width: 40,
    overflow: "hidden",
  },
  reportShadowBox: {
    paddingVertical: Padding.p_2xs,
    top: 132,
    paddingHorizontal: Padding.p_5xs,
    height: 111,
    width: 111,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(66, 66, 66, 0.1)",
    borderRadius: Border.br_3xs,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  frameChild: {
    top: 0,
  },
  frameItem: {
    top: 15,
  },
  frameInner: {
    top: 0,
  },
  rectangleView: {
    top: 15,
  },
  rectangleParent: {
    width: 27,
    height: 27,
  },
  claritynotificationOutlineBIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  topBar: {
    width: 375,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: 179,
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
  },
  groupIcon: {
    width: 70,
    height: 10,
    marginTop: 22,
  },
  rectangleGroup: {
    top: 59,
    alignItems: "center",
  },
  ionsearchOutlineIcon: {
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  findDonors1: {
    marginTop: 15,
  },
  findDonors: {
    left: 0,
    justifyContent: "flex-end",
  },
  openmojibloodTransfusionIcon: {
    width: 52,
    height: 52,
    overflow: "hidden",
  },
  donates1: {
    marginTop: 13,
  },
  donates: {
    paddingVertical: 9,
    left: 132,
    paddingHorizontal: Padding.p_5xs,
    height: 111,
    width: 111,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(66, 66, 66, 0.1)",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  siGlyphbloodBagIcon: {
    height: 38,
  },
  orderBloods1: {
    marginTop: 20,
  },
  orderBloods: {
    left: 263,
  },
  makidoctor11Icon: {
    height: 40,
  },
  assistant1: {
    marginTop: 17,
  },
  assistant: {
    left: 0,
    justifyContent: "flex-end",
  },
  report: {
    left: 132,
    justifyContent: "flex-end",
  },
  campaign: {
    left: 263,
  },
  browseByCategories: {
    top: 310,
    height: 243,
  },
  home: {
    height: 776,
    alignSelf: "stretch",
  },
  navigationBarIcon: {
    height: 79,
    marginTop: -15,
  },
  hamePage: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  homePage: {
    flex: 1,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HomePage;
