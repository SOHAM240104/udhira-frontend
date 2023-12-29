import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

type DonorCardType = {
  userImageUrl?: ImageSourcePropType;
  userName?: string;
  bloodType?: string;
  locationImageUrl?: ImageSourcePropType;
  address?: string;
  profileImageUrl?: ImageSourcePropType;

  /** Style props */
  yasinHossainTop?: number | string;
  aWidth?: number | string;
  mohammedpurDhakaLeft?: number | string;
  mohammedpurDhakaWidth?: number | string;
  mohammedpurDhakaTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DonorCard = ({
  userImageUrl,
  userName,
  bloodType,
  locationImageUrl,
  address,
  profileImageUrl,
  yasinHossainTop,
  aWidth,
  mohammedpurDhakaLeft,
  mohammedpurDhakaWidth,
  mohammedpurDhakaTop,
}: DonorCardType) => {
  const donor1Style = useMemo(() => {
    return {
      ...getStyleValue("top", yasinHossainTop),
    };
  }, [yasinHossainTop]);

  const yasinHossainStyle = useMemo(() => {
    return {
      ...getStyleValue("width", aWidth),
    };
  }, [aWidth]);

  const aStyle = useMemo(() => {
    return {
      ...getStyleValue("left", mohammedpurDhakaLeft),
      ...getStyleValue("width", mohammedpurDhakaWidth),
      ...getStyleValue("top", mohammedpurDhakaTop),
    };
  }, [mohammedpurDhakaLeft, mohammedpurDhakaWidth, mohammedpurDhakaTop]);

  return (
    <View style={[styles.donor1, donor1Style]}>
      <Image
        style={styles.donor1Child}
        contentFit="cover"
        source={userImageUrl}
      />
      <View style={styles.donor11}>
        <Text style={[styles.yasinHossain, yasinHossainStyle]}>{userName}</Text>
        <View style={styles.bloodFrame}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.a, aStyle]}>{bloodType}</Text>
        </View>
        <View style={styles.mapPinParent}>
          <Image
            style={styles.mapPinIcon}
            contentFit="cover"
            source={locationImageUrl}
          />
          <Text style={[styles.mohammedpurDhaka, styles.textTypo]}>
            {address}
          </Text>
        </View>
        <View style={styles.phoneParent}>
          <Image
            style={styles.phoneIcon}
            contentFit="cover"
            source={profileImageUrl}
          />
          <Text style={[styles.text, styles.textTypo]}>+8801628162522</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donor1Child: {
    width: 85,
    height: 85,
    borderRadius: Border.br_3xs,
  },
  yasinHossain: {
    top: 0,
    letterSpacing: 0.3,
    color: Color.colorGray_300,
    width: 129,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 1,
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
  a: {
    top: 17,
    left: 5,
    letterSpacing: -1.4,
    color: Color.white,
    textAlign: "center",
    width: 26,
    height: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bloodFrame: {
    top: 10,
    left: 195,
    width: 35,
    height: 50,
    position: "absolute",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  mohammedpurDhaka: {
    width: 148,
    marginLeft: 9,
    height: 20,
  },
  mapPinParent: {
    top: 31,
    width: 173,
    height: 20,
    left: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  phoneIcon: {
    width: 20,
    overflow: "hidden",
    height: 20,
  },
  text: {
    width: 170,
    height: 17,
    marginLeft: 6,
  },
  phoneParent: {
    top: 57,
    left: 0,
    width: 196,
    paddingLeft: 0,
    height: 20,
    flexDirection: "row",
    position: "absolute",
  },
  donor11: {
    width: 230,
    height: 77,
    marginLeft: 26,
  },
  donor1: {
    top: 107,
    left: 20,
    backgroundColor: Color.white,
    shadowColor: "rgba(30, 30, 30, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 11,
    elevation: 11,
    shadowOpacity: 1,
    width: 374,
    height: 111,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
});

export default DonorCard;
