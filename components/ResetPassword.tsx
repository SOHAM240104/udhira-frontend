import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={styles.resetPassword}>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <TextInput
          style={styles.frameChild}
          placeholder="johndoe@gmail.com"
          mode="outlined"
          placeholderTextColor="#272a2f"
          theme={{
            fonts: {
              regular: { fontFamily: "Poppins", fontWeight: "Regular" },
            },
            colors: { text: "#272a2f" },
          }}
        />
        <View style={styles.send}>
          <Text style={[styles.send1, styles.send1Typo]}>Send</Text>
        </View>
      </View>
      <Text style={[styles.yourPasswordReset, styles.send1Typo]}>
        Your password reset will be send in your registered email address.
      </Text>
      <Image
        style={styles.water2Icon}
        contentFit="cover"
        source={require("../assets/water-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    width: 374,
    position: "absolute",
  },
  send1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    height: 65,
    alignSelf: "stretch",
  },
  send1: {
    fontSize: FontSize.size_3xl,
    color: Color.white,
    width: 136,
    height: 33,
  },
  send: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorCrimson_100,
    height: 60,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_smi,
    marginTop: 115,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    top: 316,
    left: 20,
    alignItems: "center",
  },
  yourPasswordReset: {
    top: 420,
    left: 21,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    color: Color.colorGray_100,
    height: 56,
    width: 374,
    position: "absolute",
  },
  water2Icon: {
    top: 41,
    left: 116,
    borderRadius: Border.br_6xl,
    width: 159,
    height: 159,
    position: "absolute",
  },
  resetPassword: {
    backgroundColor: Color.white,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default ResetPassword;
