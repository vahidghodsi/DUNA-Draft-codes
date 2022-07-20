/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initLanguage } from "../redux/actions/locale";
import { initTheme } from "../redux/actions/theme";
import { getProfileProjects } from "@redux/actions/appUserData";
import { ThemeProvider } from "@emotion/react";
import { themeService } from "../services/theme";
import { ProtectedLayout } from "@components/layout/protected-layout";
import { PublicLayout } from "@components/layout/public-layout";
import { DocsLayout } from "@components/layout/docs-layout";
import AppEvents from "@context/AppEvents";
import AppInterface from "./AppInterface";
import { PitchLayout } from "@components/layout/pitch-layout";

function AppProviders({ Component, pageProps }) {
  const dispatch = useDispatch();
  const [keyDownAction, setKeyDownAction] = useState([]);

  //it makes component re-render
  const { languageCode } = useSelector(state => state.locale);
  const { name } = useSelector(state => state.theme);
  const appUser = useSelector(state => state.appUser);
  const { projects } = useSelector(state => state.appUserData);
  const router = useRouter();
  const mainPathName = router.pathname.split("/").filter(i => i !== "")[0];
  // console.log(router.pathname === `/docs`);
  // console.log(router.asPath);
  // console.log(router.query);

  useEffect(() => {
    //set language
    dispatch(initLanguage());
    //set theme
    dispatch(initTheme());
  }, [languageCode, name]);

  // useEffect(() => {
  //   // ** on way is to use useeffect and window.location data. the other one is server side solutions
  //   const hostname = window.location.hostname.split(".")[0];
  //   const hostnamePart2 = window.location.hostname.split(".")[1];
  //   const isSubdomain = hostname === "duna" || hostname === "localhost" ? false : true;
  //   // console.log(isSubdomain);
  //   // console.log(hostname);
  //   // console.log(hostnamePart2);
  //   if (isSubdomain) {
  //     if (hostnamePart2 === "duna") window.location.replace(`duna.archi/${hostname}`);
  //     if (hostnamePart2 === "localhost")
  //       window.location.replace(`${window.location.protocol}//localhost:3000/${hostname}`);
  //   }
  // }, []);

  useEffect(() => {
    console.log("[_AppProviders: appUser:] ", appUser);
    if (appUser.email && !projects) {
      // dispatch(getProjects());//should be removed
      dispatch(getProfileProjects(appUser.id));
    }
  }, [appUser]);

  useEffect(() => {
    if (keyDownAction) {
      setKeyDownAction(undefined);
    }
  }, [keyDownAction]);

  
  let appContent = <PublicLayout Component={Component} pageProps={{ ...pageProps }} />;
  if (appUser.email) {
    appContent = <ProtectedLayout Component={Component} pageProps={{ ...pageProps }} />;
  }
  if (mainPathName === "docs") {
    appContent = <DocsLayout Component={Component} pageProps={{ ...pageProps }} />;
  }
  if (mainPathName === "pitch") {
    appContent = <PitchLayout Component={Component} pageProps={{ ...pageProps }} />;
  }

  return (
    <ThemeProvider theme={themeService.getTheme() ?? {}}>
      <AppEvents keyDownActionFn={action => setKeyDownAction(action)}>
        <AppInterface keyDownAction={keyDownAction}>{appContent}</AppInterface>
      </AppEvents>
    </ThemeProvider>
  );
}

export default AppProviders;
