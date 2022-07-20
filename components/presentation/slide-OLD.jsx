/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from "react";
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAppEventsKeyboard } from "@redux/actions/appEvents";
// import { AnimatePresence } from "framer-motion";S

import styles from "./slide-style";
import { togglePitchDevMode, updatePitchSlide } from "@redux/actions/pitch";

const Slide = ({ slide, nextSlideFn, prevSlideFn }) => {
  // console.log('[Slide:]', props);
  const {dev_mode} = useSelector(state => state.pitch)
  const dispatch = useDispatch();
  const { keyboardEvent } = useSelector(state => state.appEvents);
  // ** stages start from 0 ( 0 is the loading stage)
  const {totalStages}= useSelector(state => state.pitch).slide;

  const [stage, setStage] = useState(0);
  const slideEl = useRef(null);

  let mainCls = [
    [true, "_slide"],
    [dev_mode, "_dev-mode"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== FUNCTIONS ==========
  const nextStageHandler = () => {
    if (stage < totalStages) {
      setStage(stage + 1);
      dispatch(updatePitchSlide({ currentStage: stage + 1 }));
    } else {
      // tell parent to go next stage
      nextSlideFn && nextSlideFn();
    }
  };

  const prevStageHandler = () => {
    if (stage > 0) {
      setStage(stage - 1);
      dispatch(updatePitchSlide({ currentStage: stage - 1 }));
    } else {
      // tell parent to go prev stage
      prevSlideFn && prevSlideFn();
    }
  };

  // ===== EFFECTS ==========

  useEffect(() => {
    if (keyboardEvent) {
      // console.log(keyboardEvent);
      switch (keyboardEvent.key) {
        case "ArrowRight":
          nextStageHandler();
          break;

        case "ArrowLeft":
          prevStageHandler();
          break;

        case "G":
          if (keyboardEvent.shiftKey) dispatch(togglePitchDevMode());
          break;

        default:
          break;
      }
      dispatch(clearAppEventsKeyboard());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardEvent]);

  return (
    <div className={mainCls.join(" ")} css={styles} ref={slideEl}>
      {/* <AnimatePresence>{React.isValidElement(slide) && React.cloneElement(slide, { stage: stage })}</AnimatePresence> */}
      {React.isValidElement(slide) && React.cloneElement(slide, { stage: stage })}
    </div>
  );
};

export default Slide;
