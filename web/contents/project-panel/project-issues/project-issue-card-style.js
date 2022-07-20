import { css } from "@emotion/react";

const styles = css({
  margin: "12px 0",
  padding: "21px",
  border: "var(--border-secondary)",
  borderRadius: "5px",
  // transition: "var(--transition-primary)",
  ".tumbnail": {
    // margin: "12px 0",
    width: "30px",
    height: "30px",
    border: "var(--border-secondary)",
    borderRadius: "50%",
  },
  "._title.issue-title": {
    gridTemplateRows: "auto minmax(0, 1fr) auto",
    ".content": {
      whiteSpace: "normal",
      overflowWrap: "break-word",
    },
    ".sub-content": {
      fontSize: "11px",
    },
  },
  // "issue-info": {
  //   display: "flex",
  //   "> div": {
  //     marginRight: "8px",
  //   },
  // },
  "._title": {
    margin: "0 !important",
  },
  "._profile-tumbnail, ._tag": {
    margin: "0px 1px !important",
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
});

export default styles;

//   "._grid-3row-fix-middle-bottom": {
//     gap: "8px",
//     "._grid-2col-fix-left": {
//       gridTemplateColumns: "35px auto",
//       "&.info": {
//         "> div:last-of-type": {
//           overflowX: "hidden",
//         },
//       },
//     },
//   },
