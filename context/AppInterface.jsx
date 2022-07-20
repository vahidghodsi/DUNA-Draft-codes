import { cloneElement, isValidElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppDev from "@contents/app-dev/app-dev";
import AppMessage from "@components/context/app-message";
import Loader from "@components/graphics/loader";
import LoaderContainer from "@components/graphics/loader-container";

const mainStyle = {
  position: "absolute",
  // background: "red",
  transition: "var(--transition-primary)",
  // width: "100%",
  // height: "100%",
};
const mainStyleActive = {
  ...mainStyle,
  width: "100vw",
  height: "100vh",
  // zIndex: "500",
};


const AppInterface = props => {
  // console.log("[in AppInterface]");
  const [active, setActive] = useState(false);
  const [sourceEl, setSourceEl] = useState(null);
  const { content, sourceElementId } = useSelector(state => state.appInterface);
  const { status } = useSelector(state => state.app);

  let mainCls = [
    [true, "_app-top-level-interface"],
    [active, "_active"],
    [active, "_background-blur-primary"],
    // [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== USE EFFECTS ==========
  useEffect(() => {
    // console.log("in app Level", content);
    if (isValidElement(content)) {
      setActive(true);
      setSourceEl(document.getElementById(sourceElementId));
    } else {
      setActive(false);
      setSourceEl(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, sourceElementId]);

  useEffect(() => {
    if (props.keyDownAction && props.keyDownAction === "APP-LEVEL-INTERFACE_TOGGLE") {
      setActive(!active);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyDownAction]);

  // ===== ELEMENTS ==========
  const loadMessage = "Please Wait ...";
  // const loadMessage = null;

  let sourceElBound = sourceEl ? sourceEl.getBoundingClientRect() : null;
  let loadingDisplay = loadMessage ? (
    <div className="_grid-2row-fix-top _justify-center _gap-20">
      <Loader lg message={"Please wait..."} />
      <div>{loadMessage}</div>
    </div>
  ) : (
    <Loader lg message={"Please wait..."} />
  );

  return (
    <>
      {props.children}
      <AppDev keyDownAction={props.keyDownAction} />
      <AppMessage keyDownAction={props.keyDownAction} />
      {/* ===== EXPERIMENT ========== */}
      <aside className={mainCls.join(" ")} style={active ? mainStyleActive : mainStyle}>
        {/* {content} */}
        {content && sourceElBound
          ? cloneElement(content, {
              style: {
                position: "absolute",
                left: sourceElBound.left + "px !important",
                top: sourceElBound.top + "px !important",
                width: sourceElBound.width + "px !important",
                height: sourceElBound.height + "px !important",
                // bottom: sourceElBound.bottom + "px !important",
              },
            })
          : null}
      </aside>
      {/* ===== LOADER ========== */}
      <LoaderContainer active={active || status === "LOADING"}>{loadingDisplay}</LoaderContainer>
    </>
  );
};

export default AppInterface;
