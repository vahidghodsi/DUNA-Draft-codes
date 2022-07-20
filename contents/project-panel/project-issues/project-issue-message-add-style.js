import { css } from "@emotion/react";

const styles = css({
  margin: "0 20px 0 8px",
  "*": {
    transition: "var(--transition-primary)",
  },
  "._message-content ": {
    padding: "20px",
    border: "var(--border-secondary)",
    borderRadius: "5px",
    // gap: "0",
    // ".body": {
    //   // overflow: "hidden",
    //   height: "0",
    // },
  },
  "._profile-tumbnail": {
    margin: "0px",
    marginTop: "16px",
    height: "24px !important",
    width: "24px !important",
    "._avatar": {
      height: "24px !important",
      width: "24px !important",
    },
  },
  "._form": {
    height: "100%",
  },
  "&._active": {
    "._message-content ": {
      gap: "12px",

      ".body": {
        height: "150px",
      },
    },
  },
});

export default styles;
