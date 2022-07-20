// import { useState } from "react";

import GraphicSet from "@components/graphics/graphic-set";
import Title from "@components/modular/elements/title";
// import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion, useCycle } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const obj1Style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  width: "50px",
  borderRadius: "5px",
};
const obj2Style = { height: "30px", width: "30px", borderRadius: "20px" };

// const sampleVariant = {
//   hidden: {
//     x: 0,
//     y: 200,
//     opacity: 0.1,
//     border: "var(--border-secondary)",
//     background: "var(--color-light)",
//   },
//   visible: {
//     x: [null, 100, 600, 400],
//     y: 200,
//     background: "var(--color-secondary)",
//     scale: 1.1,
//     rotate: [0, 180, 540, 360],
//     opacity: 1,
//     boxShadow: "none",
//     transition: {
//       delay: 0.2,
//       duration: 2,
//       type: "spring",
//       stiffness: "100",
//       times: [0, 0.25, 0.5, 1],
//       // when: "beforeChildren",
//     },
//   },
//   hover: {
//     background: "var(--color-primary)",
//     border: "var(--border-primary)",
//     y: 170,
//     scale: 1.25,
//     boxShadow: "var(--shadow-primary)",
//     transition: { delay: 0, duration: 0.2, type: "spring", stiffness: "250" },
//   },
// };

const sampleVariant2 = {
  hidden: {
    x: 0,
    y: 200,
    opacity: 0.1,
    border: "var(--border-secondary)",
    background: "var(--color-light)",
  },
  visible: {
    x: 400,
    y: 200,
    background: "var(--color-secondary)",
    scale: 1.1,
    rotate: 360,
    opacity: 1,
    boxShadow: "none",
    transition: {
      delay: 0.2,
      duration: 2,
      type: "spring",
      stiffness: "100",
      // when: "beforeChildren",
    },
  },
  hover: {
    background: "var(--color-primary)",
    border: "var(--border-primary)",
    y: 190,
    scale: 1.25,
    rotate: 180,
    boxShadow: "var(--shadow-primary)",
    transition: { delay: 0, duration: 0.2, type: "spring", stiffness: "250" },
  },
  exit: {
    y: 100,
    opacity: 0.1,
    background: "var(--color-info)",
    transition: { delay: 0, duration: 2, type: "easeInOut" },
  },
};

const tabVariants = {
  hidden: {
    // opacity: 0.1,
    // // border: "var(--border-secondary)",
    // background: "var(--background)",
    // height: 0,
  },
  visible: {
    background: "var(--color-secondary)",
    opacity: 0.8,
    // height: 50,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
      stiffness: "200",
      // when: "beforeChildren",
    },
  },
  visible2: {
    background: "var(--color-secondary)",
    opacity: 0.8,
    height: 100,
    y: -25,
    transition: {
      delay: 0.1,
      duration: 3,
      type: "spring",
      stiffness: "100",
      // when: "beforeChildren",
    },
  },
  hover: {
    background: "var(--color-primary)",
    opacity: 1,
    y: -1,
    scale: 1.05,
    transition: { delay: 0, duration: 0.2, type: "spring", stiffness: "250" },
  },
};

// const dropdownVariant = {
//   hidden: {
//     opacity: 0.1,
//     border: "var(--border-secondary)",
//     background: "var(--color-light)",
//   },
//   visible: {
//     // background: "var(--color-light)",
//     opacity: 1,
//     // border: "var(--border-primary)",
//     transition: {
//       delay: 0.2,
//       duration: 1,
//       type: "spring",
//       stiffness: "100",
//       // when: "beforeChildren",
//     },
//   },
//   childminimized: {
//     opacity: 0.11,
//     transition: {
//       delay: 0.2,
//       duration: 1,
//       type: "spring",
//       stiffness: "100",
//       // when: "beforeChildren",
//     },
//   },
//   childExpanded: {
//     opacity: 1,
//     transition: {
//       delay: 0.2,
//       duration: 1,
//       type: "spring",
//       stiffness: "100",
//       // when: "beforeChildren",
//     },
//   },
//   hover: {
//     border: "var(--border-primary)",
//     boxShadow: "var(--shadow-primary)",
//     transition: { delay: 0, duration: 0.2, type: "spring", stiffness: "250" },
//   },
//   exit: {
//     opacity: 0.1,
//     background: "var(--color-info)",
//     transition: { delay: 0, duration: 1, type: "easeInOut" },
//   },
// };

