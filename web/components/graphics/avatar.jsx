/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Avatar as LoremAvatar } from "react-lorem-ipsum";
import Image from "next/image";
import styles from "./avatar-style";

const Avatar = props => {
  //   console.log('[avatar:]', props);
  // eslint-disable-next-line no-unused-vars
  const [loremAvatarEl, setLoremAvatarEl] = useState(undefined);

  let mainCls = [
    [true, "_avatar"],
    [props.className, " " + props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const mouseEnterHandler = () => {
    if (props.mouseEnterFn) {
      props.mouseEnterFn();
    }
  };
  const mouseLeaveHnadler = () => {
    if (props.mouseLeaveFn) {
      props.mouseLeaveFn();
    }
  };

  useEffect(() => {
    if (props.profile === "random") {
      setLoremAvatarEl(<LoremAvatar gender={props.gender || "all"} alt="Sample Avatar" />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={mainCls.join(" ")}
      css={[styles, { ...props.style }]}
      onMouseEnter={() => mouseEnterHandler(true)}
      onMouseLeave={() => mouseLeaveHnadler(false)}
    >
      {props.profile ? (
        props.profile === "random" ? (
          loremAvatarEl
        ) : (
          <Image src={props.profile.avatar} alt={props.profile.name} layout="fill" />
        )
      ) : (
        <div className="_fallback"></div>
      )}
    </div>
  );
};

export default Avatar;
