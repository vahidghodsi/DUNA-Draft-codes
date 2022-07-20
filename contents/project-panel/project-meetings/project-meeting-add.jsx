/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import { app_message_info_types } from "@models/app-message-types";
import Modal from "@components/modular/containers/modal";
import Button from "@components/modular/elements/button";
import Title from "@components/modular/elements/title";
import Input from "@components/modular/inputs/input";
import Avatar from "@components/graphics/avatar";
import Date from "@components/modular/elements/date";
import styles, { projectMeetingAddMotionVariant } from "./project-meeting-add-style";
// import AppLevelDisplay from "@components/context/app-level-display";

const ProjectMeetingAdd = props => {
  //   console.log('[ProjectMeetingAdd:]', props);
  const [modalState, setModalState] = useState("minimized");
  const today_date = dayjs().format("YYYY-MM-DD");
  // const today_date_display = dayjs().format("DD MMM");

  let mainCls = [
    [true, "_project-meeting-add"],
    [props.className, props.className],
    // [props.active, "_active"],
    // [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const modalStateChangeHandler = modalState => {
    // console.log("___: ", modalState);
    setModalState(modalState);
  };

  const cancelHandler = () => {
    formik.resetForm();
    console.log(formik.values);
    modalStateChangeHandler("minimized");
    console.log("action Item : CANCEL");
  };

  const submitHandler = values => {
    console.log("action Item : SUBMIT : ", values);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      date: today_date,
      description: "",
      meeting_text: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(4, "Must be 4 characters or less")
        .max(40, "Must be 40 characters or less")
        .required("Required"),
      // date: Yup.string().required("Required"),
      // description : Yup.string()
      //   .max(50, "Must be 10 characters or less")
      //   .required("Required"),
      // meeting_text: Yup.string().required("Required"),
    }),
    onSubmit: submitHandler,
  });

  return (
    // <AppLevelDisplay active={modalState !== "minimized"} id={"project-meeting-add"}>
    <Modal
      className={mainCls.join(" ")}
      css={styles}
      state={modalState}
      actions={["minimize", "expand"]}
      stateChangeFn={state => modalStateChangeHandler(state)}
      variants={projectMeetingAddMotionVariant}
      initial={"initial"}
      animate={modalState === "open" ? "animateOpen" : modalState === "expanded" ? "animateExpanded" : "animate"}
    >
      <form id="new-meeting" className="_grid-2row-fix-top" onSubmit={formik.handleSubmit}>
        <div
          className="_grid-3col-fix-left-right"
          onClick={() => modalState === "minimized" && modalStateChangeHandler("open")}
        >
          <div className="tumbnail">
            <div></div>
          </div>
          {modalState === "minimized" ? (
            <>
              <Title lg bold>
                New Meeting
              </Title>
              <Title lg bold>
                <Date format={"DD MMM"} />
              </Title>
            </>
          ) : (
            <>
              <Input
                id="meeintg_title"
                type="text"
                name="title"
                value={formik.values["title"]}
                placeholder={"meeting's title"}
                changeFn={formik.handleChange}
                blurFn={formik.handleBlur}
                validation={true}
                message={
                  formik.touched["title"] && formik.errors["title"]
                    ? [{ content: formik.errors["title"], info_type: app_message_info_types.error }]
                    : []
                }
              />
              <Input
                id="meeting_date"
                type="date"
                name="date"
                value={formik.values["date"]}
                placeholder={today_date}
                changeFn={formik.handleChange}
                blurFn={formik.handleBlur}
                validation={true}
                message={
                  formik.touched["date"] && formik.errors["date"]
                    ? [{ content: formik.errors["date"], info_type: app_message_info_types.error }]
                    : []
                }
                style={{ marginLeft: "-12px !important" }}
              />
            </>
          )}
        </div>

        <div className="modal-content _grid-2row-fix-bottom">
          <div className="_grid-2row-fix-top">
            <Input
              id="meeting_description"
              name="description"
              value={formik.values["description"]}
              placeholder={"description"}
              changeFn={formik.handleChange}
              blurFn={formik.handleBlur}
            />
            <Input
              id="meeting_text"
              name="meeting_text"
              type={"textarea"}
              form={"new-meeting"}
              value={formik.values["meeting_text"]}
              placeholder={"meeting text"}
              changeFn={formik.handleChange}
              blurFn={formik.handleBlur}
            />
          </div>

          <div className="_grid-2row-fix-bottom">
            {/* ===== SUPPLEMENTS ========== */}
            <div className="_grid-3row">
              <div className="_grid-2col-fix-right">
                <div className="_flex">
                  <div className="_add-new-item"></div>
                  <Title sm secondary content={"Add Clients"} />
                </div>
                <Title sm icon={"client"} content={"0"} />
              </div>

              <div className="_grid-2col-fix-right">
                <div className="_grid-2col-fix-left">
                  <Avatar sm profile={"random"} style={{ margin: 0 }} />
                  <div className="_flex">
                    <div className="_add-new-item"></div>
                    <Title sm secondary content={"Add Architects"} />
                  </div>
                </div>
                <Title sm icon={"architect"} content={"0"} />
              </div>

              <div className="_grid-2col-fix-right">
                <div className="_flex">
                  <div className="_add-new-item"></div>
                  <Title sm secondary content={"Add Files"} />
                </div>
                <Title sm icon={"project-brief"} content={"0"} />
              </div>
            </div>

            {/* ===== ACTIONS ========== */}
            <div className="_buttons-row-right">
              <Button secondary clickFn={cancelHandler}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={Object.keys(formik.touched).length === 0 || Object.keys(formik.errors).length > 0}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
    // </AppLevelDisplay>
  );
};

