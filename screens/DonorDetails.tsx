import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DonorCard from "../components/DonorCard";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const DonorDetails = () => {
  return (
    <View style={[styles.donorDetails, styles.vectorIconLayout]}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      <Text style={[styles.findDonors, styles.findDonorsTypo]}>
        Find Donors
      </Text>
      <DonorCard
        userImageUrl={require("../assets/rectangle-24.png")}
        userName="Yasin Hossain"
        bloodType="A+"
        locationImageUrl={require("../assets/mappin.png")}
        address="Mohammedpur, Dhaka"
        profileImageUrl={require("../assets/phone.png")}
        yasinHossainTop={107}
        aWidth={129}
        mohammedpurDhakaLeft={5}
        mohammedpurDhakaWidth={26}
        mohammedpurDhakaTop={17}
      />
      <DonorCard
        userImageUrl={require("../assets/rectangle-241.png")}
        userName="Mir Hamza"
        bloodType="AB+"
        locationImageUrl={require("../assets/mappin.png")}
        address="Mirpur 10, Dhaka"
        profileImageUrl={require("../assets/phone.png")}
        yasinHossainTop={243}
        aWidth={115}
        mohammedpurDhakaLeft={1}
        mohammedpurDhakaWidth={34}
        mohammedpurDhakaTop={17}
      />
      <DonorCard
        userImageUrl={require("../assets/rectangle-242.png")}
        userName="Rahimun Islam"
        bloodType="B-"
        locationImageUrl={require("../assets/mappin.png")}
        address="Chittagong"
        profileImageUrl={require("../assets/phone.png")}
        yasinHossainTop={379}
        aWidth={129}
        mohammedpurDhakaLeft={5}
        mohammedpurDhakaWidth={26}
        mohammedpurDhakaTop={18}
      />
      <DonorCard
        userImageUrl={require("../assets/rectangle-243.png")}
        userName="Rumana"
        bloodType="O+"
        locationImageUrl={require("../assets/mappin1.png")}
        address="Lakshmipur"
        profileImageUrl={require("../assets/phone1.png")}
        yasinHossainTop={515}
        aWidth={115}
        mohammedpurDhakaLeft={5}
        mohammedpurDhakaWidth={26}
        mohammedpurDhakaTop={18}
      />
      <DonorCard
        userImageUrl={require("../assets/rectangle-244.png")}
        userName="Jubayer Ahmed"
        bloodType="A+"
        locationImageUrl={require("../assets/mappin1.png")}
        address="Mohammedpur, Dhaka"
        profileImageUrl={require("../assets/phone1.png")}
        yasinHossainTop={651}
        aWidth={145}
        mohammedpurDhakaLeft={5}
        mohammedpurDhakaWidth={26}
        mohammedpurDhakaTop={18}
      />
      <View style={[styles.donor6, styles.donor6FlexBox]}>
        <Image
          style={styles.donor6Child}
          contentFit="cover"
          source={require("../assets/rectangle-245.png")}
        />
        <View style={styles.donor1}>
          <Text style={[styles.haymaSamia, styles.haymaSamiaTypo]}>
            Hayma Samia
          </Text>
          <View style={styles.bloodFrame}>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Text style={styles.ab}>AB+</Text>
          </View>
          <View style={styles.mapPinParent}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin1.png")}
            />
            <Text style={[styles.dhanmondhiDhaka, styles.textTypo]}>
              Dhanmondhi, Dhaka
            </Text>
          </View>
          <View style={styles.phoneParent}>
            <Image
              style={styles.phoneIcon}
              contentFit="cover"
              source={require("../assets/phone1.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>+8801628162522</Text>
          </View>
        </View>
      </View>
      <View style={[styles.donorDetailsChild, styles.donorShadowBox]} />
      <View style={styles.donorDetailsInner}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
      </View>
      <Text style={[styles.taylorSwift, styles.haymaSamiaTypo]}>
        Taylor Swift
      </Text>
      <View style={[styles.location, styles.locationLayout]}>
        <Image
          style={styles.mapPinIcon1}
          contentFit="cover"
          source={require("../assets/mappin2.png")}
        />
        <Text style={[styles.mirpur10Dhaka, styles.findDonorsTypo]}>
          Mirpur 10, Dhaka
        </Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.bxbxDonateBloodParent}>
          <Image
            style={styles.bxbxDonateBloodIcon}
            contentFit="cover"
            source={require("../assets/bxbxdonateblood.png")}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-32.png")}
          />
        </View>
        <Text style={[styles.timesDonated, styles.timesDonatedTypo]}>
          <Text style={styles.text1}>6</Text>
          <Text style={styles.text2}>{` `}</Text>
          <Text style={styles.timesDonated1}>Times Donated</Text>
        </Text>
        <Text style={[styles.bloodTypeContainer, styles.timesDonatedTypo]}>
          <Text style={styles.timesDonated1}>Blood Type -</Text>
          <Text style={styles.text1}> AB+</Text>
        </Text>
      </View>
      <View style={styles.callParent}>
        <View style={[styles.call, styles.callLayout]}>
          <View
            style={[
              styles.fluentpersonCall20RegularParent,
              styles.parentFlexBox,
            ]}
          >
            <Image
              style={styles.fluentpersonCall20RegularIcon}
              contentFit="cover"
              source={require("../assets/fluentpersoncall20regular.png")}
            />
            <Text style={styles.callNow}>Call Now</Text>
          </View>
        </View>
        <View style={[styles.request, styles.callLayout]}>
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
            <Text style={styles.callNow}>Request</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.donorDetailsItem, styles.donorLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-35.png")}
      />
      <Image
        style={[styles.locaationIcon, styles.locationLayout]}
        contentFit="cover"
        source={require("../assets/locaation-icon.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.fluentdirections20RegularIcon}
        contentFit="cover"
        source={require("../assets/fluentdirections20regular.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  findDonorsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donor6FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  haymaSamiaTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donorShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  locationLayout: {
    width: 141,
    position: "absolute",
  },
  timesDonatedTypo: {
    width: 140,
    top: 47,
    height: 28,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  callLayout: {
    width: 158,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  parentFlexBox: {
    width: 114,
    alignItems: "center",
    flexDirection: "row",
  },
  donorLayout: {
    width: 374,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  backArrowIcon: {
    top: 38,
    width: 44,
    height: 44,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  findDonors: {
    top: 43,
    width: 189,
    height: 34,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
    left: 113,
    position: "absolute",
  },
  donor6Child: {
    width: 85,
    height: 85,
    borderRadius: Border.br_3xs,
  },
  haymaSamia: {
    letterSpacing: 0.3,
    width: 156,
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 1,
    top: 0,
  },
  vectorIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ab: {
    top: 18,
    left: 3,
    letterSpacing: -1.4,
    width: 30,
    height: 28,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  bloodFrame: {
    top: 10,
    left: 195,
    width: 35,
    height: 50,
    position: "absolute",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  dhanmondhiDhaka: {
    width: 148,
    marginLeft: 9,
    color: Color.colorGray_100,
    height: 20,
  },
  mapPinParent: {
    top: 31,
    width: 173,
    height: 20,
    left: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  phoneIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    width: 170,
    height: 17,
    marginLeft: 6,
    color: Color.colorGray_100,
  },
  phoneParent: {
    top: 57,
    width: 196,
    paddingLeft: 0,
    left: 0,
    height: 20,
    flexDirection: "row",
    position: "absolute",
  },
  donor1: {
    width: 230,
    height: 77,
    marginLeft: 26,
  },
  donor6: {
    top: 787,
    shadowColor: "rgba(30, 30, 30, 0.1)",
    shadowRadius: 11,
    elevation: 11,
    height: 111,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_smi,
    width: 374,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  donorDetailsChild: {
    top: 180,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    shadowColor: "rgba(77, 77, 77, 0.25)",
    shadowRadius: 51,
    elevation: 51,
    width: 414,
    height: 716,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    width: 120,
    height: 120,
    borderRadius: Border.br_3xs,
  },
  donorDetailsInner: {
    top: 115,
    left: 142,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  taylorSwift: {
    top: 260,
    left: 141,
    width: 150,
    height: 38,
    textAlign: "left",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
  },
  mapPinIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mirpur10Dhaka: {
    fontSize: FontSize.size_sm,
    width: 116,
    marginLeft: 7,
    color: Color.colorGray_100,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  location: {
    top: 299,
    left: 137,
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  bxbxDonateBloodIcon: {
    width: 37,
    height: 37,
    overflow: "hidden",
  },
  frameItem: {
    width: 23,
    height: 31,
    marginLeft: 191,
  },
  bxbxDonateBloodParent: {
    left: 53,
    width: 251,
    height: 37,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text1: {
    color: Color.colorCrimson_100,
  },
  text2: {
    color: Color.systemBlack,
  },
  timesDonated1: {
    color: Color.colorGray_100,
  },
  timesDonated: {
    left: 0,
  },
  bloodTypeContainer: {
    left: 223,
  },
  frameParent: {
    top: 348,
    left: 28,
    width: 363,
    height: 75,
    position: "absolute",
  },
  fluentpersonCall20RegularIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  callNow: {
    width: 71,
    marginLeft: 17,
    height: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  fluentpersonCall20RegularParent: {
    height: 26,
  },
  call: {
    backgroundColor: Color.colorCadetblue,
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
    marginLeft: 33,
    backgroundColor: Color.colorCrimson_100,
  },
  callParent: {
    top: 470,
    left: 33,
    width: 349,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  donorDetailsItem: {
    top: 572,
    height: 277,
  },
  locaationIcon: {
    top: 600,
    height: 141,
    left: 113,
    width: 141,
  },
  rectangleView: {
    top: 779,
    left: 326,
    borderRadius: Border.br_8xs,
    width: 49,
    height: 49,
    backgroundColor: Color.colorCrimson_100,
    position: "absolute",
  },
  fluentdirections20RegularIcon: {
    top: 784,
    left: 331,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  donorDetails: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default DonorDetails;
