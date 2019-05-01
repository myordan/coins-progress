import { StyleSheet } from "react-native";
import { memoize } from "./helpers";

const memoized = memoize(
  ({
    backgroundDarker,
    backgroundShadow,
    borderRadius,
    height,
    raiseLevel,
    stateWidth,
    stretch,
    width
  }) => {
    const calcHeight = height;
    const calcWidth = stretch ? "100%" : width || stateWidth || null;

    const dimensionsDiff = {
      width: calcWidth,
      height: calcHeight - raiseLevel
    };

    return StyleSheet.create({
      container: {
        height: calcHeight,
        width: calcWidth
      },
      shadow: {
        bottom: -raiseLevel / 2,
        height: height - raiseLevel,
        borderRadius,
        backgroundColor: backgroundShadow
      },
      bottom: {
        borderRadius,
        backgroundColor: backgroundDarker,
        ...dimensionsDiff
      },
      content: {
        ...dimensionsDiff,
        borderRadius
      },
    });
  }
);

export const getStyles = ({
  backgroundDarker,
  backgroundShadow,
  borderRadius,
  height,
  raiseLevel,
  stateWidth,
  stretch,
  width
}) => {
  return memoized({
    backgroundDarker,
    backgroundShadow,
    borderRadius,
    height,
    raiseLevel,
    stateWidth,
    stretch,
    width
  });
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    zIndex: 10
  },
  container__view: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  shadow: {
    width: "98%",
    position: "absolute",
    left: "1%"
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    overflow: "hidden"
  }
});