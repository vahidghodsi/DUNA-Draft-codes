import { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "@redux/actions/appUser";
import { Header } from "./header";
import { Footer } from "./footer";
import SideMenu from "@components/modular/menus/sideMenu";

export function ProtectedLayout({ Component, pageProps }) {
  const dispatch = useDispatch();
  const [sideMenutoggled, setSideMenutoggled] = useState(false);
  let mainCls = "_main _fix-layout _grid-side-menu";
  mainCls += sideMenutoggled ? " _toggled" : "";

  return (
    <>
      <Header
        itemsLeft={[
          { content: "Projects", link: "/projects", xl: true, setWidth: true },
          { content: "Rounds", link: "/rounds", xl: true, setWidth: true },
          { content: "Evaluations", link: "/evaluations", xl: true, setWidth: true },
        ]}
        itemsRight={[
          // { content: "Vahid Ghodsi", lg: true },
          { content: "Logout", lg: true, link: true, clickFn: () => dispatch(signOut()) },
        ]}
      />
      <main className={mainCls}>
        <SideMenu toggled={sideMenutoggled} toggleFn={() => setSideMenutoggled(!sideMenutoggled)} />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
