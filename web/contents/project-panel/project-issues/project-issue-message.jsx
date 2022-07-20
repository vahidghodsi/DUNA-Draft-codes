/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import Title from "@components/modular/elements/title";
import Passage from "@components/modular/elements/passage";
import FloatMenu from "@components/modular/menus/float-menu";
import Date from "@components/modular/elements/date";
import styles from "./project-issue-message-style";

const ProjectIssueMessage = props => {
  // console.log('[ProjectIssueMessage:]', props);
  // const [active, setActive] = useState(false);
  const message = props.message || undefined;
  // const mentionedProfiles = issue && issue.profiles ? issue.profiles.contributors : [];

  let mainCls = [
    [true, "_project-issue-message"],
    [true, "_grid-3col-fix-left-right"],
    [props.className, props.className],
    // [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);
    
  return (
    <div className={mainCls.join(" ")} css={styles}>
      <ProfileTumbnail profile={"random"} />
      <div className="_message_content _grid-2row-fix-top _gap-8">
        <div className="head _grid-2col-fix-right">
          <div className="_grid-2col-fix-left _align-center">
            <Title>{message?.author.name + " - "}</Title>
            <Date date={message.created_at} format={"ddd - DD MMM YYYY - H:mm"} />
          </div>
          <FloatMenu
            setWidth
            position={"bottom-left"}
            items={[
              { title: "reply", link: true },
              { title: "pin", link: true },
              { title: "delete", link: true },
            ]}
          />
        </div>
        <Passage sm className="body">{message?.content.map((txt, ind) => <p key={ind}>{txt}</p>) || "NO TEXT"}</Passage>
      </div>
      <div className="_message_info _grid-row _gap-8">
        {/* <Date date={message.created_at} />
        {[...Array(parseInt(Math.random() * 5))].map((i, index) => (
          <ProfileTumbnail key={index} profile={"random"} />
        ))} */}
        {message.avatars?.clients}
        {message.avatars?.clients.length > 0 ? (
          <div style={{ width: "100%", margin: "0 4px", borderBottom: "var(--border-secondary)" }}></div>
        ) : null}
        {message.avatars?.mentioned}
      </div>
    </div>
  );
};

export default ProjectIssueMessage;

// {
//   id: '1105210',
//   is_pinned: false,
//   created_at: '2021-05-11T16:00:00+02:00',
// },