export default ProjectMeetingAdd;

// return (
//   // <AppLevelDisplay active={modalState !== "minimized"} id={"project-meeting-add"}>
//   <Modal
//     className={mainCls.join(" ")}
//     css={styles}
//     state={modalState}
//     actions={["minimize", "expand"]}
//     stateChangeFn={state => modalStateChangeHandler(state)}
//   >
//     <form id="new-meeting" className="_grid-2row-fix-top" onSubmit={formik.handleSubmit}>
//       <div
//         className="_grid-3col-fix-left-right"
//         onClick={() => modalState === "minimized" && modalStateChangeHandler("open")}
//       >
//         <div className="tumbnail">
//           <div></div>
//         </div>
//         {modalState === "minimized" ? (
//           <>
//             <Title lg bold>
//               New Meeting
//             </Title>
//             <Title lg bold>
//               <Date format={"DD MMM"} />
//             </Title>
//           </>
//         ) : (
//           <>
//             <Input
//               id="meeintg_title"
//               type="text"
//               name="title"
//               value={formik.values["title"]}
//               placeholder={"meeting's title"}
//               changeFn={formik.handleChange}
//               blurFn={formik.handleBlur}
//               validation={true}
//               message={
//                 formik.touched["title"] && formik.errors["title"]
//                   ? [{ content: formik.errors["title"], info_type: app_message_info_types.error }]
//                   : []
//               }
//             />
//             <Input
//               id="meeting_date"
//               type="date"
//               name="date"
//               value={formik.values["date"]}
//               placeholder={today_date}
//               changeFn={formik.handleChange}
//               blurFn={formik.handleBlur}
//               validation={true}
//               message={
//                 formik.touched["date"] && formik.errors["date"]
//                   ? [{ content: formik.errors["date"], info_type: app_message_info_types.error }]
//                   : []
//               }
//               style={{ marginLeft: "-12px !important" }}
//             />
//           </>
//         )}
//       </div>

//       <div className="modal-content _grid-2row-fix-bottom">
//         <div className="_grid-3row-fix-top-bottom">
//           <Input
//             id="meeting_description"
//             name="description"
//             value={formik.values["description"]}
//             placeholder={"description"}
//             changeFn={formik.handleChange}
//             blurFn={formik.handleBlur}
//           />
//           <Input
//             id="meeting_text"
//             name="meeting_text"
//             type={"textarea"}
//             form={"new-meeting"}
//             value={formik.values["meeting_text"]}
//             placeholder={"meeting text"}
//             changeFn={formik.handleChange}
//             blurFn={formik.handleBlur}
//           />
//         </div>

//           {/* ===== SUPPLEMENTS ========== */}
//           <div className="_grid-3row">
//             <div className="_grid-2col-fix-right">
//               <div className="_flex">
//                 <div className="_add-new-item"></div>
//                 <Title sm secondary content={"Add Clients"} />
//               </div>
//               <Title sm icon={"client"} content={"0"} />
//             </div>

//             <div className="_grid-2col-fix-right">
//               <div className="_grid-2col-fix-left">
//                 <Avatar sm profile={"random"} style={{ margin: 0 }} />
//                 <div className="_flex">
//                   <div className="_add-new-item"></div>
//                   <Title sm secondary content={"Add Architects"} />
//                 </div>
//               </div>
//               <Title sm icon={"architect"} content={"0"} />
//             </div>

//             <div className="_grid-2col-fix-right">
//               <div className="_flex">
//                 <div className="_add-new-item"></div>
//                 <Title sm secondary content={"Add Files"} />
//               </div>
//               <Title sm icon={"project-brief"} content={"0"} />
//             </div>
//           </div>

//         {/* ===== ACTIONS ========== */}
//         <div className="_buttons-row-right">
//           <Button secondary clickFn={cancelHandler}>
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             disabled={Object.keys(formik.touched).length === 0 || Object.keys(formik.errors).length > 0}
//           >
//             Add
//           </Button>
//         </div>

//       </div>
//     </form>
//   </Modal>
//   // </AppLevelDisplay>
// );
