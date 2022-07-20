/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import TabsMenu from "@components/modular/menus/tabs-menu";
import Slide from "@components/presentation/slide";
// import Loader from "@components/graphics/loader";
// import LoaderContainer from "@components/graphics/loader-container";

import styles, { slideMotionVariants } from "./presentation-style";
import { updatePitch, updatePitchSlide } from "@redux/actions/pitch";

const Presentation = props => {
  // console.log("[Presentation:]", props);
  const dispatch = useDispatch();
  const { appWindow } = useSelector(state => state);
  const { dev_mode, totalSlides, slide } = useSelector(state => state.pitch);
  const activeSlideIndex = slide.index;

  const sectionEl = useRef(null);
  const [bodyEl, setBodyEl] = useState(null);
  const [slideDim, setSlideDim] = useState({
    width: 800,
    height: 450,
    ratio: 16 / 9,
  });
  const [slideScaleRatio, setSlideScaleRatio] = useState(1);

  let mainCls = [
    [true, "_pitch-presentation"],
    // [true, "_main-content"],
    [dev_mode, "_dev-mode"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== SLIDES & SECTIONS ==========
  const slides = props.slides;
  const actvieSlide = slides[activeSlideIndex];
  // console.log(actvieSlide);
  const allSections = slides.map(slide => slide.section);
  const sections = allSections.filter((sec, index) => allSections.indexOf(sec) === index);
  const sectionsTabs = sections.map(sec => ({ title: sec }));

  // ===== ELEMENTS ==========
  let horizontalGridLines = parseInt(slideDim.height / 10) + 1;
  let verticalGridLines = parseInt(slideDim.width / 10) + 1;
  const gridLines = (
    <Fragment>
      <div className="grid-lines-horizontal">
        {[...Array(horizontalGridLines)].map((i, index) => (
          // <div key={index} className="grid-line horizontal" style={{ top: index * 50 }}></div>
          <div key={index} data-index={index} className={index % 5 === 0 ? "major" : "minor"}></div>
        ))}
      </div>
      <div className="grid-lines-vertical">
        {[...Array(verticalGridLines)].map((i, index) => (
          <div key={index} data-index={index} className={index % 5 === 0 ? "major" : "minor"}></div>
        ))}
      </div>
    </Fragment>
  );

  const viewportData = (
    <div className="viewport-data _grid-2col-fix-left">
      <div>
        <div>Width </div>
        <div>Height</div>
        <div>slide </div>
        <div>stage </div>
      </div>
      <div>
        <div>: {bodyEl && parseInt(bodyEl.getBoundingClientRect().width)}</div>
        <div>: {bodyEl && parseInt(bodyEl.getBoundingClientRect().height)}</div>
        <div className="">
          : {slide.index} / {totalSlides}
        </div>
        <div className="_bold">
          : {slide.currentStage} / {slide.totalStages}
        </div>
      </div>
    </div>
  );

  const fallBack = (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <div>NOT FOUND</div>
    </div>
  );

  // ===== FUNCTIONS ==========

  // const prevSectionHandler = () => {
  //   if (activeSectionIndex > 0) {
  //     setActiveSectionIndex(activeSectionIndex - 1);
  //   }
  // };

  // const nextSectionHandler = () => {
  //   if (activeSectionIndex < sections.length) {
  //     setActiveSectionIndex(activeSectionIndex + 1);
  //   }
  // };

  const slideChangeHandler = slideIndex => {
    dispatch(
      updatePitchSlide({ section: slides[slideIndex].section, index: slideIndex, totalStages: 0, currentStage: 0 })
    );
  };

  const sectionChangeHandler = tabTitle => {
    if (tabTitle !== actvieSlide.section) {
      let firstSlideInd = slides.findIndex(slide => slide.section === tabTitle);
      if (firstSlideInd || firstSlideInd === 0) slideChangeHandler(firstSlideInd);
      // console.log(firstSlideInd);
    }
  };

  const prevSlideHandler = () => {
    if (activeSlideIndex > 0) {
      slideChangeHandler(activeSlideIndex - 1);
    }
  };

  const nextSlideHandler = () => {
    if (activeSlideIndex < slides.length - 1) {
      slideChangeHandler(activeSlideIndex + 1);
    } else {
      console.log("end");
    }
  };

  const controlFns = {
    nextSlideFn: () => nextSlideHandler(),
    prevSlideFn: () => prevSlideHandler(),
  };

  // ===== EFFECTS ==========

  useEffect(() => {
    dispatch(updatePitch({ totalSlides: slides.length, totalSections: sections.length }));

    let bodyEl = document.querySelector("#presentation ._container ._body");
    setBodyEl(bodyEl);
    let slideEl = document.querySelector("#presentation ._container ._body .slide-container");
    setSlideDim({
      width: slideEl.getBoundingClientRect().width,
      height: slideEl.getBoundingClientRect().height,
      ratio: slideEl.getBoundingClientRect().width / slideEl.getBoundingClientRect().height,
    });
    // console.log(bodyEl);
    // console.log(slideEl.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bodyEl && slideDim) {
      let bodyWidth = bodyEl.getBoundingClientRect().width;
      let bodyHeight = bodyEl.getBoundingClientRect().height;
      let scaleRatio = 1;

      if (bodyWidth / bodyHeight > slideDim.ratio) {
        scaleRatio = bodyHeight / slideDim.height;
      } else {
        scaleRatio = bodyWidth / slideDim.width;
      }

      setSlideScaleRatio(scaleRatio);
    }
  }, [appWindow, bodyEl, slideDim]);

  let slideSectionStyle = { transform: `scale(${slideScaleRatio})` };

  return (
    <div id="presentation" className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-2row-fix-bottom">
        <div className="_body">
          <div className="slide-container" style={slideSectionStyle}>
            {dev_mode && (
              <aside className="slide-context">
                {gridLines}
                {viewportData}
              </aside>
            )}
            <motion.section
              ref={sectionEl}
              variants={slideMotionVariants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
            >
              {slides[activeSlideIndex].content ? (
                <Slide slide={slides[activeSlideIndex].content} {...controlFns} key={activeSlideIndex} />
              ) : (
                fallBack
              )}
            </motion.section>
          </div>
        </div>

        <TabsMenu
          items={sectionsTabs}
          activeItemTitle={actvieSlide.section}
          clickFn={tabTitle => sectionChangeHandler(tabTitle)}
          trigger={props.trigger}
        />
      </div>
    </div>
  );
};

export default Presentation;
