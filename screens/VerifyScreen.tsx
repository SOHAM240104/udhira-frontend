import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const VerifyScreen = () => {
  return (
    <View style={styles.verifyScreen}>
      <Image
        style={styles.illustrationsuccessIcon}
        contentFit="cover"
        source={require("../assets/illustrationsuccess.png")}
      />
      <View style={styles.verify}>
        <Text style={styles.finish}>Finish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  illustrationsuccessIcon: {
    width: 274,
    height: 228,
  },
  finish: {
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: "center",
    width: 136,
    height: 33,
  },
  verify: {
    alignSelf: "stretch",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorCrimson_100,
    height: 60,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_smi,
    marginTop: 105,
    alignItems: "center",
  },
  verifyScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 163,
    alignItems: "center",
  },
});

export default VerifyScreen;
