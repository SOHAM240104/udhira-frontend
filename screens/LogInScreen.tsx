import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LogInScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logInScreen}>
      <TextInput
        style={[styles.logInScreenChild, styles.logLayout]}
        placeholder="johndoe@gmail.com"
        mode="outlined"
        placeholderTextColor="#272a2f"
        theme={{
          fonts: { regular: { fontFamily: "Poppins", fontWeight: "Regular" } },
          colors: { text: "#272a2f" },
        }}
      />
      <TextInput
        style={[styles.logInScreenItem, styles.logLayout]}
        placeholder="*******"
        mode="outlined"
        theme={{ colors: { background: "#f8f8f8" } }}
      />
      <Text style={styles.dontHaveAnContainer}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.registerNow}>Register Now</Text>
        <Text style={styles.dontHaveAn}>.</Text>
      </Text>
      <Button
        style={styles.forgotPassword}
        mode="elevated"
        labelStyle={styles.forgotPasswordBtn}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        Forgot Password?
      </Button>
      <Button
        style={styles.register}
        mode="contained"
        labelStyle={styles.registerBtn}
        onPress={() => navigation.navigate("HomePage")}
        contentStyle={styles.registerBtn1}
      >
        LOG IN
      </Button>
      <Image
        style={styles.water2Icon}
        contentFit="cover"
        source={require("../assets/water-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordBtn: {
    color: "#ff2156",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
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
  logLayout: {
    height: 65,
    borderRadius: Border.br_8xs,
    width: 374,
    left: 20,
    position: "absolute",
  },
  logInScreenChild: {
    top: 376,
  },
  logInScreenItem: {
    top: 461,
  },
  dontHaveAn: {
    color: Color.colorGray_100,
  },
  registerNow: {
    color: Color.colorCrimson_100,
  },
  dontHaveAnContainer: {
    top: 840,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    height: 29,
    width: 374,
    left: 20,
    position: "absolute",
  },
  forgotPassword: {
    top: 686,
    left: 128,
    position: "absolute",
  },
  register: {
    top: 611,
    alignItems: "center",
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  water2Icon: {
    top: 48,
    left: 116,
    borderRadius: Border.br_6xl,
    width: 159,
    height: 159,
    position: "absolute",
  },
  logInScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default LogInScreen;
