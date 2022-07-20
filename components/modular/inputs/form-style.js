import { css } from "@emotion/react";

const styles = css({
  "._form_body ": {
    "._input": {
      margin: "0",
    },
  },
  "._title": {
    margin: "0",  
  },
  // "._buttons-row-right": {
  // margin: "16px",
  // "._button": {
  // margin: "12px 0",
  // },
  // },
  //===== STANDARD SIZES ==========
  "&._xs": {
    // rowGap: "14px",
    "._form_body ": {
      rowGap: "8px",
    },
  },
  "&._sm ": {
    "._form_body ": {
      rowGap: "10px",
    },
  },
  "&._lg ": {
    rowGap: "22px",
    "._form_body ": {
      rowGap: "14px",
    },
  },
  "&._xl": {
    rowGap: "24px",
    "._form_body ": {
      rowGap: "16px",
    },
  },
});

export default styles;
