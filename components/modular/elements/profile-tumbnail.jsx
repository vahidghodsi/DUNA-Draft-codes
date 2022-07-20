/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Avatar from "@components/graphics/avatar";
import Title from "@components/modular/elements/title";
import styles from "./profile-tumbnail-style";

const ProfileTumbnail = props => {
  //   console.log('[profileTumbnail:]', props);
  const [toggled, setToggled] = useState(false);

  let mainCls = [
    [true, "_profile-tumbnail"],
    [props.className, " " + props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [toggled, "_toggled"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {props.profile && props.profile !== "random" ? (
        <div className="holder" onMouseLeave={() => setToggled(false)}>
          <>
            <div className="header">
              <Avatar xs={toggled} profile={props.profile} mouseEnterFn={() => setToggled(true)} />
              <div className="credit">{toggled ? props.profile.credit : ""}</div>
              <div className="profile-info">
                <div>{toggled ? props.profile.type : ""}</div>
                <div>{toggled ? "since 2022" : ""}</div>
              </div>
              <div>-</div>
            </div>
            <div className="name">
              <Title lg bold content={props.profile.name} />
            </div>
            <div className="contributions">
              <div>offices</div>
              <div>projects</div>
              <div>-</div>
            </div>
          </>
        </div>
      ) : (
        <Avatar
          xs={props.xs}
          sm={props.sm}
          lg={props.lg}
          xl={props.xl}
          profile={props.profile}
          mouseEnterFn={() => setToggled(true)}
        />
      )}
    </div>
  );
};

export default ProfileTumbnail;
