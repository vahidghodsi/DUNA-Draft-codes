import { useDispatch } from "react-redux";
import { getUser } from "@redux/actions/appUser";
import { Header } from "./header";
import { Footer } from "./footer";

export function PitchLayout({ Component, pageProps }) {
  const dispatch = useDispatch();
  let mainCls = "_main _fix-layout";

  return (
    <>
      <Header
        itemsLeft={[
          {
            content: "--",
            link: true,
            clickFn: () => dispatch(getUser()),
          },
        ]}
        itemsRight={[
          {
            content: "--",
            link: "/",
            bold: true,
            // className: "_sh-t-primary-hover",
          },
        ]}
      />
      <main className={mainCls}>
        <Component {...pageProps} />
      </main>
      <Footer
        itemsLeft={[
          {
            content: "--",
            link: true,
            clickFn: () => dispatch(getUser()),
          },
        ]}
        itemsRight={[
          {
            content: "--",
            link: "/",
            bold: true,
            // className: "_sh-t-primary-hover",
          },
        ]}
      />
    </>
  );
}
