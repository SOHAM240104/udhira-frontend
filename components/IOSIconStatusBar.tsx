import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type IOSIconStatusBarType = {
  iOSIconSmallClock?: ImageSourcePropType;
  iOSIconSmallBluetooth?: ImageSourcePropType;
  iOSIconSmallMobileSignal?: ImageSourcePropType;
  iOSIconSmallWifi?: ImageSourcePropType;
  iOSIconSmallBattery?: ImageSourcePropType;

  /** Style props */
  iOSIconStatusBarPosition?: string;
  iOSIconStatusBarTop?: number | string;
  iOSIconStatusBarRight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSIconStatusBar = ({
  iOSIconSmallClock,
  iOSIconSmallBluetooth,
  iOSIconSmallMobileSignal,
  iOSIconSmallWifi,
  iOSIconSmallBattery,
  iOSIconStatusBarPosition,
  iOSIconStatusBarTop,
  iOSIconStatusBarRight,
}: IOSIconStatusBarType) => {
  const iOSIconStatusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iOSIconStatusBarPosition),
      ...getStyleValue("top", iOSIconStatusBarTop),
      ...getStyleValue("right", iOSIconStatusBarRight),
    };
  }, [iOSIconStatusBarPosition, iOSIconStatusBarTop, iOSIconStatusBarRight]);

  return (
    <View style={[styles.iosIconStatusBar, iOSIconStatusBarStyle]}>
      <Image
        style={[styles.iosIconSmallClock, styles.iosIconLayout]}
        contentFit="cover"
        source={iOSIconSmallClock}
      />
      <Image
        style={[styles.iosIconSmallBluetooth, styles.iosIconLayout]}
        contentFit="cover"
        source={iOSIconSmallBluetooth}
      />
      <Image
        style={styles.iosIconSmallMobileSi}
        contentFit="cover"
        source={iOSIconSmallMobileSignal}
      />
      <Text style={styles.carrier}>Figma</Text>
      <Image
        style={styles.iosIconSmallWifi}
        contentFit="cover"
        source={iOSIconSmallWifi}
      />
      <Text style={styles.carrier}>100%</Text>
      <Image
        style={styles.iosIconSmallBattery}
        contentFit="cover"
        source={iOSIconSmallBattery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iosIconLayout: {
    width: 12,
    display: "none",
    height: 16,
  },
  iosIconSmallClock: {
    display: "none",
    height: 16,
  },
  iosIconSmallBluetooth: {
    marginLeft: 2,
    display: "none",
    height: 16,
  },
  iosIconSmallMobileSi: {
    width: 20,
    marginLeft: 2,
    height: 16,
  },
  carrier: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.sFProText,
    color: Color.systemBlack,
    textAlign: "left",
    marginLeft: 2,
    display: "none",
  },
  iosIconSmallWifi: {
    width: 16,
    marginLeft: 2,
    height: 16,
  },
  iosIconSmallBattery: {
    width: 25,
    overflow: "hidden",
    marginLeft: 2,
    height: 16,
  },
  iosIconStatusBar: {
    flexDirection: "row",
  },
});

export default IOSIconStatusBar;
