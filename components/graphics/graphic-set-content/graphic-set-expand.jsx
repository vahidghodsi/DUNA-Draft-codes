import { motion } from "framer-motion";
import { useState } from "react";

const GraphicSetExpand = props => {
  const [toggled, setToggled] = useState(props.toggeld);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.svg
      className="_H-fit"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setToggled(!toggled)}
      // style={{ border: "var(--border-dev)" }}
    >
      <g id="icon_arrows-expand" className="_H-fit">
        <motion.g
          id="arrow-top-right"
          initial={toggled ? {} : {}}
          animate={toggled ? (hovered ? { x: -45, y: 45 } : { x: -50, y: 50 }) : hovered ? { x: 5, y: -5 } : {}}
          transition={{ duration: 0.4 }}
          whileHover={{}}
        >
          <path className="_svg-primary" d="M89,39V11H61a6,6,0,0,1-6-6H89a6,6,0,0,1,6,6V45A6,6,0,0,1,89,39Z" />
          <polygon className="_svg-primary" points="76.52 15 85 15 53.54 46.46 53.54 37.98 76.52 15" />
        </motion.g>
        <motion.g
          id="arrow-bottom-left"
          animate={toggled ? (hovered ? { x: 45, y: -45 } : { x: 50, y: -50 }) : hovered ? { x: -5, y: 5 } : {}}
          transition={{ duration: 0.4 }}
        >
          <path className="_svg-primary" d="M39,89H11V61a6,6,0,0,0-6-6V89a6,6,0,0,0,6,6H45A6,6,0,0,0,39,89Z" />
          <polygon className="_svg-primary" points="47.17 61.31 47.17 52.83 15 85 23.48 85 47.17 61.31" />
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default GraphicSetExpand;

// case "arrows-minimize":
// contentEl = (
//   <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//     <g id="icon_arrows-expand" className="_H-fit">
//       <g id="arrow1">
//         <path className="_svg-primary" d="M89,39H61V11a6,6,0,0,0-6-6V39a6,6,0,0,0,6,6H95A6,6,0,0,0,89,39Z" />
//         <polygon className="_svg-primary" points="95 13.48 95 5 65 35 73.48 35 95 13.48" />
//       </g>
//       <g id="arrow2">
//         <path className="_svg-primary" d="M11,61H39V89a6,6,0,0,0,6,6V61a6,6,0,0,0-6-6H5A6,6,0,0,0,11,61Z" />
//         <polygon className="_svg-primary" points="26.52 65 35 65 5 95 5 86.52 26.52 65" />
//       </g>
//     </g>
//   </svg>
// );
