import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "@redux/actions/appData";
import ProjectPanel from "@contents/project-panel/project-panel";

export default function ProjectPage() {
  const dispatch = useDispatch();
  const appUser = useSelector(state => state.appUser);
  const { project } = useSelector(state => state.appData);

console.log(project);
  useEffect(() => {
    if (appUser && appUser.id) {
      dispatch(getProject());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log("[members:appUser]", appUser);
  //   // console.log("[members:projects]", projects);
  // }, [appUser, projects]);

  // if (appUser) {
  //   switch (appUser.type) {
  //     case "client":
  //       break;

  //     case "architect":
  //       break;

  //     case "office":
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <Head>
        <title>DUNA - Member Area - Project</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ProjectPanel project={project} />
    </>
  );
}
