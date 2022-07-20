import { loremIpsum } from "react-lorem-ipsum";
import { profileGenerator } from "./profile-generator";
import { assetsGenerator } from "./asset-generator";
import dayjs from "dayjs";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

const projectIssueMessagesGenerator = (count = 10, issueDate = "1-1-2022") => {
  let issueMessageDate = dayjs(issueDate);
  let messages = [];

  for (let i = 0; i < count; i++) {
    issueMessageDate = issueMessageDate.add(roundedRandom(24), "hours");

    messages.push({
      id: issueMessageDate.format("DDMMYY") + i,
      author: profileGenerator("architect"),
      content: loremIpsum({ p: parseInt(Math.random() * 3) + 1, random: true, startWithLoremIpsum: false }),
      created_at: issueMessageDate.format(),
      parent_id:
        Math.random() < 0.2 && messages.length > 2
          ? messages[parseInt(Math.random() * (messages.length + 1))]?.id
          : undefined,
      is_pinned: false,
      profiles: {
        mentioned: [...Array(parseInt(Math.random() * 5))].map(() => profileGenerator("client")),
        clients: [...Array(parseInt(Math.random() * 2))].map(() => profileGenerator("client")),
      },
      assets: [...assetsGenerator()],
    });
  }

  return messages;
};

// const project_issue_message_mockup = {
//   parent_id: "", //refer to current issue message
//   is_pinned: false,
//   created_at: "8/12/2021",
//   author: profileGenerator("architect"),
//   content: loremIpsum({ p: 2, random: true, startWithLoremIpsum: false }),
// };

export const project_mockup_issues = [
  {
    id: "issueId1",
    created_at: "11/2/2021",
    created_by: profileGenerator("architect"),
    title: "documents of the exisitng construction not available",
    description: "should be get the documents or continue by estimations?",
    is_internal: true,
    is_important: true,
    is_urgent: true,
    is_pinned: false,
    messages: projectIssueMessagesGenerator(parseInt(Math.random() * 20), "11/5/2021"),
    //   profiles: {
    //     clients: [...Array(2)].map(() => profileGenerator("client")),
    //     contributors: [...Array(4)].map(() => profileGenerator("architect")),
    //   },
    assets: [...assetsGenerator()],
  },
  {
    id: "issueId2",
    created_at: "11/27/2021",
    created_by: profileGenerator("architect"),
    title: "documents of the exisitng construction not available",
    description: "should be get the documents or continue by estimations?",
    is_internal: true,
    is_important: true,
    is_urgent: false,
    is_pinned: false,
    messages: projectIssueMessagesGenerator(parseInt(Math.random() * 20), "11/27/2021"),
    //   profiles: {
    //     clients: [...Array(2)].map(() => profileGenerator("client")),
    //     contributors: [...Array(4)].map(() => profileGenerator("architect")),
    //   },
    assets: [...assetsGenerator()],
  },
  {
    id: "issueId3",
    created_at: "12/10/2021",
    created_by: profileGenerator("architect"),
    title: "documents of the exisitng construction not available",
    description: "should be get the documents or continue by estimations?",
    is_internal: false,
    is_important: false,
    is_urgent: false,
    is_pinned: false,
    messages: projectIssueMessagesGenerator(parseInt(Math.random() * 20), "12/10/2021"),
    //   profiles: {
    //     clients: [...Array(2)].map(() => profileGenerator("client")),
    //     contributors: [...Array(4)].map(() => profileGenerator("architect")),
    //   },
    assets: [...assetsGenerator()],
  },
  {
    id: "issueId4",
    created_at: "12/17/2021",
    created_by: profileGenerator("architect"),
    title: "documents of the exisitng construction not available",
    description: "should be get the documents or continue by estimations?",
    is_internal: true,
    is_important: true,
    is_urgent: true,
    is_pinned: true,
    messages: projectIssueMessagesGenerator(parseInt(Math.random() * 20), "12/17/2021"),
    //   profiles: {
    //     clients: [...Array(2)].map(() => profileGenerator("client")),
    //     contributors: [...Array(4)].map(() => profileGenerator("architect")),
    //   },
    assets: [...assetsGenerator()],
  },
];


// const PROJECT_ISSUE = {
//   id: "",
//   created_at: "",
//   created_by: "",
//   title: "",
//   is_internal: false, // only project members can access, not clients
//   is_important: false,
//   is_urgent: false,
//   is_pinned: false,
//   //foreign keys
//   project_id: "",
// };

// const PROJECT_ISSUE_MESSAGES = {
//   id: "",
//   parent_id: "", //refer to current issue message
//   issue_id: "",
//   is_pinned: false,
//   created_at: "",
//   author: "",
//   content: "",
//   //navigation properties
//   assets_id: ["", ""],
// };

// const PROJECT_ISSUE_MESSAGE_ATTACHMENTS = {
//   project_issue_message_id: "",
//   asset_id: "",
// };
