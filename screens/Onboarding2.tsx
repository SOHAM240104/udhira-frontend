import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Button as RNKButton } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboarding2}>
      <View style={styles.frameFlexBox}>
        <Image
          style={styles.bloodTestrafikiIcon}
          contentFit="cover"
          source={require("../assets/bloodtestrafiki.png")}
        />
        <ScrollView
          style={styles.ellipseParent}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <View style={styles.frameItem} />
        </ScrollView>
      </View>
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View style={styles.frame1FlexBox}>
          <Text style={[styles.postABlood, styles.postABloodTypo]}>
            Post A Blood Request
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.postABloodTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            tristique tristique quam in.
          </Text>
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Button
            style={styles.skip}
            mode="outlined"
            labelStyle={styles.skipBtn}
            onPress={() => navigation.navigate("LogInScreen")}
          >
            Skip
          </Button>
          <RNKButton
            style={styles.next}
            title="Next"
            size="medium"
            status="primary"
            appearance="filled"
            color="#ff2156"
            textStyle={styles.nextText}
            onPress={() => navigation.navigate("Onboarding3")}
          >
            Next
          </RNKButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  skipBtn: {
    color: "#3a4351",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
  nextText: {
    fontFamily: "Poppins-Regular",
  },
  frame1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  postABloodTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  bloodTestrafikiIcon: {
    maxWidth: "100%",
    height: 284,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  frameChild: {
    width: 10,
    height: 10,
  },
  frameItem: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorCrimson_100,
    width: 45,
    marginLeft: 16,
    height: 10,
  },
  ellipseParent: {
    maxHeight: 10,
    marginTop: 269,
    height: 10,
    width: "100%",
  },
  postABlood: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_300,
    width: 254,
    height: 39,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_100,
    marginTop: 38,
    alignSelf: "stretch",
  },
  skip: {
    flex: 1,
  },
  next: {
    marginLeft: 274,
    flex: 1,
  },
  frame2: {
    flexDirection: "row",
    marginTop: 175,
  },
  frame1: {
    marginTop: -215,
    overflow: "hidden",
  },
  onboarding2: {
    backgroundColor: Color.white,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_25xl,
    paddingBottom: 116,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Onboarding2;
