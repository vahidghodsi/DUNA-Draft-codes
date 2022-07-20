/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Title from "@components/modular/elements/title";
import styles from "./side-menu-style";
// import SideMenuItem from "./sideMenuItem";
import Bar from "../elements/bar";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppSideMenu } from "@redux/actions/app";

const SideMenu = props => {
  const dispatch = useDispatch();
  const appUser = useSelector(state => state.appUser);
  const { projects } = useSelector(state => state.appUserData);
  const profile = appUser || {};
  // const profile = { name: "Vahid Ghodsi", type: "Architect", credit: 6.8, avatar: "/assets/Vahid.ghodsi.jpg" };
  const [thisToggled, setThisToggled] = useState(false);
  const toggled = props.toggled ? props.toggled : thisToggled;
  let mainCls = "_side-menu";
  mainCls += toggled ? " toggled" : "";

  const ClickHandler = () => {
    if (props.toggleFn) {
      props.toggleFn();
    } else {
      setThisToggled(!thisToggled);
    }
    dispatch(toggleAppSideMenu());
  };

  return (
    <aside className={mainCls} css={[styles, { ...props.style }]}>
      <div className="side-menu-container _grid-3row-symmetry">
        <div className="">
          <div
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "20px" }}
            onClick={ClickHandler}
          >
            <div style={{ width: "20px", height: "2px", background: "var(--color-primary)" }}></div>
            <div style={{ width: "20px", height: "2px", background: "var(--color-primary)" }}></div>
            <div style={{ width: "20px", height: "2px", background: "var(--color-primary)" }}></div>
          </div>
          <Title link icon="architect" topContent={"credit " + profile.credit} bold>
            {profile.name}
          </Title>
          <Title link icon="architect" className={"notification"}>
            Notifications
            <div className="sub-content">
              <li>- Welcome to DUNA. see tutorial</li>
              <li>
                <span className="_more"></span>
              </li>
            </div>
          </Title>
        </div>

        <div>
          {projects && projects.length > 0 ? (
            <Title setHeight={false} link icon="project-design" className={"project-summary"} bold>
              {projects[0].title}
              <div className="top-content">
                {projects[0].brief.type} | {projects[0].brief.floorArea} m2
              </div>
              <div className="sub-content">
                <Bar xs toggle fillLevel={40} />
                <div>
                  <div>| 30 Architects Registered </div>
                  <div>| 5 has Submitted </div>
                  <div>
                    | 55 Evaluators Assigned - <span className="_more"> </span>
                  </div>

                  {projects.length > 0 ? (
                    <div style={{ marginTop: "4px", fontSize: "12px", fontWeight: "bold" }}>
                      {"and " + projects.length + " more projects"}
                    </div>
                  ) : null}
                </div>
              </div>
            </Title>
          ) : null}

          {/* {projects && projects.length > 0
            ? projects.map((project, index) => index !== 0 ? (
                <Title key={project.id} setHeight={false} link icon="project-design" className={"project-summary"} bold>
                  {project.title}
                </Title>
              ) : null)
            : null} */}

          {/* {projects && projects.length > 0 ? (
            <Title
              setHeight={false}
              link
              icon="empty"
              className={"project-summary"}
              bold
            >
              {"and " + projects.length + " more projects"} 
            </Title>
          ) : null} */}

          <Title link icon="project-brief">
            New Project
          </Title>

          <Title
            link
            icon="project-brief"
            className={"_toggled-visible"}
            // style={toggled ? { opacity: 1 } : { opacity: 0 }}
          >
            Tell a Friend
          </Title>
        </div>

        <div className="">
          <Title link icon="architect" bold>
            Edit Profile
          </Title>
          <Title link icon="architect" bold>
            Settings
          </Title>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
