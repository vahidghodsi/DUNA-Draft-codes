import Title from "@components/modular/elements/title";
import SlideElement from "@components/presentation/modular/slide-element";

const PitchOverview02 = () => {
  return (
    <div>
      <SlideElement position={{ x: 0, y: 200 }} animate={{ x: 40, y: 200 }}>
        <Title bold xl>
          output
        </Title>
      </SlideElement>
      <SlideElement stage={[2, 3]} initial={{ x: 0, y: 300 }} animate={{ x: 40, y: 300 }}>
        <Title bold xl>
          who
        </Title>
      </SlideElement>
    </div>
  );
};

export default PitchOverview02;
