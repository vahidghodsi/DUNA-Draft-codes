/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
// import Link from "next/link";
import NavMenu from "@components/modular/menus/nav-menu";
import Logo from "@components/graphics/logo";

const styles = css({
  width: "100%",
  fontSize: "1em",
  borderBottom: "var(--border-primary)",
  background: "var(--background-light)",
  " > div": {
    height: "var(--layout_header-height)",
  },
  ".header__logo": {
    top: "2px",
    padding: "5px 0",
  },
  ".Header_back": {
    display: "none",
    position: "absolute",
    top: "0",
  },
});

export const Header = props => {
  // const [navActive, setNavActive] = useState(false);
  let Cls = "Header";

  const itemsLeft = props.itemsLeft || [
    {
      content: "WHAT",
      link: "/what",
    },
    {
      content: "WHY",
      link: "/why",
    },
    {
      content: "HOW",
      link: "/how",
    },
  ];
  const itemsRight = props.itemsRight || [
    {
      content: "login",
      link: "/login",
    },
    {
      content: "Let's Start",
      link: "/auth/register",
      xl: true,
      bold: true,
      className: "_sh-t-primary-hover"
    },
  ];

  return (
    <header css={styles} className={Cls}>
      <div className="_container _grid-3col-symmetry ">
        <div>
          <NavMenu xl items={itemsLeft} />
        </div>
        <div className="header__logo">
          {/* <GraphicSet item={"logo-small"} /> */}
          <Logo sm/>
        </div>
        <div>
          <NavMenu items={itemsRight} />
        </div>
      </div>
    </header>
  );
};
