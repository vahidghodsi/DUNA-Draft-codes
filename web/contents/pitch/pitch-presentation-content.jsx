/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "@components/modular/elements/title";
import PitchPresentation from "./pitch-presentation";
import { AnimatePresence, motion } from "framer-motion";
// import List from "@components/modular/containers/list";
// import Title from "@components/modular/elements/title";
// import Loader from "@components/graphics/loader";
// import LoaderContainer from "@components/graphics/loader-container";

import styles, { introMotionVariants } from "./pitch-presentation-content-style";

const PitchPresentationContent = ({ user }) => {
  // console.log("[Pitch:]", props);
  // const [active, setActive] = useState(false);
  // const [state, setState] = useState("INTRO");
  const [state, setState] = useState("INTRO");
  // const router = useRouter();
  // const { query } = router;
  // console.log(query);
  console.log("welcome", user.name);

  let mainCls = [
    [true, "_pitch-presentation-content"],
    [true, "_main-content"],
    // [state === "SHORT_PITCH", "presentaion-layout"],
    [state === "LONG_PITCH", "presentaion-layout"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========

  useEffect(() => {}, []);

  const introContent = (
    <div className="_pitch-intro _grid-2row" style={{ height: "100%" }}>
      <div className="pitch-statement">
        <Title bold>
          <div className="content" style={{ fontSize: "40px" }}>
            DUNA CONNECTS <span className={"_f-underline"}>CLIENTS &#38; ARCHITECTS,</span>
          </div>
        </Title>
        {/* <Title bold>CLIENTS & ARCHITECTS,</Title> */}
        <Title bold>
          <div className="content">
            making architectural services <span className={"_f-underline"}>ACCESSIBLE</span> and{" "}
            <span className={"_f-underline"}>POSSIBLE</span> ,
          </div>
        </Title>
        <Title bold>
          <div className="content _f-highlighted">LIKE NEVER BEFORE</div>
        </Title>
      </div>
      <div className="pitch-options _grid-2col-fix-left">
        <Title link bold style={{ fontSize: "30px" }} clickFn={() => setState("LONG_PITCH")}>
          &#62; GO TO THE PITCH DECK
        </Title>
        <Title link style={{ fontSize: "18px" }} clickFn={() => setState("SHORT_PITCH")}>
          ... well, just tell me in 10 seconds
        </Title>
      </div>
    </div>
  );

  const shortPitchContent = (
    <div className="_pitch-intro _grid-2row" style={{ height: "100%" }}>
      duna is ...
      <Title link bold style={{ fontSize: "30px" }} clickFn={() => setState("LONG_PITCH")}>
        &#62; GO TO THE PITCH DECK
      </Title>
      <Title link clickFn={() => setState("INTRO")}>
        GO Back
      </Title>
    </div>
  );

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <AnimatePresence exitBeforeEnter>
        {state === "INTRO" && (
          <motion.div key={"INTRO"} className="_container" {...introMotionVariants}>
            {introContent}
          </motion.div>
        )}
        {state === "LONG_PITCH" && <PitchPresentation key={"LONG_PITCH"} />}
        {state === "SHORT_PITCH" && (
          <motion.div key={"SHORT_PITCH"} className="_container" {...introMotionVariants}>
            {shortPitchContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PitchPresentationContent;
