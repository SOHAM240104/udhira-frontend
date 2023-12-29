import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import IOSStatusBarWithNotch from "../components/IOSStatusBarWithNotch";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Location1 = () => {
  return (
    <View style={styles.location}>
      <View style={styles.locationChild} />
      <Text style={styles.bloodGroups}>Blood Groups</Text>
      <View style={[styles.frame, styles.framePosition1]}>
        <IOSStatusBarWithNotch
          notch={require("../assets/notch1.png")}
          iOSIconSmallClock={require("../assets/ios--icon--small--clock2.png")}
          iOSIconSmallBluetooth={require("../assets/ios--icon--small--bluetooth.png")}
          iOSIconSmallMobileSignal={require("../assets/ios--icon--small--mobile-signal1.png")}
          iOSIconSmallWifi={require("../assets/ios--icon--small--wifi2.png")}
          iOSIconSmallBattery={require("../assets/ios--icon--small--battery1.png")}
          iOSStatusBarWithNotchPosition="absolute"
          iOSStatusBarWithNotchBackgroundColor="#ff2156"
          iOSStatusBarWithNotchHeight={100}
          iOSStatusBarWithNotchTop={0}
          iOSStatusBarWithNotchLeft={0}
          timeColor="#fff"
        />
        <Image
          style={[styles.maskGroupIcon, styles.framePosition1]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/frame-113.png")}
        />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-112.png")}
        />
        <Text style={[styles.shahzaibo, styles.shahzaiboTypo]}>
          Shahzaib(o+)
        </Text>
        <Text style={[styles.shahzaibo1, styles.allPosition]}>
          Shahzaib(o+)
        </Text>
        <Text style={[styles.abdullaho, styles.shahzaiboTypo]}>
          Abdullah(o+)
        </Text>
        <Text style={styles.m}>100M</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={styles.joharTownLahore}>JOHAR TOWN, LAHORE</Text>
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={[styles.rectangleView, styles.frameChild9Bg]} />
        <Text style={[styles.o, styles.oTypo]}>O+</Text>
        <View style={[styles.frameChild1, styles.frameChildBorder]} />
        <Text style={[styles.b, styles.oTypo]}>B+</Text>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
        <Text style={[styles.ab, styles.oTypo]}>AB+</Text>
        <View style={[styles.frameChild3, styles.frameChildBorder]} />
        <Text style={[styles.a, styles.oTypo]}>A+</Text>
        <View style={[styles.frameChild4, styles.frameChildBorder]} />
        <Text style={[styles.a1, styles.oTypo]}>A-</Text>
        <View style={[styles.frameChild5, styles.frameChildBorder]} />
        <Text style={[styles.b1, styles.oTypo]}>B-</Text>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={[styles.frameChild6, styles.frameChildBorder]} />
        <Text style={[styles.ab1, styles.oTypo]}>AB-</Text>
        <View style={[styles.frameChild1, styles.frameChildBorder]} />
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
        <Text style={[styles.o1, styles.oTypo]}>o-</Text>
        <Text style={[styles.all, styles.oTypo]}>ALL</Text>
      </View>
      <View style={styles.frame3}>
        <View style={[styles.frameChild9, styles.frameChildLayout]} />
        <View style={[styles.frameChild10, styles.frameChildLayout]} />
        <Text style={[styles.showAll, styles.showAllTypo]}>SHOW ALL</Text>
        <Text style={[styles.addNewDonor, styles.showAllTypo]}>
          ADD NEW DONOR
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.21%",
    height: "4.19%",
    position: "absolute",
    overflow: "hidden",
  },
  shahzaiboTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.eB3738,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  allPosition: {
    left: 143,
    color: Color.eB3738,
  },
  framePosition: {
    height: 20,
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild9Bg: {
    backgroundColor: Color.eB3738,
    left: 0,
  },
  oTypo: {
    fontSize: FontSize.size_xs,
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  frameChildBorder: {
    borderWidth: 1,
    borderColor: Color.eB3738,
    borderStyle: "solid",
  },
  frameChildLayout: {
    width: 177,
    borderRadius: Border.br_3xs,
    height: 48,
    top: 0,
    position: "absolute",
  },
  showAllTypo: {
    top: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  locationChild: {
    top: 914,
    borderRadius: 96,
    backgroundColor: Color.systemBlack,
    width: 144,
    height: 4,
    left: 142,
    position: "absolute",
  },
  bloodGroups: {
    top: 687,
    fontSize: FontSize.size_sm,
    color: Color.systemBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 28,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 100,
    height: 569,
  },
  vectorIcon: {
    top: "24.36%",
    right: "82.01%",
    bottom: "71.45%",
    left: "13.79%",
  },
  vectorIcon1: {
    top: "49.63%",
    right: "58.88%",
    bottom: "46.19%",
    left: "36.92%",
  },
  vectorIcon2: {
    top: "62.33%",
    right: "37.62%",
    bottom: "33.48%",
    left: "58.18%",
  },
  vectorIcon3: {
    top: "78.18%",
    right: "3.74%",
    bottom: "17.64%",
    left: "92.06%",
  },
  vectorIcon4: {
    top: "65.47%",
    right: "56.31%",
    bottom: "30.34%",
    left: "39.49%",
  },
  frameChild: {
    top: 264,
    left: 114,
    width: 174,
    height: 174,
    opacity: 0.15,
    position: "absolute",
  },
  frameItem: {
    top: 346,
    left: 196,
    width: 10,
    height: 10,
    position: "absolute",
  },
  frameInner: {
    top: 150,
    left: 389,
    borderRadius: 55,
    width: 21,
    height: 188,
    position: "absolute",
  },
  groupIcon: {
    top: 60,
    left: 370,
    width: 30,
    height: 30,
    position: "absolute",
  },
  shahzaibo: {
    top: 418,
    left: 234,
    color: Color.eB3738,
  },
  shahzaibo1: {
    top: 334,
    left: 143,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  abdullaho: {
    top: 440,
    left: 155,
    color: Color.eB3738,
  },
  m: {
    top: 342,
    left: 386,
    fontSize: 10,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.eB3738,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    left: 184,
    height: 34,
    width: 34,
    top: 334,
    opacity: 0.15,
    position: "absolute",
  },
  joharTownLahore: {
    top: 65,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 28,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 118,
    left: 388,
    width: 22,
    height: 22,
    position: "absolute",
  },
  frame: {
    height: 669,
    top: 0,
    width: 428,
    overflow: "hidden",
  },
  rectangleView: {
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  o: {
    left: 9,
    color: "#fffefe",
  },
  frameChild1: {
    left: 68,
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  b: {
    left: 78,
    color: Color.eB3738,
  },
  frameChild2: {
    left: 136,
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  ab: {
    color: Color.eB3738,
    left: 142,
  },
  frameChild3: {
    left: 204,
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  a: {
    left: 214,
    color: Color.eB3738,
  },
  frameChild4: {
    left: 272,
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  a1: {
    left: 283,
    color: Color.eB3738,
  },
  frameChild5: {
    left: 340,
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
  },
  b1: {
    left: 352,
    color: Color.eB3738,
  },
  frame1: {
    top: 728,
    width: 374,
  },
  frameChild6: {
    borderRadius: Border.br_10xs,
    height: 20,
    width: 34,
    top: 0,
    position: "absolute",
    left: 0,
    borderWidth: 1,
    borderColor: Color.eB3738,
    borderStyle: "solid",
  },
  ab1: {
    left: 8,
    color: Color.eB3738,
  },
  o1: {
    left: 80,
    color: Color.eB3738,
  },
  all: {
    left: 143,
    color: Color.eB3738,
  },
  frame2: {
    top: 774,
    width: 170,
  },
  frameChild9: {
    backgroundColor: Color.eB3738,
    left: 0,
  },
  frameChild10: {
    left: 195,
    borderWidth: 1,
    borderColor: Color.eB3738,
    borderStyle: "solid",
  },
  showAll: {
    left: 49,
    color: Color.white,
  },
  addNewDonor: {
    left: 220,
    color: Color.eB3738,
  },
  frame3: {
    top: 820,
    width: 372,
    height: 48,
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  location: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Location1;
