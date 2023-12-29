import * as React from "react";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registerScreen}>
      <View style={styles.registerParent}>
        <Button
          style={styles.register}
          mode="contained"
          labelStyle={styles.registerBtn}
          onPress={() => navigation.navigate("LogInScreen")}
          contentStyle={styles.registerBtn1}
        >
          REGISTER
        </Button>
        <TextInput
          style={[styles.frameChild, styles.framePosition]}
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
        <TextInput
          style={[styles.frameItem, styles.framePosition]}
          placeholder="John Doe"
          mode="outlined"
          placeholderTextColor="#272a2f"
          theme={{
            fonts: {
              regular: { fontFamily: "Poppins", fontWeight: "Regular" },
            },
            colors: { text: "#272a2f" },
          }}
        />
        <Image
          style={[styles.antDesignuserOutlinedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/antdesignuseroutlined.png")}
        />
        <TextInput
          style={[styles.frameInner, styles.frameFlexBox]}
          placeholder="password"
          mode="outlined"
          theme={{ colors: { background: "#f8f8f8" } }}
        />
        <TextInput
          style={[styles.frameTextinput, styles.frameLayout]}
          placeholder="9876543210"
          mode="outlined"
          placeholderTextColor="#272a2f"
          theme={{
            fonts: { regular: { fontFamily: "Play", fontWeight: "Regular" } },
            colors: { text: "#272a2f" },
          }}
        />
        <Image
          style={[styles.carbonphoneIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/carbonphone.png")}
        />
        <TextInput
          style={[styles.frameChild1, styles.frameLayout]}
          placeholder="Blood Group"
          mode="outlined"
          placeholderTextColor="#272a2f"
          theme={{
            fonts: { regular: { fontFamily: "Play", fontWeight: "Regular" } },
            colors: { text: "#272a2f" },
          }}
        />
        <Image
          style={[styles.notodropOfBloodIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notodropofblood.png")}
        />
        <TextInput
          style={[styles.frameChild2, styles.frameFlexBox]}
          placeholder="University "
          mode="outlined"
          placeholderTextColor="#272a2f"
          theme={{
            fonts: { regular: { fontFamily: "Play", fontWeight: "Regular" } },
            colors: { text: "#272a2f" },
          }}
        />
      </View>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.logIn}>Log In</Text>
        <Text style={styles.alreadyHaveAn}>.</Text>
      </Text>
      <Image
        style={[styles.registerScreenChild, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenItem, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenInner, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenChild1, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.registerScreenChild2, styles.registerChildLayout]}
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
  registerBtn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  registerBtn1: {
    borderRadius: 30,
    height: 60,
    width: 374,
  },
  framePosition: {
    paddingRight: Padding.p_lgi,
    paddingLeft: Padding.p_7xl,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    left: 0,
    width: 374,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 26,
    position: "absolute",
    overflow: "hidden",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_7xl,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    left: 0,
    width: 374,
    position: "absolute",
  },
  frameLayout: {
    paddingHorizontal: Padding.p_67xl,
    justifyContent: "flex-end",
    height: 59,
    borderRadius: Border.br_8xs,
    left: 0,
    width: 374,
    position: "absolute",
  },
  registerChildLayout: {
    maxWidth: "100%",
    left: 85,
    height: 59,
    position: "absolute",
    overflow: "hidden",
  },
  register: {
    top: 498,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 77,
    paddingTop: Padding.p_mid,
    paddingBottom: Padding.p_mid,
    alignItems: "center",
  },
  frameItem: {
    top: 0,
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_lg,
  },
  antDesignuserOutlinedIcon: {
    top: 20,
  },
  frameInner: {
    top: 154,
  },
  frameTextinput: {
    top: 232,
    paddingVertical: Padding.p_mid,
  },
  carbonphoneIcon: {
    top: 251,
  },
  frameChild1: {
    top: 309,
    paddingVertical: 15,
  },
  notodropOfBloodIcon: {
    top: 326,
  },
  frameChild2: {
    top: 386,
  },
  registerParent: {
    left: 20,
    height: 558,
    width: 374,
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
    top: 839,
    left: 25,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 365,
    height: 30,
    position: "absolute",
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

export default RegisterScreen;
