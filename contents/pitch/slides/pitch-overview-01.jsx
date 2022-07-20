import Title from "@components/modular/elements/title";
import SlideElement from "@components/presentation/modular/slide-element";
import * as presentationPresets from "@models/presentation-presets";
// import * as animationPresets from "@models/animation-presets";
import { FADE_IN_OUT, SLIDE_RIGHT_LEFT, SLIDE_LEFT_RIGHT, SLIDE_DOWN_UP } from "@models/animation-presets";
import Bulletpoints from "@components/presentation/modular/bulletpoints";

const PitchOverview01 = () => {
  return (
    <div>
      <SlideElement position={presentationPresets.TITLE} animation={FADE_IN_OUT}>
      What Clients need to do To find the <span className="_bold _text-presentation">RIGHT ARCHITECT</span>;
      </SlideElement>
      <SlideElement position={presentationPresets.SUB_TITLE} stage={1} animation={FADE_IN_OUT}>
        <Title bold xl>
          What makes it unique
        </Title>
      </SlideElement>
      <SlideElement position={{ x: 40, y: 200 }} stage={[1, 3]} animation={SLIDE_RIGHT_LEFT}>
        <Title bold xl>
          Architect
        </Title>
      </SlideElement>
      <SlideElement position={{ x: 650, y: 200 }} stage={[1, 3]} delay={[0.5, 0.3]} animation={SLIDE_LEFT_RIGHT}>
        <Title bold xl>
          Client
        </Title>
      </SlideElement>
      {/* <SlideElement position={{ x: 40, y: 100 }} stage={3} delay={0.7} animation={SLIDE_DOWN_UP}>
        <Bulletpoints
        stage={3}
          items={[
            {
              title: "Outcome",
              content:
                "Can not be sure if the outcome is what they will like. besides, the judgement is a matter of experties, to some extent.",
              icon: "project-design",
            },
            {
              title: "who",
              content: "finding the right architect is difficult time consuming task.",
              icon: "architect",
            },
            {
              title: "why",
              content: "they usually dont know the values and services they get, and why they are paying.",
              icon: "money",
            },
          ]}  
        />
      </SlideElement> */}
        <Bulletpoints position={{ x: 40, y: 120 }} stage={3} delay={0.7} animation={SLIDE_DOWN_UP}
          items={[
            {
              title: "Outcome",
              content:
                "Can not be sure if the outcome is what they will like. besides, the judgement is a matter of experties, to some extent.",
              icon: "project-design",
            },
            {
              title: "who",
              content: "finding the right architect is difficult time consuming task.",
              icon: "architect",
            },
            {
              title: "why",
              content: "they usually dont know the values and services they get, and why they are paying.",
              icon: "money",
            },
          ]}
        />

    </div>
  );
};

export default PitchOverview01;

// ** position: can be an object having x and y (e.g. defined locally or imported from presentation-presets),
// or a string refering to a preset from presentation-preset library
// ** animation: can be an object (e.g. defined locally or imported from animation-presets),
// or a string refering to a preset from animation-preset library
