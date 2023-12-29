import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboarding3}>
      <Text style={styles.youCanDonate}>
        You can donate for ones in need and request blood if you need.
      </Text>
      <Image
        style={styles.water1Icon}
        contentFit="cover"
        source={require("../assets/water-1.png")}
      />
      <Button
        style={[styles.frame, styles.frameFlexBox]}
        uppercase={false}
        mode="contained"
        labelStyle={styles.frameBtn}
        onPress={() => navigation.navigate("LogInScreen")}
        contentStyle={styles.frameBtn1}
      >
        LOG IN
      </Button>
      <Button
        style={[styles.frame1, styles.frameFlexBox]}
        mode="outlined"
        labelStyle={styles.frame1Btn}
        contentStyle={styles.frame1Btn1}
      >
        REGISTER
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBtn: {
    color: "#ff2156",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  frameBtn1: {
    borderRadius: 30,
    height: 60,
    width: 374,
  },
  frame1Btn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  frame1Btn1: {
    borderRadius: 30,
    height: 60,
    width: 374,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  youCanDonate: {
    top: 415,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 374,
    height: 67,
    left: 20,
    position: "absolute",
  },
  water1Icon: {
    top: 51,
    left: 127,
    borderRadius: Border.br_6xl,
    width: 159,
    height: 159,
    position: "absolute",
  },
  frame: {
    top: 571,
    borderStyle: "solid",
    borderColor: Color.colorCrimson_100,
    borderWidth: 2,
  },
  frame1: {
    top: 652,
  },
  onboarding3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding3;