const DevMotion = () => {
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const [dropdowContent, setDropdowContent] = useState(false);

  return (
    <div className={"_container _h-100"} style={{}}>
      <div className="_spacer-50"></div>
      {/* <div style={{ height: "100px" }}> */}
        <GraphicSet item="arrows-expand-restore" style={{ height: "100px" }}/>
        <GraphicSet item="arrows-expand" style={{ height: "100px" }}/>
        <GraphicSet item="arrows-minimize" style={{ height: "100px" }}/>
      {/* </div> */}
      <div className="_spacer-50"></div>
      <Title lg state="active">
        MOTION
      </Title>
      <div className="_spacer-50"></div>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={sampleVariant2}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 2, type: "spring", stiffness: "100" }}
            exit="exit"
            whileHover="hover"
            style={obj1Style}
            onClick={() => setVisible(!visible)}
          >
            <div style={obj2Style}></div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ===== ===== */}
      <div className="_flex">
        {/* <LayoutGroup> */}
        {/* <AnimateSharedLayout> */}
        <div
          variants={tabVariants}
          initial="hidden"
          animate={activeTab === 1 ? tabVariants.visible : tabVariants.visible2}
          exit="exit"
          whileHover="hover"
          className="tab _grid.2rox-fix-top"
          onClick={() => setActiveTab(1)}
          style={{ width: "100px", margin: "15px" }}
        >
          <div>1</div>
          {activeTab === 1 ? (
            <motion.div
              // variants={tabVariants}
              // initial="hidden"
              transition={{ delay: 0.1, duration: 3, type: "spring", stiffness: "100" }}
              // animate="visible"
              style={{ width: "100%", height: "2px", background: "var(--color-primary)" }}
              layoutId="underline"
            ></motion.div>
          ) : null}
          {activeTab !== 1 ? (
            <motion.div
              transition={{ delay: 0.05, duration: 0.3, ease: "easeInOut" }}
              style={{ width: "100%", height: "2px", border: "var(--border-secondary)" }}
              layoutId="tab-content1"
            ></motion.div>
          ) : null}
        </div>
        <div
          drag="x"
          // dragConstraints = "Y"
          variants={tabVariants}
          initial="hidden"
          animate={activeTab === 2 ? tabVariants.visible : tabVariants.visible2}
          exit="exit"
          whileHover="hover"
          className="tab _grid.2rox-fix-top"
          onClick={() => setActiveTab(2)}
          style={{ width: "100px", margin: "15px" }}
        >
          <div>2</div>
          {activeTab === 2 ? (
            <motion.div
              // variants={tabVariants}
              // initial="hidden"
              transition={{ delay: 0.1, duration: 2, type: "spring", stiffness: "100" }}
              // animate="visible"
              style={{ width: "100%", height: "2px", background: "var(--color-primary)" }}
              layoutId="underline"
            ></motion.div>
          ) : null}
          {activeTab !== 2 ? (
            <motion.div
              transition={{ delay: 0.1, duration: 0.3 }}
              style={{ width: "100%", height: "2px", border: "var(--border-secondary)" }}
              layoutId="tab-content2"
            ></motion.div>
          ) : null}
        </div>
        <div
          variants={tabVariants}
          initial="hidden"
          animate={activeTab === 3 ? tabVariants.visible : tabVariants.visible2}
          exit="exit"
          whileHover="hover"
          className="tab _grid.2rox-fix-top"
          onClick={() => setActiveTab(3)}
          style={{ width: "100px", margin: "15px" }}
        >
          <div>3</div>
          {activeTab === 3 ? (
            <motion.div
              // variants={tabVariants}
              // initial="hidden"
              transition={{ delay: 0.1, duration: 2, type: "spring", stiffness: "100" }}
              // animate="visible"
              style={{ width: "100%", height: "2px", background: "var(--color-primary)" }}
              layoutId="underline"
            ></motion.div>
          ) : null}
          {activeTab !== 3 ? (
            <motion.div
              layout
              transition={{ delay: 0.1, duration: 0.3 }}
              style={{ width: "100%", height: "2px", border: "var(--border-secondary)" }}
              layoutId="tab-content3"
            ></motion.div>
          ) : null}
        </div>
        {/* </AnimateSharedLayout> */}
        {/* </LayoutGroup> */}
      </div>
      <div style={{ position: "absolute", top: "80px", left: "40px", width: "800px", height: "100px", zIndex: "-1" }}>
        {activeTab === 1 ? (
          <motion.div
            transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", border: "var(--border-primary)" }}
            layoutId="tab-content1"
          ></motion.div>
        ) : null}
        {activeTab === 2 ? (
          <motion.div
            transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", border: "var(--border-primary)" }}
            layoutId="tab-content2"
          ></motion.div>
        ) : null}
        {activeTab === 3 ? (
          <motion.div
            transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", border: "var(--border-primary)" }}
            layoutId="tab-content3"
          ></motion.div>
        ) : null}
      </div>
      {/*  */}
      <motion.div
        // layout
        // animate="visible"
        className="_grid-2row-fix-top"
        style={{ width: "350px", padding: "12px", border: "var(--border-primary)" }}
        onClick={() => setDropdowContent(!dropdowContent)}
      >
        <motion.div>head</motion.div>
        {/* <AnimatePresence> */}
        {/* {dropdowContent && */}
        <motion.ul
          initial={{ opacity: 0, background: "red" }}
          animate={{ opacity: 1, background: "blue" }}
          transition={{ duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
        >
          {[...Array(5)].map((i, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              {index}
            </motion.li>
          ))}
        </motion.ul>
        {/* ))} */}
        {/* </AnimatePresence> */}
      </motion.div>
    </div>
  );
};

export default DevMotion;
