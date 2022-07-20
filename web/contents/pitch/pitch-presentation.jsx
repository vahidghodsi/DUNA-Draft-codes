/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import Title from "@components/modular/elements/title";
// import Loader from "@components/graphics/loader";
// import LoaderContainer from "@components/graphics/loader-container";
import Presentation from "@components/presentation/presentation";

import PitchOverview01 from "./slides/pitch-overview-01";
import PitchOverview02 from "./slides/pitch-overview-02";
import PitchProblem01 from "./slides/pitch-problem-01";
import styles from "./pitch-presentation-style";

const PitchPresentation = props => {
  // console.log("[PitchPresentation:]", props);

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

  let mainCls = [
    [true, "_pitch-presentation"],
    // [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <Presentation slides={slides} />
    </div>
  );
};

export default PitchPresentation;

