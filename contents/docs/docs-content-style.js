import { css } from "@emotion/react";

const styles = css({
  height: "100%",
  overflow: "hidden",
  marginLeft: "32px",
  "._list": {
    margin: "0",
    padding: "0",
    border: "none",
  },
  ".table-of-contents": {
    padding: "32px",
    paddingRight: "12px",
    borderRight: "var(--border-primary)",
    overflow: "hidden",
    "> div > ._list_body": {
      paddingRight: "32px",
      "> ._list-body_container": {
        padding: "0",
      },
    },
  },
  ".category-list": {
    "._list_body": {
      paddingRight: "20px",
    },
    "._list-body_container": {
      // rowGap: "12px",
    },
  },
});

export default styles;
