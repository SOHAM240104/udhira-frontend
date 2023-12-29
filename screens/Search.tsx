import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Padding, Border, Color, FontFamily } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow1.png")}
      />
      <Text style={[styles.search1, styles.apply1Layout]}>Search</Text>
      <View style={styles.searchChild} />
      <View style={styles.searchItem} />
      <Image
        style={styles.searchInner}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={styles.search2}>{`Search `}</Text>
      <View style={styles.filtering}>
        <Text style={styles.filters}>Filters</Text>
        <Image
          style={[styles.filteringChild, styles.searchChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-13.png")}
        />
        <View style={styles.bloodType}>
          <Text style={styles.bloodType1}>Blood Type</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.locatoin, styles.locatoinFlexBox]}>
          <Text style={styles.bloodType1}>Location</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.locatoin1, styles.locatoinFlexBox]}>
          <Text style={styles.bloodType1}>Blood Bank</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.locatoin2, styles.locatoinFlexBox]}>
          <Text style={styles.bloodType1}>Donors</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.aWrapper, styles.wrapperContainerLayout]}>
          <Text style={[styles.a, styles.aLayout]}>A+</Text>
        </View>
        <View style={[styles.abWrapper, styles.abWrapperLayout]}>
          <Text style={[styles.ab, styles.aLayout]}>AB+</Text>
        </View>
        <View style={[styles.abContainer, styles.abWrapperLayout]}>
          <Text style={[styles.ab1, styles.aLayout]}>AB-</Text>
        </View>
        <View style={[styles.aContainer, styles.wrapperContainerLayout]}>
          <Text style={[styles.a1, styles.aLayout]}>A-</Text>
        </View>
        <View style={[styles.bWrapper, styles.wrapperContainerLayout]}>
          <Text style={[styles.b, styles.bTypo]}>B+</Text>
        </View>
        <View style={[styles.bContainer, styles.wrapperContainerLayout]}>
          <Text style={[styles.b1, styles.aLayout]}>B-</Text>
        </View>
        <View style={[styles.oWrapper, styles.wrapperContainerLayout]}>
          <Text style={[styles.o, styles.aLayout]}>O+</Text>
        </View>
        <View style={styles.apply}>
          <Text style={[styles.apply1, styles.bTypo]}>Apply</Text>
        </View>
      </View>
      <Image
        style={[styles.searchChild1, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-14.png")}
      />
      <Image
        style={[styles.searchChild2, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-20.png")}
      />
      <Image
        style={[styles.searchChild3, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-21.png")}
      />
      <Image
        style={[styles.searchChild4, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-21.png")}
      />
      <Image
        style={[styles.searchChild5, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-14.png")}
      />
      <Image
        style={[styles.searchChild6, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-20.png")}
      />
      <Image
        style={[styles.searchChild7, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-20.png")}
      />
      <Image
        style={[styles.searchChild8, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-20.png")}
      />
      <Image
        style={[styles.searchChild9, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-20.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  apply1Layout: {
    height: 34,
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
  },
  searchChildLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  locatoinFlexBox: {
    width: 344,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 14,
    position: "absolute",
  },
  wrapperContainerLayout: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
    alignItems: "center",
    height: 28,
    position: "absolute",
  },
  aLayout: {
    height: 23,
    fontSize: FontSize.size_base,
  },
  abWrapperLayout: {
    top: 170,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_0,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_4xl,
    alignItems: "center",
    height: 28,
    width: 48,
    position: "absolute",
  },
  bTypo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  backArrowIcon: {
    top: 38,
    width: 44,
    height: 44,
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
  },
  search1: {
    top: 43,
    left: 113,
    width: 189,
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 34,
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  searchChild: {
    shadowColor: "rgba(44, 44, 44, 0.1)",
    shadowRadius: 49,
    elevation: 49,
    width: 315,
    height: 48,
    top: 106,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_8xs,
    left: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  searchItem: {
    left: 346,
    width: 48,
    backgroundColor: Color.colorCrimson_100,
    height: 48,
    top: 106,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  searchInner: {
    top: 114,
    left: 359,
    height: 32,
    width: 22,
    position: "absolute",
  },
  searchIcon: {
    top: 118,
    left: 38,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  search2: {
    top: 115,
    left: 82,
    color: Color.colorLightgray_100,
    width: 117,
    height: 28,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    position: "absolute",
  },
  filters: {
    top: 12,
    left: 145,
    width: 85,
    height: 26,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.4,
    position: "absolute",
  },
  filteringChild: {
    top: 52,
    left: 0,
    width: 375,
  },
  bloodType1: {
    letterSpacing: 0.3,
    width: 108,
    fontSize: FontSize.size_base,
    height: 26,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  vectorIcon: {
    width: 9,
    height: 4,
  },
  bloodType: {
    top: 72,
    width: 346,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 14,
    alignItems: "center",
    position: "absolute",
  },
  vectorIcon1: {
    width: 4,
    height: 9,
  },
  locatoin: {
    top: 239,
  },
  locatoin1: {
    top: 293,
  },
  locatoin2: {
    top: 347,
  },
  a: {
    width: 23,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  aWrapper: {
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
    left: 19,
  },
  ab: {
    width: 33,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  abWrapper: {
    left: 19,
  },
  ab1: {
    width: 32,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  abContainer: {
    left: 97,
  },
  a1: {
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 22,
  },
  aContainer: {
    left: 94,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
  },
  b: {
    height: 23,
    fontSize: FontSize.size_base,
    width: 22,
  },
  bWrapper: {
    left: 169,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
    backgroundColor: Color.colorCrimson_100,
  },
  b1: {
    width: 20,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  bContainer: {
    left: 244,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
  },
  o: {
    color: Color.colorDimgray,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 24,
  },
  oWrapper: {
    left: 319,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_0,
    width: 40,
    borderRadius: Border.br_4xl,
    top: 121,
  },
  apply1: {
    width: 69,
    height: 34,
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xl,
    color: Color.white,
  },
  apply: {
    top: 568,
    left: 108,
    borderRadius: Border.br_71xl,
    width: 156,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorCrimson_100,
    height: 44,
    position: "absolute",
  },
  filtering: {
    top: 183,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(55, 55, 55, 0.1)",
    shadowRadius: 50,
    elevation: 50,
    height: 631,
    width: 374,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  searchChild1: {
    top: 414,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild2: {
    top: 289,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild3: {
    top: 235,
    left: 19,
    width: 374,
  },
  searchChild4: {
    top: 246,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild5: {
    top: 457,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild6: {
    top: 467,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild7: {
    top: 510,
    left: 19,
    width: 374,
  },
  searchChild8: {
    top: 520,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  searchChild9: {
    top: 562,
    width: 374,
    left: 20,
    maxHeight: "100%",
  },
  search: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Search;
