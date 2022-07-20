import { css } from "@emotion/react";

const styles = css({
  margin: "12px 0",
  padding: "21px",
  border: "var(--border-secondary)",
  borderRadius: "5px",
  // transition: "var(--transition-primary)",
  "._grid-3row-fix-middle-bottom": {
    gap: "8px",
    "._grid-2col-fix-left": {
      gridTemplateColumns: "35px auto",
      "&.info": {
        "> div:last-of-type": {
          overflowX: "hidden",
        },
      },
    },
  },
  "&:hover, &._active": {
    padding: "20px",
    border: "var(--border-primary)",
  },
  "&._active": {
    padding: "20px",
    border: "var(--border-primary)",
    boxShadow: "var(--shadow-primary)",
  },
  ".tumbnail": {
    // margin: "12px 0",
    width: "30px",
    height: "30px",
    border: "var(--border-secondary)",
    borderRadius: "5px",
  },
  "._title": {
    // gridTemplateRows: "auto "
    margin: "0 !important",
    ".content": {
      whiteSpace: "normal",
      overflowWrap: "break-word",
    },
    ".sub-content": {
      fontSize: "11px",
    },
  },
  "._profile-tumbnail, ._tag": {
    margin: "0px 1px !important",
  },
});

export default styles;
