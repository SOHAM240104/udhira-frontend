import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

type DonorCardFormType = {
  imageIconUrl?: ImageSourcePropType;
  bloodType?: string;
  personImageUrl?: string;
  itemCode?: ImageSourcePropType;
  locationAddress?: string;

  /** Style props */
  bloodFrameTop?: number | string;
  frameViewLeft?: number | string;
  frameViewWidth?: number | string;
  frameViewTop?: number | string;
  mohammedpurDhakaWidth?: number | string;
  mohammedpurDhakaHeight?: number | string;
  mohammedpurDhakaAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DonorCardForm = ({
  imageIconUrl,
  bloodType,
  personImageUrl,
  itemCode,
  locationAddress,
  bloodFrameTop,
  frameViewLeft,
  frameViewWidth,
  frameViewTop,
  mohammedpurDhakaWidth,
  mohammedpurDhakaHeight,
  mohammedpurDhakaAlignSelf,
}: DonorCardFormType) => {
  const donor11Style = useMemo(() => {
    return {
      ...getStyleValue("top", bloodFrameTop),
    };
  }, [bloodFrameTop]);

  const a1Style = useMemo(() => {
    return {
      ...getStyleValue("left", frameViewLeft),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("top", frameViewTop),
    };
  }, [frameViewLeft, frameViewWidth, frameViewTop]);

  const sohamStyle = useMemo(() => {
    return {
      ...getStyleValue("width", mohammedpurDhakaWidth),
      ...getStyleValue("height", mohammedpurDhakaHeight),
      ...getStyleValue("alignSelf", mohammedpurDhakaAlignSelf),
    };
  }, [
    mohammedpurDhakaWidth,
    mohammedpurDhakaHeight,
    mohammedpurDhakaAlignSelf,
  ]);

  return (
    <View style={[styles.donor1, styles.donor1FlexBox, donor11Style]}>
      <Image
        style={styles.donor1Child}
        contentFit="cover"
        source={imageIconUrl}
      />
      <View style={styles.donor11}>
        <View style={styles.bloodFrame}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.a, a1Style]}>{bloodType}</Text>
        </View>
        <View style={styles.sohamParent}>
          <Text style={[styles.soham, styles.sohamTypo, sohamStyle]}>
            {personImageUrl}
          </Text>
          <View style={[styles.mapPinParent, styles.donor1FlexBox]}>
            <Image
              style={styles.phoneLayout}
              contentFit="cover"
              source={itemCode}
            />
            <Text style={[styles.mohammedpurDhaka, styles.sohamTypo]}>
              {locationAddress}
            </Text>
          </View>
        </View>
        <View style={[styles.phone, styles.phoneLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  donor1FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  sohamTypo: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  phoneLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  donor1Child: {
    width: 85,
    height: 85,
    borderRadius: Border.br_3xs,
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
    top: 2,
    left: 195,
    width: 35,
    height: 50,
    position: "absolute",
  },
  soham: {
    letterSpacing: 0.3,
    color: Color.colorGray_300,
    width: 129,
    fontSize: FontSize.size_base,
    height: 20,
    textAlign: "left",
  },
  mohammedpurDhaka: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    width: 148,
  },
  mapPinParent: {
    alignSelf: "stretch",
    marginTop: 14,
  },
  sohamParent: {
    top: 0,
    left: 1,
    width: 173,
    position: "absolute",
  },
  phone: {
    top: 49,
    left: 4,
    transform: [
      {
        rotate: "15deg",
      },
    ],
    position: "absolute",
  },
  donor11: {
    width: 230,
    height: 69,
  },
  donor1: {
    top: 190,
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

export default DonorCardForm;
