/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styles from "./register-content-style";
// import NavMenu from "@components/modular/menus/nav-menu";
// import Button from "@components/modular/elements/button";
// import Input from "@components/modular/elements/input";
// import Title from "@components/modular/elements/title";

const RegisterContent = props => {
  //   console.log("[in RegisterContent :] " + props);

  let mainCls = "_register _container _grid-3col-symmetry ";

  return (
    <div className={mainCls} css={[styles, { ...props.style }]}>
      <div className="_div-left"></div>
      <div className="_div-middle"></div>
      <div className="_div-right"></div>
    </div>
  );
};

export default RegisterContent;
