import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  height: "100%",
  display: "grid",
  gridGap: "20px",
  gridTemplateColumns: "minmax(320px, 25vw) minmax(0, 1fr)",
  "> ._grid-2row-fix-bottom": {
    gridGap: "12px",
    overflow: "hidden",
  },
  "._list": {
    paddingLeft: "0",
    paddingRight: "0",
    margin: "0",
    "._project-issue-card": {
      margin: "0",
    },
  },
  "._project-new-issue-placeholder": {
    height: "74px",
    width: "100%",
  },
});

export default styles;
