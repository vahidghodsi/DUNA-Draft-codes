import { css } from "@emotion/react";

const styles = css({
  "._container": {
    gridTemplateColumns: "repeat(3, 1fr)",

    "._ver-partition": {
      overflow: "hidden",
      "&:not(:last-of-type)": {
        paddingRight: "12px",
        borderRight: "var(--border-secondary)",
      },
      "._body": {
        position: "relative",
        "._backdrop": {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&._active": {
            height: "100%",
            width: "100%",
            zIndex: 100,
          },
        },
      },
      "._list": {
        margin: "0",
        height: "100%",
      },
    },
  },
});

export default styles;
