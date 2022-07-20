import { css } from "@emotion/react";

const styles = css({
  position: "absolute",
  // width: "calc(100% - 80px)",
  //   width: "800px",
  //   height: "450px",
  //   padding: "20px",

  ".bulletpoint": {
    gridTemplateColumns: "100px 400px auto",
    // gridTemplateColumns: "0px 100px 400px auto",
    ".bulletpoint_title": {
      fontWeight: "bold",
      fontSize: "20px",
    },
    // ".bulletpoint_line": {
    //   borderLeft: "1px solid var(--border-color-primary)",
    // },
    ".bulletpoint_content": {
      // fontWeight : "bold",
      fontSize: "14px",
    },
    ".bulletpoint_icon": {},
  },

  ".context": {
    position: "absolute",
    width: "100%",
    height: "100%",
    ".line": {
      //   position: "absolute",
      borderLeft: "1px solid var(--border-color-primary)",
    },
  },
});

export default styles;
