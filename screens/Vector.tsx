import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: Color.systemBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 1184,
  },
});

export default Vector;
