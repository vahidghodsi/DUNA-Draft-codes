import { useEffect, useRef, useState } from "react";

const FormMultiStepSection = props => {
  // console.log("[FormMultiStepSection:]", props);

  const sectionElRef = useRef(null);
  const sectionHolderElRef = useRef(null);
  // const [sectionState, setSectionState] = useState("");
  const sectionIndex = props.sectionIndex;
  const activeSectionIndex = props.activeSectionIndex;
  const [clsMinHeight, setClsMinHeight] = useState(undefined);
  const [inTransition, setInTransition] = useState(false);

  let mainCls = [
    [true, "_FormMultiStepSection"],
    [props.className, " " + props.className],
    // [props.disabled, "disabled"],
    // [props.secondary, "secondary"],
    [sectionIndex < activeSectionIndex, "_completed"],
    [sectionIndex === activeSectionIndex, "_active"],
    [sectionIndex > activeSectionIndex, "_inactive"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);
    
  // mainCls.push(
  //   sectionIndex < activeSectionIndex ? "_completed" : sectionIndex === activeSectionIndex ? "_active" : "_inactive"
  // );

  // let tempState =
  //   sectionIndex < activeSectionIndex ? "completed" : sectionIndex === activeSectionIndex ? "active" : "_inactive";
  // if (sectionState !== tempState) {
  //   setSectionState(tempState);
  // }

  useEffect(() => {
    if (sectionElRef.current) {
      sectionElRef.current.classList.add("_transition-none");
      // setClsMinHeight(undefined);
      setInTransition(true);
    }
  }, [props.children, sectionElRef]);

  useEffect(() => {
    if (inTransition) {
      let tempHeight = sectionHolderElRef.current.getBoundingClientRect().height;
      sectionElRef.current.classList.remove("_transition-none");
      setClsMinHeight(tempHeight);
      setInTransition(false);
    }
  }, [inTransition]);
  // useEffect(() => {
  //   if (!clsMinHeight) {
  //     let tempHeight = sectionHolderElRef.current.getBoundingClientRect().height;
  //     sectionElRef.current.classList.remove("_transition-none");
  //     setClsMinHeight(tempHeight);
  //   }
  // }, [clsMinHeight]);

  // useEffect(() => {
  //   if (sectionElRef.current) {
  //     sectionElRef.current.classList.add("_transition-none");
  //     let tempHeight = sectionHolderElRef.current.getBoundingClientRect().height;
  //     setClsMinHeight(tempHeight);
  //   }
  // }, [props.children, sectionElRef, clsMinHeight]);

  // if (sectionElRef.current) {
  //   sectionElRef.current.classList.remove("_transition-none");
  // }
  // console.log(toggle);
  // console.log(sectionElRef.current && sectionIndex === 0 ? sectionElRef.current.classList.value : "");

  return (
    <section className={mainCls.join(" ")} style={{ ...props.style, height: clsMinHeight }} ref={sectionElRef}>
      <div className="_holder" ref={sectionHolderElRef}>
        {props.children}
      </div>
    </section>
  );
};

export default FormMultiStepSection;

// function MeasureExample() {
//   const [height, setHeight] = useState(0);

//   const measuredRef = useCallback(node => {
//     if (node !== null) {
//       setHeight(node.getBoundingClientRect().height);
//     }
//   }, []);

//   return (
//     <>
//       <h1 ref={measuredRef}>Hello, world</h1>
//       <h2>The above header is {Math.round(height)}px tall</h2>
//     </>
//   );
// }
