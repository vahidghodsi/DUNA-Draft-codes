import { cloneElement, createRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateInterface, clearInterface } from "@redux/actions/appLevelInterface";

const AppLevelDisplay = props => {
  // console.log("[in AppLevelDisplay]", props);
  const placeholderEl = createRef(null);
  const dispatch = useDispatch();
  const active = props.active || false;

  useEffect(() => {
    console.log(placeholderEl.current);
    // active && dispatch(updateInterface({ content: props.children }));
    active && dispatch(updateInterface({ content: props.children, sourceElementId: props.id }));
    return () => {
      dispatch(clearInterface());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, active]);

  return (
    <>
      {/* {props.children} */}
      {cloneElement(props.children, { id: props.id })}
    </>
  );
};

export default AppLevelDisplay;
