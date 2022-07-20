import { css } from "@emotion/react";

const styles = css({
  zIndex: "300",
  ".app-message_back": {
    flex: "1 0 auto",
  },
  ".message-alert_items": {
    position: "absolute",
    top: "20px",
    width: "100%",
    // padding: "5px 20px",
    // zIndex: "200",
  },
  ".message-prompt_items": {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    display: "none",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(2px)",
    /* z-index: "100", */
    "&.active": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // zIndex: "300",
    },
  },
});

export default styles;

// export const appMessageMotionVariant = {
  
// };
