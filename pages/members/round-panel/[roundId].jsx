import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRound } from "@redux/actions/appData";
import RoundPanel from "@contents/round-panel/round-panel";

export default function RoundPanelIdPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const appUser = useSelector(state => state.appUser);
  const { round } = useSelector(state => state.appData);
  // console.log("[round-Panel/]: ", round);
  const roundId = router.query.roundId;
  const roundDate = router.query.date;

  useEffect(() => {
    if (appUser && appUser.id) {
      dispatch(getRound(roundId, roundDate));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundId, roundDate, appUser]);

  return (
    <>
      <Head>
        <title>DUNA - Member Area - {round?.title || "Round Panel"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <RoundPanel round={round} />
    </>
  );
}
