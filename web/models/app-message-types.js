export const app_message_types = {
  alert: "alert",
  prompt: "prompt",
};

export const app_message_info_types = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

export const button_action_types = {
  discard: "discard",
  confirm: "confirm",
  decline: "decline",
};

// const app_message_sample = {
//   date: "",
//   type: "alert", // or "propmt"
//   info_type: "info", // or "success, warning, error "
//   content: "A successful Test", // text or elements, it is handled by Title component
//   actions: [
//     {
//       type: "confirm", // or "decline"
//       label: "ok", //or "Yes", "No" , "Cancel, "Back"
//       do: () => {
//         console.log("Good to know");
//       },
//     },
//   ],
// };

// ===== Sample Messages ==========
const alert_1 = {
  duration: 5000,
  type: app_message_types.alert,
  content: "Test alert message",
  actions: [],
};

const alert_with_action_1 = {
  duration: 4000, //ms
  type: app_message_types.alert,
  content: "A random alert test",
  actions: [
    {
      type: "confirm",
      label: "ok",
      do: () => {
        console.log("Good to know");
      },
    },
  ],
};

const prompt_1 = {
  type: app_message_types.prompt,
  content: "test prompt. is it working?",
  actions: [
    {
      type: "decline",
      label: "No",
      do: () => {
        console.log("I fix this");
      },
    },
    {
      type: "confirm",
      label: "Yes",
      do: () => {
        console.log("Good to hear");
      },
    },
    {
      type: "decline",
      label: "damn it, yes!",
      do: () => {
        console.log("The best");
      },
    },
  ],
};

export const app_message_samples = { alert_1, alert_with_action_1, prompt_1 };
