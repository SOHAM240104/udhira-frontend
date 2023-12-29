import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RegisterScreen1 = () => {
  return (
    <View style={styles.registerScreen}>
      <View style={styles.registerParent}>
        <View style={[styles.register, styles.registerLayout]}>
          <View style={[styles.registerChild, styles.registerLayout]} />
          <Text style={[styles.register1, styles.register1Typo]}>REGISTER</Text>
        </View>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={[styles.bytesizemailIcon, styles.bytesizemailIconLayout]}
            contentFit="cover"
            source={require("../assets/bytesizemail.png")}
          />
          <Text style={[styles.taylorswiftgmailcom, styles.taylorSwiftTypo]}>
            taylorswift@gmail.com
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.bytesizemail, styles.bytesizemailIconLayout]} />
          <Text style={[styles.taylorSwift, styles.taylorSwiftTypo]}>
            Taylor Swift
          </Text>
        </View>
        <Image
          style={[styles.bytesizemail, styles.bytesizemailIconLayout]}
          contentFit="cover"
          source={require("../assets/antdesignuseroutlined.png")}
        />
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={styles.rilockPasswordLineIcon}
            contentFit="cover"
            source={require("../assets/rilockpasswordline.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>***********</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.text1, styles.textTypo]}>+8801628162522</Text>
        </View>
        <Image
          style={[styles.carbonphoneIcon, styles.bytesizemailIconLayout]}
          contentFit="cover"
          source={require("../assets/carbonphone.png")}
        />
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.o, styles.textTypo]}>O+</Text>
        </View>
        <Image
          style={[styles.notodropOfBloodIcon, styles.bytesizemailIconLayout]}
          contentFit="cover"
          source={require("../assets/notodropofblood.png")}
        />
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={styles.rilockPasswordLineIcon}
            contentFit="cover"
            source={require("../assets/carbonlocation.png")}
          />
          <Text style={[styles.annaUniversity, styles.textTypo]}>
            Anna University
          </Text>
        </View>
      </View>
      <View
        style={[styles.alreadyHaveAnAccountLogIWrapper, styles.alreadyLayout]}
      >
        <Text style={[styles.alreadyHaveAnContainer, styles.alreadyLayout]}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={styles.logIn}>Log In</Text>
          <Text style={styles.alreadyHaveAn}>.</Text>
        </Text>
      </View>
      <Image
        style={[styles.registerScreenChild, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenItem, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenInner, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenChild1, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenChild2, styles.registerChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={styles.water2Icon}
        contentFit="cover"
        source={require("../assets/water-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerLayout: {
    height: 60,
    left: 0,
    width: 374,
    position: "absolute",
  },
  register1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupParentLayout: {
    height: 59,
    left: 0,
    width: 374,
    position: "absolute",
  },
  bytesizemailIconLayout: {
    height: 24,
    width: 24,
    left: 26,
    position: "absolute",
    overflow: "hidden",
  },
  taylorSwiftTypo: {
    width: 269,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    left: 86,
    fontSize: FontSize.size_lg,
    top: 18,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.playRegular,
    textAlign: "left",
    color: Color.colorGray_300,
    left: 86,
    position: "absolute",
  },
  alreadyLayout: {
    height: 29,
    width: 374,
    position: "absolute",
  },
  registerChildPosition: {
    left: 85,
    maxWidth: "100%",
    height: 59,
    position: "absolute",
    overflow: "hidden",
  },
  registerChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorCrimson_100,
    top: 0,
  },
  register1: {
    top: 14,
    left: 119,
    fontSize: FontSize.size_3xl,
    color: Color.white,
    width: 136,
    height: 33,
    position: "absolute",
  },
  register: {
    top: 498,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
  },
  bytesizemailIcon: {
    top: 17,
  },
  taylorswiftgmailcom: {
    height: 21,
  },
  rectangleParent: {
    top: 77,
  },
  bytesizemail: {
    top: 20,
  },
  taylorSwift: {
    height: 22,
  },
  rectangleGroup: {
    top: 0,
  },
  rilockPasswordLineIcon: {
    height: "40.68%",
    width: "6.42%",
    top: "30.51%",
    right: "86.63%",
    bottom: "28.81%",
    left: "6.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    width: 127,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.playRegular,
    height: 22,
    top: 18,
  },
  rectangleContainer: {
    top: 154,
  },
  text1: {
    width: 156,
    height: 22,
    top: 20,
    fontSize: FontSize.size_lg,
  },
  groupView: {
    top: 232,
  },
  carbonphoneIcon: {
    top: 251,
  },
  o: {
    top: 16,
    width: 73,
    height: 28,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.playRegular,
  },
  rectangleParent1: {
    top: 309,
  },
  notodropOfBloodIcon: {
    top: 326,
  },
  annaUniversity: {
    top: 19,
    width: 139,
    height: 22,
    fontSize: FontSize.size_lg,
  },
  rectangleParent2: {
    top: 386,
  },
  registerParent: {
    height: 558,
    width: 374,
    left: 20,
    top: 256,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorGray_100,
  },
  logIn: {
    color: Color.colorCrimson_100,
  },
  alreadyHaveAnContainer: {
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    left: 0,
    height: 29,
  },
  alreadyHaveAnAccountLogIWrapper: {
    top: 840,
    height: 29,
    left: 20,
  },
  registerScreenChild: {
    top: 256,
    left: 85,
  },
  registerScreenItem: {
    top: 333,
  },
  registerScreenInner: {
    top: 410,
  },
  vectorIcon: {
    top: 487,
  },
  registerScreenChild1: {
    top: 564,
  },
  registerScreenChild2: {
    top: 641,
  },
  water2Icon: {
    top: 48,
    left: 106,
    borderRadius: Border.br_6xl,
    width: 159,
    height: 159,
    position: "absolute",
  },
  registerScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default RegisterScreen1;
