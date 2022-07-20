/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import GraphicSet from "@components/graphics/graphic-set";
import styles from "./register-content-style";
import NavMenu from "@components/modular/menus/nav-menu";
import Button from "@components/modular/elements/button";
import Input from "@components/modular/inputs/input";
import Title from "@components/modular/elements/title";

const LoginContent = props => {
  //   console.log("[in LoginContent :] " + props);
  //   const router = useRouter();
  //   const [clsMinWidth, setClsMinWidth] = useState(undefined);

  let mainCls = "_login _container _grid-3col-symmetry ";

  return (
    <div className={mainCls} css={[styles, { ...props.style }]}>
      <div className="_div-left">
        <div style={{ flexGrow: "1", justifyItems: "middle" }}>
          <div>
            <Title xl style={{ fontSize: "32px !important", marginLeft: "24px !important" }}>
              Welcome Back
            </Title>
          </div>
          <div>
            <Input xl placeholder={"Email or Username"} />
            <Input xl placeholder={"Password"} />
            <Button xl style={{ width: "100%" }}>
              Login
            </Button>
          </div>
          <div>
            <NavMenu
              items={[
                { content: `New User?`, link: "/auth/signup" },
                { content: `Forgot Password?`, link: "/auth/forgotPassword" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="_div-middle"></div>
      <div className="_div-right">
        <Title> Login With</Title>
        <Button>Google</Button>
      </div>
    </div>
  );
};

export default LoginContent;
