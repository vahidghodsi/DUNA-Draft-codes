import { css } from "@emotion/react";

const styles = css({
  // transition: "var(--transition-primary)",
  ".tumbnail": {
    // margin: "12px 0",
    width: "30px",
    height: "30px",
    border: "var(--border-secondary)",
    borderRadius: "50%",
  },
  ":not(.menu-holder) ._title": {
    margin: "0 !important",
    //   ".content": {
    //     whiteSpace: "normal",
    //     overflowWrap: "break-word",
    //   },
    //   ".sub-content": {
    //     fontSize: "11px",
    //   },
  },
  ".menu-holder ._title": {
    margin: "8px !important",
  },
  "._message_content": {
    // margin: "12px 0",
    padding: "20px",
    border: "var(--border-secondary)",
    borderRadius: "5px",
  },
  "._profile-tumbnail": {
    margin: "0px",
    marginTop: "24px",
    height: "24px !important",
    width: "24px !important",
    "._avatar": {
      height: "24px !important",
      width: "24px !important",
    },
  },
  "._message_info": {
    marginTop: "24px",
    height: "fit-content",
    justifyItems: "center",
    "._date": {
      height: "20px !important",
    },
    "._profile-tumbnail": {
      margin: "0px !important",
      height: "16px !important",
      width: "16px !important",
      "._avatar": {
        height: "16px !important",
        width: "16px !important",
      },
    },
  },
});

export default styles;
