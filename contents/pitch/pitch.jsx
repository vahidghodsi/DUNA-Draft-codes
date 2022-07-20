/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAppMessage } from "@redux/actions/app";
import { app_message_info_types, app_message_types } from "@models/app-message-types";
import * as Yup from "yup";
import FormMultiStep from "@components/modular/inputs/form-multi-step";
// import Title from "@components/modular/elements/title";
// import Form from "@components/modular/inputs/form";
// import Loader from "@components/graphics/loader";
// import LoaderContainer from "@components/graphics/loader-container";

import styles from "./pitch-style";

const Pitch = props => {
  // console.log("[Pitch:]", props);
  // const [active, setActive] = useState(false);
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();

  let mainCls = [
    [true, "_pitch"],
    [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== FUNCTIONS & CONFFIGS==========
  const submitHandler = values => {
    router.push(`./pitch/pitch-presentation?username=${values.username}&password=${values.password}`);
  };

  const formConfig = {
    title: "Please Enter Your Access Data",
    elements: [
      [
        {
          type: "text",
          name: "username",
          label: "Name",
          placeholder: "Name, or Email",
          validationSchema: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
        },
      ],
      [
        {
          type: "password",
          name: "password",
          label: "pas sword",
          placeholder: "pass code",
          validationSchema: Yup.string()
            .min(4, "Must be 6 characters or more")
            .max(10, "Must be 6 characters or less")
            .required("Required"),
        },
      ],
    ],
    actions: [
      {
        name: "cancel",
        type: "decline",
        label: "cancel",
        do: () => console.log("action Item : CANCEL"),
      },
      {
        name: "submit",
        type: "confirm",
        label: "submit",
        // do: values => console.log("action Item : SUBMIT : ", values),
        do: values => submitHandler(values),
      },
    ],
  };

  // ===== EFFECTS ==========

  useEffect(() => {
    // console.log(query);
    if (query.status && query.status === "NOT_ACCEPTED") {
      dispatch(
        updateAppMessage({
          duration: 10000, //ms
          type: app_message_types.alert,
          info_type: app_message_info_types.error,
          content: <div key="1" className="">Access data is not valid, please try again</div>,
          actions: [
            {
              type: "confirm",
              label: "ok",
              do: () => {
                console.log("Not Accepted");
              },
            },
          ],
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container">
        {/* <PitchPresentation /> */}
        {/* <div className="_grid-3row-fix-middle"> */}
        {/* <Title xl link="./pitch/pitch-deck">
            Pitch Deck Presentation
          </Title> */}
        <div></div>
        <div className="form-container">
          <FormMultiStep xl config={formConfig} />
        </div>
        {/* <div></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Pitch;
