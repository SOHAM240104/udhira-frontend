import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VerifyScreen1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verifyScreen}>
      <Button
        style={styles.verify}
        mode="outlined"
        labelStyle={styles.verifyBtn}
        onPress={() => navigation.navigate("VerifyScreen")}
        contentStyle={styles.verifyBtn1}
      >
        Verify
      </Button>
      <Text style={styles.resendCode49}>Resend Code 49 Sec</Text>
      <Image
        style={styles.water2Icon}
        contentFit="cover"
        source={require("../assets/water-1.png")}
      />
      <Input
        style={styles.frame}
        placeholder="6"
        placeholderTextColor="#272a2f"
        textStyle={styles.frameTextInputText}
        label="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verifyBtn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  verifyBtn1: {
    paddingHorizontal: 0,
    paddingVertical: 13,
    borderRadius: 30,
    height: 60,
    width: 374,
  },
  frameTextInputText: {
    fontFamily: "Poppins-Regular",
    color: "#272a2f",
  },
  verify: {
    top: 496,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  resendCode49: {
    top: 451,
    left: 157,
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorCrimson_100,
    textAlign: "right",
    width: 237,
    height: 29,
    position: "absolute",
  },
  water2Icon: {
    top: 44,
    left: 105,
    borderRadius: Border.br_6xl,
    width: 159,
    height: 159,
    position: "absolute",
  },
  frame: {
    top: 341,
    left: 49,
    width: 317,
    position: "absolute",
    overflow: "hidden",
  },
  verifyScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default VerifyScreen1;
