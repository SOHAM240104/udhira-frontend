import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={[styles.splashScreen, styles.water1IconLayout]}>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.frame1}>
          <Image
            style={[styles.water1Icon, styles.water1IconLayout]}
            contentFit="cover"
            source={require("../assets/water-11.png")}
          />
          <Text style={styles.udhira}>UDHIRA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  water1IconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 623,
    left: -169,
    width: 752,
    height: 348,
  },
  water1Icon: {
    borderRadius: Border.br_6xl,
    maxWidth: "100%",
    height: 209,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  udhira: {
    fontSize: 48,
    fontFamily: FontFamily.quandoRegular,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame: {
    top: 284,
    left: 91,
    width: 232,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  splashScreen: {
    backgroundColor: Color.colorCrimson_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default SplashScreen;
