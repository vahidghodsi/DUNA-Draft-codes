import { css } from "@emotion/react";

const styles = css({
  position: "absolute",
  left: "0",
  bottom: "0",
  // moved to framer motion
  // height: "74px",
  // width: "25vw",
  // minWidth: "320px",
  "._modal-container": {
    height: "100%",
    width: "100%",
    padding: "20px",
    overflow: "hidden",
    form: {
      height: "100%",
      // gap: "0",
    },
    // "._grid-2row-fix-top": {
    // },
    // "._grid-3col-fix-left-right": {
    // },
    "&:hover": {
      padding: "20px",
      border: "var(--border-primary)",
    },
    "._head": {
      height: "24px",
      overflow: "hidden",
    },
    "._body": {
      "> ._grid-2row-fix-top": {
        height: "100%",
      },
    },
    "._button": {
      width: "110px",
    },
  },

  "&._minimized": {
    "._modal-container": {
      boxShadow: "none",
      gap: "0",
    },
    "._modal-container:not(:hover)": {
      padding: "21px",
      border: "1px dashed var(--color-secondary)",
    },
    "._head": {
      height: "0",
    },
    ".modal-content": {
      overflow: "hidden",
    },
  },
  "&._open": {
    // moved to framer motion
    // height: "100%",
  },
  "&._expanded": {
    // moved to framer motion
    // height: "100%",
    // width: "100%",
    // ===============
    // height: "calc(100% + 120px)",
    // bottom: "-10px",
    // width: "calc(100% + 50px)",
    // left: "-25px",
    // form: {
    //   gap: "12px",
    // },
  },
  // =====
  "._input": {
    margin: "0 !important",
  },
  "._title": {
    margin: "0 !important",
  },
  ".tumbnail": {
    width: "30px",
    height: "30px",
    border: "var(--border-secondary)",
    borderRadius: "5px",
  },
  "#meeintg_title:not(:focus)": {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    // marginRight: "-12px"
  },
  "#meeting_date:not(:focus)": {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "-12px",
  },
  "#meeintg_title:focus, #meeting_date:focus": {
    zIndex: "50",
  },
  // ===== transitions

  // transition: "var(--transition-primary)",
  " > div, form, ._head, ._body,": {
    // transition: "var(--transition-primary)",
    // transitionProperty: "height, width, grid, gap, left, bottom",
    // transitionDuration: "1s",
  },
});

export default styles;

export const projectMeetingAddMotionVariant = {
  initial: { left: "0", bottom: "0", height: "74px", width: "25vw", minWidth: "320px" },
  animate: { height: "74px", width: "25vw", transition: { duration: 0.3 } },
  animateOpen: { height: "100%", transition: { duration: 0.3 } },
  animateExpanded: {
    height: "calc(100% + 110px)",
    width: "calc(100%)",
    transition: { 
      duration: 0.3, 
      ease: "easeInOut"
      // type: "spring", 
      // stiffness: "100", 
      // damping: "5", 
      // mass: "10" 
    },
  },
};
