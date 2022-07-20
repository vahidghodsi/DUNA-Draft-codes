/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import NavMenu from "@components/modular/menus/nav-menu";

const styles = {
  // fontSize: "0.6em",
  borderTop: "var(--border-primary)",
  " > div": {
    // gridTemplateRows: "var(--layout_footer-height)",
    height: "var(--layout_footer-height)",
  },
  ".footer_sign": {
    fontSize: "0.9em",
  },
};

export const Footer = props => {
  const itemsleft = props.itemsLeft || [
    {
      content: "ABOUT",
      link: "/about",
      // clickFn: () => {},
    },
    {
      content: "DATA",
      link: "/data",
    },
    {
      content: "IMPRINT",
      link: "/imprint",
    },
  ];

  const itemsRight = props.itemsRight || [
    {
      content: "FAQ",
      link: "/faq",
    },
    {
      content: "Contact",
      link: "/contact",
    },
  ];

  return (
    <footer css={styles} className="Footer">
      <div className="_container _grid-3col-symmetry ">
        <NavMenu items={itemsleft} />
        <NavMenu
          xs
          items={{
            content: <span className="footer_sign">Designed &amp; Developed by Vahid Ghodsi - Copyright 2022</span>,
          }}
        />
        <NavMenu items={itemsRight} />
      </div>
    </footer>
  );
};
