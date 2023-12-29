import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const DonorContainer = () => {
  return (
    <View style={styles.donor6}>
      <Image
        style={styles.donor6Child}
        contentFit="cover"
        source={require("../assets/rectangle-245.png")}
      />
      <View style={styles.donor1}>
        <Text style={[styles.haymaSamia, styles.haymaSamiaTypo]}>
          Hayma Samia
        </Text>
        <View style={styles.bloodFrame}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={styles.ab}>AB+</Text>
        </View>
        <View style={styles.mapPinParent}>
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={require("../assets/mappin6.png")}
          />
          <Text style={[styles.dhanmondhiDhaka, styles.haymaSamiaTypo]}>
            Dhanmondhi, Dhaka
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  haymaSamiaTypo: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donor6Child: {
    width: 85,
    height: 85,
    borderRadius: Border.br_3xs,
  },
  haymaSamia: {
    top: 0,
    letterSpacing: 0.3,
    color: Color.colorGray_300,
    width: 156,
    fontSize: FontSize.size_base,
    height: 20,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  ab: {
    top: 18,
    left: 3,
    letterSpacing: -1.4,
    color: Color.white,
    textAlign: "center",
    width: 30,
    height: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bloodFrame: {
    top: 10,
    left: 194,
    width: 35,
    height: 50,
    position: "absolute",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  dhanmondhiDhaka: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    width: 148,
  },
  mapPinParent: {
    top: 31,
    width: 173,
    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  donor1: {
    width: 229,
    height: 60,
  },
  donor6: {
    top: 870,
    left: 20,
    backgroundColor: Color.white,
    shadowColor: "rgba(65, 65, 65, 0.1)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 49,
    elevation: 49,
    shadowOpacity: 1,
    width: 374,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_smi,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
});

export default DonorContainer;
