// /* ---------------- FRAMER MOTION VARIANTS ------------------ */

const transition_types = {
  IN_PRIMARY: {
    delay: 0,
    duration: 0.3,
    ease: "easeInOut",
  },
  OUT_PRIMARY: {
    delay: 0.1,
    duration: 0.3,
    ease: "easeInOut",
  },
  // for animations that involves display of 'none'
  DISPLAY_IN_PRIMARY: {
    delay: 0.2,
    duration: 0.2,
    ease: "easeInOut",
  },
  DISPLAY_OUT_PRIMARY: {
    delay: 0.0,
    duration: 0.17,
    ease: "easeInOut",
  },
};

export const FADE_IN_OUT = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: transition_types.IN_PRIMARY,
  },
  exit: {
    opacity: 0,
    transition: transition_types.OUT_PRIMARY,
  },
};

// because the sibling elements supposed to coexist in the same position, initially they need to have 'none' display
// otherwise they force the whole layout for a moment
export const FADE_DISPLAY_IN_OUT = {
  initial: {
    display: "none",
    opacity: 0,
  },
  animate: {
    display: "block",
    opacity: 1,
    transition: transition_types.DISPLAY_IN_PRIMARY,
  },
  exit: {
    opacity: 0,
    transition: transition_types.DISPLAY_OUT_PRIMARY,
    transitionEnd: { display: "none" },
  },
};

export const SLIDE_DOWN_UP = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition_types.IN_PRIMARY,
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: transition_types.OUT_PRIMARY,
  },
};

export const SLIDE_UP_DOWN = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition_types.IN_PRIMARY,
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: transition_types.OUT_PRIMARY,
  },
};

export const SLIDE_RIGHT_LEFT = {
  initial: {
    x: -30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: transition_types.IN_PRIMARY,
  },
  exit: {
    x: -30,
    opacity: 0,
    transition: transition_types.OUT_PRIMARY,
  },
};

export const SLIDE_LEFT_RIGHT = {
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: transition_types.IN_PRIMARY,
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: transition_types.OUT_PRIMARY,
  },
};

// export const animation_Templates = {
//   fade_in_out,
//   fade_display_in_out,
//   slide_down_up,
//   slide_up_down,
//   slide_right_left,
//   slide_left_right,
// };
