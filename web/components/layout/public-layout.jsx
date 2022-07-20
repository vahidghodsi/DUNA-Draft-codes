import { useDispatch } from "react-redux";
import { getUser } from "@redux/actions/appUser";
import { Header } from "./header";
import { Footer } from "./footer";

export function PublicLayout({ Component, pageProps }) {
  const dispatch = useDispatch();

  return (
    <>
      <Header
        itemsRight={[
          {
            content: "login",
            link: true,
            clickFn: () => dispatch(getUser()),
          },
          {
            content: "Let's Do this",
            link: "/auth/register", 
            xl: true,
            bold: true,
            className: "_sh-t-primary-hover",
          },
        ]}
      />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
