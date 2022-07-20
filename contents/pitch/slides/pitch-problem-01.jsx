import { motion } from "framer-motion";
import Title from "@components/modular/elements/title";

const PitchProblem01 = ({ stage }) => {
  // ** the main div must have stages attributes, otherwise the parent considers no stage for this slide
  const STAGES = 2;
  
  return (
    <div data-stages={STAGES} style={{}}>
      <motion.div key={1} initial={{ x: 0, y: 200 }} animate={{ x: 40, y: 200 }}>
        <Title bold xl>
          problem
        </Title>
      </motion.div>
      {stage >= 1 && (
        <motion.div key={2} initial={{ x: 0, y: 300 }} animate={{ x: 40, y: 300 }} exit={{ x: 0, y: 300, opacity: 0 }}>
          <Title bold xl>
            statement
          </Title>
        </motion.div>
      )}
    </div>
  );
};

export default PitchProblem01;
