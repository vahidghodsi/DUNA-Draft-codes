import { css } from "@emotion/react";
import { SLIDE_LEFT_RIGHT } from "@models/animation-presets";

const styles = css({
  position: "absolute",
  // top: "13vh",
  // right: "40px",
  // width: "45vw",
  // minWidth: "360px",
  // height: "74vh",
  borderRadius: "5px",
  background: "var(--background)",
  "._modal-container": {
    borderColor: "var(--color-dev)",
    // background: "var(--background-dev)",
  },
  section: {
    "> *": {
      marginLeft: "0",
      marginRight: "0",
    },
    "._section-container": {
      height: "100%",
      "._body": {
        position: "relative",
        gap: "8px",
        "._backdrop": {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&._active": {
            height: "100%",
            width: "100%",
            zIndex: 100,
          },
        },
      },
      "._head": {
        padding: "8px",
        paddingBottom: "0",
      },
      "._actions": {
        padding: "8px",
        paddingTop: "0",
      },
    },
    "._sub-section": {
      marginBottom: "12px",
      borderBottom: "var(--borer-secondary)",
      gap: "8px",
    },
    "._actions": {
      display: "flex",
      // justifyContent: "space-between",
      // flexDirection: "column",
    },
    "._title:not(._tabs-menu .tabs ._title)": {
      margin: "0",
      // marginBottom: "12px",
      // paddingBottom: "12px",
      // borderBottom: "var(--border-secondary)",
    },
    "._list": {
      margin: "0",
    },
    "._button": {
      paddingLeft: "6px",
      paddingRight: "6px",
      height: "auto",
      // margin: "0",
    },
  },
});

export default styles;

export const appDevMotionVariant = {
  initial: {
    ...SLIDE_LEFT_RIGHT.initial,
    right: "40px",
    top: "13vh",
    width: "45vw",
    minWidth: "360px",
    height: "74vh",
    zIndex: "400",
  },
  animate: {
    ...SLIDE_LEFT_RIGHT.animate,
    // ** since animate switches, these factors should be included here as well
    top: "13vh",
    width: "45vw",
    minWidth: "360px",
    height: "74vh",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      //   // type: "spring",
      //   // stiffness: "100",
      //   // damping: "5",
      //   // mass: "10"
    },
  },
  // animateOpen: { height: "100%", transition: { duration: 0.3 } },
  animateExpanded: {
    x: 0,
    top: "10vh",
    height: "calc(100% - 20vh)",
    width: "calc(100vw - 80px)",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      // type: "spring",
      // stiffness: "100",
      // damping: "5",
      // mass: "10"
    },
  },
  exit: { ...SLIDE_LEFT_RIGHT.exit },
  drag: { scale: 1.02, boxShadow: "var(--shadow-hover" },
};
