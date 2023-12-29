import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import IOSIconStatusBar from "./IOSIconStatusBar";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type IOSStatusBarWithNotchType = {
  notch?: ImageSourcePropType;
  iOSIconSmallClock?: ImageSourcePropType;
  iOSIconSmallBluetooth?: ImageSourcePropType;
  iOSIconSmallMobileSignal?: ImageSourcePropType;
  iOSIconSmallWifi?: ImageSourcePropType;
  iOSIconSmallBattery?: ImageSourcePropType;

  /** Style props */
  iOSStatusBarWithNotchPosition?: string;
  iOSStatusBarWithNotchBackgroundColor?: string;
  iOSStatusBarWithNotchHeight?: number | string;
  iOSStatusBarWithNotchTop?: number | string;
  iOSStatusBarWithNotchLeft?: number | string;
  timeColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSStatusBarWithNotch = ({
  notch,
  iOSIconSmallClock,
  iOSIconSmallBluetooth,
  iOSIconSmallMobileSignal,
  iOSIconSmallWifi,
  iOSIconSmallBattery,
  iOSStatusBarWithNotchPosition,
  iOSStatusBarWithNotchBackgroundColor,
  iOSStatusBarWithNotchHeight,
  iOSStatusBarWithNotchTop,
  iOSStatusBarWithNotchLeft,
  timeColor,
}: IOSStatusBarWithNotchType) => {
  const iOSStatusBarWithNotchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iOSStatusBarWithNotchPosition),
      ...getStyleValue("backgroundColor", iOSStatusBarWithNotchBackgroundColor),
      ...getStyleValue("height", iOSStatusBarWithNotchHeight),
      ...getStyleValue("top", iOSStatusBarWithNotchTop),
      ...getStyleValue("left", iOSStatusBarWithNotchLeft),
    };
  }, [
    iOSStatusBarWithNotchPosition,
    iOSStatusBarWithNotchBackgroundColor,
    iOSStatusBarWithNotchHeight,
    iOSStatusBarWithNotchTop,
    iOSStatusBarWithNotchLeft,
  ]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", timeColor),
    };
  }, [timeColor]);

  return (
    <View style={[styles.iosStatusBarWithNotch, iOSStatusBarWithNotchStyle]}>
      <Image style={styles.notchIcon} contentFit="cover" source={notch} />
      <Text style={[styles.time, timeStyle]}>9:41</Text>
      <IOSIconStatusBar
        iOSIconSmallClock={require("../assets/ios--icon--small--clock1.png")}
        iOSIconSmallBluetooth={require("../assets/ios--icon--small--clock1.png")}
        iOSIconSmallMobileSignal={require("../assets/ios--icon--small--mobile-signal.png")}
        iOSIconSmallWifi={require("../assets/ios--icon--small--wifi1.png")}
        iOSIconSmallBattery={require("../assets/ios--icon--small--battery.png")}
        iOSIconStatusBarPosition="absolute"
        iOSIconStatusBarTop={15}
        iOSIconStatusBarRight={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notchIcon: {
    marginLeft: -110,
    top: -2,
    left: "50%",
    width: 219,
    height: 30,
    position: "absolute",
  },
  time: {
    top: 13,
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.grey900,
    textAlign: "left",
    position: "absolute",
  },
  iosStatusBarWithNotch: {
    backgroundColor: Color.white,
    width: 428,
    height: 44,
    overflow: "hidden",
  },
});

export default IOSStatusBarWithNotch;
