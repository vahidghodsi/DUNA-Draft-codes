import { css } from "@emotion/react";

const styles = css({
  overflow: "hidden",
  "._profile-tumbnails": {
    display: "flex",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export default styles;
