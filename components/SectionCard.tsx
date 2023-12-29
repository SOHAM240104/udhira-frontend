import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout3]}>
      <View style={[styles.frameChild, styles.frameChildPosition]} />
      <View style={[styles.frameItem, styles.frameChildLayout2]} />
      <View style={[styles.frameInner, styles.frameChildLayout2]} />
      <View style={[styles.rectangleView, styles.frameChildPosition]} />
      <View style={[styles.frameChild1, styles.frameChildLayout2]} />
      <View style={[styles.frameChild2, styles.frameChildLayout2]} />
      <Image
        style={[styles.groupIcon, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-34.png")}
      />
      <Image
        style={[styles.frameChild3, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-35.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <Image
          style={styles.frameChild5}
          contentFit="cover"
          source={require("../assets/group-191.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.frameChildLayout} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={[styles.frameChild7, styles.frameChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-38.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout3: {
    width: 411,
    left: 0,
  },
  frameChildPosition: {
    height: 64,
    backgroundColor: Color.white,
    top: 0,
    position: "absolute",
  },
  frameChildLayout2: {
    width: 82,
    height: 64,
    backgroundColor: Color.white,
    top: 0,
    position: "absolute",
  },
  frameChildLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.79%",
    position: "absolute",
  },
  rectangleLayout: {
    alignItems: "center",
    height: 65,
    width: 32,
    top: 16,
    position: "absolute",
  },
  frameChildLayout: {
    height: 32,
    width: 32,
  },
  frameChild: {
    shadowColor: "rgba(75, 75, 75, 0.11)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    width: 411,
    left: 0,
  },
  frameItem: {
    left: 0,
    width: 82,
  },
  frameInner: {
    left: 82,
  },
  rectangleView: {
    left: 164,
    width: 83,
  },
  frameChild1: {
    left: 247,
  },
  frameChild2: {
    left: 329,
  },
  groupIcon: {
    right: "86.13%",
    left: "6.08%",
    bottom: "0.12%",
    top: "60.26%",
    height: "39.62%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.79%",
  },
  frameChild3: {
    right: "66.18%",
    left: "26.03%",
    bottom: "0.12%",
    top: "60.26%",
    height: "39.62%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.79%",
  },
  frameChild4: {
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 2,
  },
  frameChild5: {
    width: 26,
    marginTop: 6,
    height: 27,
  },
  rectangleGroup: {
    left: 189,
  },
  vectorIcon: {
    width: 21,
    marginTop: 5,
    height: 27,
  },
  rectangleContainer: {
    left: 272,
  },
  frameChild7: {
    height: "40.45%",
    top: "54.57%",
    right: "6.08%",
    bottom: "4.98%",
    left: "86.13%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.79%",
  },
  rectangleParent: {
    top: 759,
    height: 84,
    position: "absolute",
    width: 411,
  },
});

export default SectionCard;
