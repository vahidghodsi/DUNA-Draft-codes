import { loremIpsum } from "react-lorem-ipsum";
import { profileGenerator } from "./profile-generator";
import { assetsGenerator } from "./asset-generator";

export const projectMeetingGenerator = () => {
  let clientsNo = [...Array(parseInt(Math.random() * 2) + 1)];
  let contributors = [...Array(parseInt(Math.random() * 5))];

  return {
    id: "meetingId1",
    title: "Official start of the project",
    description: "meeting with the clients for introduction on brief, milestones and processes.",
    date: "1/11/2021",
    is_internal: clientsNo.length === 0,
    is_important: true,
    text: loremIpsum({ p: 2, random: true, startWithLoremIpsum: false }),
    profiles: {
      clients: clientsNo.map(() => profileGenerator("client")),
      contributors: contributors.map(() => profileGenerator("architect")),
    },
    assets: [...assetsGenerator()],
  };
};

export const project_mockup_meetings = [
  {
    id: "meetingId1",
    title: "Official start of the project",
    description: "meeting with the clients for introduction on brief, milestones and processes.",
    date: "1/11/2021",
    is_internal: false,
    is_important: true,
    text: loremIpsum({ p: 2, random: true, startWithLoremIpsum: false }),
    profiles: {
      clients: [...Array(parseInt(Math.random() * 2))].map(() => profileGenerator("client")),
      contributors: [...Array(parseInt(Math.random() * 5))].map(() => profileGenerator("architect")),
    },
    assets: [...assetsGenerator()],
    // meeting_profile_ids: [""],
    // meeting_assets_id: [""],
  },
  {
    id: "meetingId2",
    title: "Team introductory meeting",
    description: "going through the project brief, plannings and team roles.",
    date: "10/11/2021",
    is_internal: true,
    is_important: true,
    text: loremIpsum({ p: 1, random: true, startWithLoremIpsum: false }),
    profiles: {
      clients: [...Array(0)].map(() => profileGenerator("client")),
      contributors: [...Array(8)].map(() => profileGenerator("architect")),
    },
    assets: [...assetsGenerator()],
    // meeting_profile_ids: [""],
    // meeting_assets_id: [""],,
  },
  {
    id: "meetingId3",
    title: "First studies discussion",
    description: "team bring their insights and studies for brain storming.",
    date: "22/11/2021",
    is_internal: true,
    is_important: false,
    text: loremIpsum({ p: 3, random: true, startWithLoremIpsum: false }),
    profiles: {
      clients: [...Array(0)].map(() => profileGenerator("client")),
      contributors: [...Array(6)].map(() => profileGenerator("architect")),
    },
    assets: [...assetsGenerator()],
    // meeting_profile_ids: [""],
    // meeting_assets_id: [""],
  },
  {
    id: "meetingId4",
    title: "Q&A session with client",
    description: "a meeting with client(s) to discuss findings, questions and problems.",
    date: "1/12/2021",
    is_internal: false,
    is_important: false,
    text: loremIpsum({ p: 2, random: true, startWithLoremIpsum: false }),
    profiles: {
      clients: [...Array(1)].map(() => profileGenerator("client")),
      contributors: [...Array(4)].map(() => profileGenerator("architect")),
    },
    assets: [...assetsGenerator()],
    // meeting_profile_ids: [""],
    // meeting_assets_id: [""],
  },
];
