/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react";
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAppEventsKeyboard } from "@redux/actions/appEvents";
// import { AnimatePresence } from "framer-motion";S

import styles from "./slide-style";
import { togglePitchDevMode, updatePitchSlide } from "@redux/actions/pitch";

const Slide = ({ slide, nextSlideFn, prevSlideFn }) => {
  // console.log('[Slide:]', props);
  const slideEl = useRef(null);
  const dispatch = useDispatch();
  const { dev_mode } = useSelector(state => state.pitch);
  const { keyboardEvent } = useSelector(state => state.appEvents);
  const { totalStages, currentStage } = useSelector(state => state.pitch).slide;
  // ** stages start from 0 ( 0 is the loading stage)

  let mainCls = [
    [true, "_slide"],
    [dev_mode, "_dev-mode"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== FUNCTIONS ==========
  const nextStageHandler = () => {
    if (currentStage < totalStages) {
      dispatch(updatePitchSlide({ currentStage: currentStage + 1 }));
    } else {
      // tell parent to go next stage
      nextSlideFn && nextSlideFn();
    }
  };

  const prevStageHandler = () => {
    if (currentStage > 0) {
      dispatch(updatePitchSlide({ currentStage: currentStage - 1 }));
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
      {slide}
    </div>
  );
};

export default Slide;
