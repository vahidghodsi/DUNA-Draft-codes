import { css } from "@emotion/react";

const styles = css({
  height: "100%",

  "&._logo": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  "&._logo-big": {
    height: "70vmin",
    width: "70vmin",
  },

  "&._logo-small": {
    height: "40px",
    width: "40px",
  },

  /* "._logo_text" :{ */
  /* position: "absolute", */
  /* width: "100%", */
  /* margin: "auto", */
  /* color: "rgb(51, 51, 51)", */
  /* fontsize: "1.2em", */
  /* }, */
  "._logo_name": {
    color: "rgb(51, 51, 51)",
    fontSize: "20px",
    fontWeight: "700",
  },

  "._logo-small .logo_text": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  "._logo_text div:first-child": {
    color: "rgb(51, 51, 51)",
    fontSize: "20px",
    fontWeight: "700",
  },
  " ._logo-big .logo_text div:first-child": {
    fontSize: "15vmin",
  },
  "._logo_text div:last-child": {
    /* text-align: center, */
    color: "rgb(51, 51, 51)",
    fontSize: "5px",
    fontWeight: "400",
  },
  "._logo-big .logo_text div:last-child": {
    fontSize: "2.5vmin",
    textAlign: "center",
  },

  "._logo_ring-shadow": {
    position: "absolute",
    height: "95%",
    width: "95%",
    borderRadius: "50%",
    boxShadow: "0px 0px 5px 1px rgba(70, 70, 70, 0.5), inset 0px 0px 5px 1px rgba(70, 70, 70, 0.5)",
  },
  "._logo-big .logo_ring-shadow": {
    boxShadow: "0px 0px 3vmin 3vmin rgba(70, 70, 70, 0.5), inset 0px 0px 3vmin 3vmin rgba(70, 70, 70, 0.5)",
  },
  /* .logo-small .logo_ring-shadow{
        boxShadow: "0px 0px 5px 10px rgba(70, 70, 70, 0.50), inset 0px 0px 5px 10px rgba(70, 70, 70, 0.50)",
      } */

  "._logo_ring": {
    position: "absolute",
    height: "100%",
  },
  "._logo_ring svg ": {
    display: "block",
  },

  "._logo_ring svg g": {
    fill: "none",
  },

  ".ring-inner, .ring-outter": {
    strokeWidth: "1px",
    stroke: "rgb(204, 204, 204)",
    boxShadow: "1px 1px 3px rgba(172, 191, 191, 0.85)",
  },

  ".ring-fill": {
    strokeWidth: "4px",
    stroke: "rgb(51, 51, 51)",
  },
});

export default styles;
