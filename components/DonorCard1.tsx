import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

type DonorCard1Type = {
  userImageUrl?: ImageSourcePropType;
  userDescription?: string;
  locationAddress?: string;
  bloodType?: string;

  /** Style props */
  propTop?: number | string;
  propWidth?: number | string;
  propHeight?: number | string;
  propAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DonorCard1 = ({
  userImageUrl,
  userDescription,
  locationAddress,
  bloodType,
  propTop,
  propWidth,
  propHeight,
  propAlignSelf,
}: DonorCard1Type) => {
  const donor4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const swethaStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propHeight, propAlignSelf]);

  return (
    <View style={[styles.donor4, styles.donorFlexBox, donor4Style]}>
      <Image
        style={styles.donor4Child}
        contentFit="cover"
        source={userImageUrl}
      />
      <View style={[styles.donor1, styles.donorFlexBox]}>
        <View style={styles.swethaParent}>
          <Text style={[styles.swetha, styles.swethaTypo, swethaStyle]}>
            {userDescription}
          </Text>
          <View style={[styles.mapPinParent, styles.donorFlexBox]}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin6.png")}
            />
            <Text style={[styles.lakshmipur, styles.swethaTypo]}>
              {locationAddress}
            </Text>
          </View>
        </View>
        <View style={styles.bloodFrame}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={styles.o}>{bloodType}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  donorFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  swethaTypo: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  donor4Child: {
    width: 85,
    height: 85,
    borderRadius: Border.br_3xs,
  },
  swetha: {
    letterSpacing: 0.3,
    color: Color.colorGray_300,
    width: 115,
    fontSize: FontSize.size_base,
    height: 20,
    textAlign: "left",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  lakshmipur: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    width: 148,
  },
  mapPinParent: {
    alignSelf: "stretch",
    marginTop: 14,
  },
  swethaParent: {
    width: 173,
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
  o: {
    top: 18,
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
    width: 35,
    height: 50,
  },
  donor1: {
    width: 229,
  },
  donor4: {
    top: 598,
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
});

export default DonorCard1;
