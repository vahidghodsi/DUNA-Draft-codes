/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Title from "@components/modular/elements/title";
import TabsMenu from "@components/modular/menus/tabs-menu";
// import Loader from "@components/graphics/loader";
// import LoaderContainer from "@components/graphics/loader-container";
import PresentationSlide from "@components/presentation/presentation-slide";

import PitchOverview01 from "./slides/pitch-overview-01";
import PitchOverview02 from "./slides/pitch-overview-02";
import PitchProblem01 from "./slides/pitch-problem-01";
import styles, { slideMotionVariants } from "./pitch-presentation-style";

const PitchPresentation = props => {
  // console.log("[PitchPresentation:]", props);
  const sectionEl = useRef(null);
  const [bodyEl, setBodyEl] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  // const [activeSectionTitle, setActiveSectionTitle] = useState(sections[0]);

  const fallBack = (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <div>NOT FOUND</div>
    </div>
  );

  // ===== SECTIONS & SLIDES ==========
  const PRESENTATION_SECTIONS = {
    SECTION_OVERVIEW: "overview",
    SECTION_PROBLEM: "problem",
    SECTION_SOLUTION: "solution",
    SECTION_TARGET_MARKET: "target market",
    SECTION_THE_PLATFORM: "the Platform",
    SECTION_COMPETITION: "competition",
    SECTION_BUSINESS_MODEL: "business Model",
    SECTION_TEAM: "team",
    SECTION_IMPLEMENTATION: "implementation",
  };
  // const sections = Object.values(PRESENTATION_SECTIONS);
  const sectionsTabs = Object.values(PRESENTATION_SECTIONS).map(sec => ({ title: sec }));

  const slides = [
    {
      content: <PitchOverview01 />,
      section: PRESENTATION_SECTIONS.SECTION_OVERVIEW,
    },
    {
      content: <PitchOverview02 />,
      section: PRESENTATION_SECTIONS.SECTION_OVERVIEW,
    },
    {
      content: <PitchProblem01 />,
      section: PRESENTATION_SECTIONS.SECTION_PROBLEM,
    },
    {
      content: <div>1</div>,
      section: PRESENTATION_SECTIONS.SECTION_SOLUTION,
    },
    {
      content: <div>2</div>,
      section: PRESENTATION_SECTIONS.SECTION_TARGET_MARKET,
    },
    {
      content: <div>3</div>,
      section: PRESENTATION_SECTIONS.SECTION_THE_PLATFORM,
    },
    {
      content: <div>4</div>,
      section: PRESENTATION_SECTIONS.SECTION_COMPETITION,
    },
    {
      content: <div>5</div>,
      section: PRESENTATION_SECTIONS.SECTION_BUSINESS_MODEL,
    },
    {
      content: <div>6</div>,
      section: PRESENTATION_SECTIONS.SECTION_TEAM,
    },
    {
      content: <div>7</div>,
      section: PRESENTATION_SECTIONS.SECTION_IMPLEMENTATION,
    },
  ];

  const actvieSlide = slides[activeSlideIndex];
  // console.log(actvieSlide);

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

  const sectionChangeHandler = tabTitle => {
    if (tabTitle !== actvieSlide.section) {
      let firstSlideInd = slides.findIndex(slide => slide.section === tabTitle);
      if (firstSlideInd || firstSlideInd === 0) setActiveSlideIndex(firstSlideInd);
      console.log(firstSlideInd);
    }
  };

  const prevSlideHandler = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const nextSlideHandler = () => {
    if (activeSlideIndex < slides.length) {
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  const controlFns = {
    nextSlide: () => nextSlideHandler(),
    prevSlide: () => prevSlideHandler(),
  };

  let mainCls = [
    [true, "_pitch-presentation"],
    // [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========

  useEffect(() => {
    let bodyEl = document.querySelector("#presentation ._tabs-container ._body");
    setBodyEl(bodyEl);
  }, []);

  return (
    <div id="presentation" className={mainCls.join(" ")} css={styles}>
      <aside className="slide-viewport-data">
        <Title>{bodyEl && bodyEl.getBoundingClientRect().width}</Title>
        <Title>{bodyEl && bodyEl.getBoundingClientRect().height}</Title>
      </aside>
      <div className=" _tabs-container _grid-2row-fix-bottom">
        <div className="_body">
          <motion.section
            ref={sectionEl}
            variants={slideMotionVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
          >
            {slides[activeSlideIndex].content ? (
              <PresentationSlide slide={slides[activeSlideIndex].content} {...controlFns} key={activeSlideIndex} />
            ) : (
              fallBack
            )}
          </motion.section>
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

export default PitchPresentation;

// const sections = [
//   {
//     title: "overview",
//     // icon: "architect",
//     content: <PitchOverview />,
//     // content: (
//     //   <>
//     //     <PitchOverview01/>
//     //   </>
//     // ),
//     // content: <PresentationSlide stages={4} ><PitchOverview /></PresentationSlide>,
//   },
//   {
//     title: "problem",
//     // icon: "architect",
//     // content: <ProjectPanelTimeline project={project} />,
//     content: <PresentationSlide stages={3} />,
//   },
//   {
//     title: "solution",
//     // icon: "architect",
//     // content: <ProjectPanelMeetings project={project} />,
//   },
//   {
//     title: "target market",
//     // icon: "architect",
//     // content: <ProjectPanelEvaluations project={project} />,
//   },
//   {
//     title: "the Platform",
//     // icon: "architect",
//     // content: <ProjectPanelDocuments project={project} />,
//   },
//   {
//     title: "competition",
//     // icon: "architect",
//     // content: <ProjectPanelIssues project={project} />,
//   },
//   {
//     title: "business Model",
//     // icon: "architect",
//     // content: <ProjectPanelIssues project={project} />,
//   },
//   {
//     title: "team",
//     // icon: "architect",
//     // content: <ProjectPanelIssues project={project} />,
//   },
//   {
//     title: "implementation",
//     // icon: "architect",
//     // content: <ProjectPanelIssues project={project} />,
//   },
// ];
