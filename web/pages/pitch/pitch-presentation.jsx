import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAppMessage } from "@redux/actions/app";
import { app_message_info_types, app_message_types } from "@models/app-message-types";
import PitchPresentationContent from "@contents/pitch/pitch-presentation-content";

export default function PitchPresentationPage({ query, user }) {
  const dispatch = useDispatch();
  console.log(query);

  useEffect(() => {
    dispatch(
      updateAppMessage({
        duration: 7000, //ms
        type: app_message_types.alert,
        info_type: app_message_info_types.success,
        content: (
          <div className="">
            {`Welcome ${user.name}`} 
          </div>
        ),
        actions: [
          {
            type: "confirm",
            label: "ok",
            do: () => {
              console.log("Not Accepted");
            },
          },
        ],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>DUNA - PITCH DECK Presentation</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
      </Head>
      <PitchPresentationContent user={user}/>
    </>
  );
}

export async function getServerSideProps({ query }) {
  // console.log(query);
  if (query.username && query.password) {
    let accepted = false;
    let user = undefined;
    switch (query.username) {
      case "vahid":
        accepted = query.password === "justIt";
        user = { name : "vahid", email: ""}
        break;

      default:  
        break;
    }

    if (accepted) return { props: { ...query, user, accepted: "YES" } };
  }

  return {
    redirect: {
      permanent: true,
      destination: "/pitch?status=NOT_ACCEPTED",
    },
  };
}
