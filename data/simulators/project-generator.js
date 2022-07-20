import { project_mockup_meetings } from "./project-meetings-generator";
import { project_mockup_issues } from "./project-issues-generator";
import { assetsGenerator } from "./asset-generator";
import { generateProfiles, profileGenerator } from "./profile-generator";
import { PROJECT_DATE_TYPES, PROJECT_CONTRIBUTORS_TYPES } from "../../../dev-material/datamodel-definitions";
import dayjs from "dayjs";
import { briefGenerator } from "./brief-generator";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

const projectDateGenerator = (config, type) => {
  // if (!type) type = [PROJECT_DATE_TYPES.milestone, PROJECT_DATE_TYPES.status][roundedRandom(2)];
  if (!type) type = PROJECT_DATE_TYPES.status;
  if (roundedRandom(10) < 2) type = PROJECT_DATE_TYPES.milestone;

  let isPrimary = config.isPrimary;
  if (!config.isPrimary) {
    isPrimary =
      type === PROJECT_DATE_TYPES.milestone
        ? roundedRandom(10) < 5
          ? true
          : false
        : Math.random() * 10 < 2
        ? true
        : false;
  }

  let isOnTimeline = config.isOnTimeline;
  if (!isOnTimeline) {
    if (type === PROJECT_DATE_TYPES.milestone) {
      isOnTimeline = isPrimary ? true : roundedRandom(10) < 3 ? true : false;
    } else {
      isOnTimeline = isPrimary ? (roundedRandom(10) < 5 ? true : false) : false;
    }
  }

  return {
    type: type,
    date: "01/11/2021",
    title: config.title || "project start",
    is_primary: isPrimary,
    is_on_timeline: isOnTimeline,
  };
};

const generateProjectDates = (count = 5, baseDate = "1-1-2022", type, config = {}) => {
  let date = dayjs(baseDate);
  // if (!type) type = [PROJECT_DATE_TYPES.milestone, PROJECT_DATE_TYPES.status][roundedRandom(2)];
  let projectDates = [];
  for (let i = 0; i < count; i++) {
    projectDates.push(projectDateGenerator(date, type, config));
  }
  return projectDates;
};

const contributorGenerator = name => {
  let profile = profileGenerator("architect", undefined, name);
  let isOnPlatform = Math.random() > 0.2;
  //design, project-management, interior, technical, presentation, consultant, out-source, modelmaking
  let contributionTypes = Object.keys(PROJECT_CONTRIBUTORS_TYPES);

  return {
    id: "",
    profile_id: isOnPlatform ? profile.id : undefined, //undefined means the user is not registered on the platform
    is_verified: isOnPlatform ? true : false, // also it is possible an account is registered but its contricution is not yet confirmed
    // invitation_email: "",
    name: profile.name,
    title: "Architect",
    type: contributionTypes[roundedRandom(contributionTypes.length)],
  };
};

const GenerateContributors = (count = 5) => {
  let contributors = [];
  for (let i = 0; i < count; i++) {
    contributors.push(contributorGenerator());
  }
  return contributors;
};

// config: title | type | isInRound = true | client | architect | clientsCount | teamCount | location
export const projectGenerator = (baseDate = "1-1-2022", project_id, round_id, config = {}) => {
  let cleints = [...generateProfiles("client", config.clientsCount || roundedRandom(2) + 1)];
  if (config.clients) contributors.unshift(profileGenerator("architect", undefined, config.clients));

  let contributors = [GenerateContributors(config.teamCount || roundedRandom(2) + 2)];
  if (config.architect) contributors.unshift(contributorGenerator(config.architect));

  return {
    id: project_id || "PR" + roundedRandom(10000),
    title: config.title || "my Project",
    round_id: round_id,
    averageRank: "",
    averageScore: "",
    weightedAverageScore: "",
    brief: briefGenerator(baseDate, { type: config.type, location: config.location }),
    clients: cleints,
    contributors: contributors,
    assets: [...assetsGenerator(10)],
    dates: [...generateProjectDates(roundedRandom(20))],
    meetings: [...project_mockup_meetings],
    issues: [...project_mockup_issues],
    evaluations: [
      //this should be requested seperately, on demand
    ],

    // the roles and claims that the curent user of the app has (if any) relative to this project
    roles_and_claims: [{}],
  };
};

export const roundProjectsGenerator = (count = 30, baseDate = "1-1-2022", round_id, periods) => {
  let roundDate = dayjs(baseDate);
  if (!round_id) round_id = "R" + parseInt(Math.random() * 2000);
  let projects = [];

  for (let i = 0; i < count; i++) {
    let round_registered_at = roundDate.add(2, "days");
    round_registered_at = round_registered_at.add(roundedRandom(periods[0]) - 2, "days");
    let round_submitted_at = roundDate.add(periods[0] + periods[1], "days");
    round_submitted_at = round_submitted_at.add(roundedRandom(periods[2]), "days");

    let project = projectGenerator(baseDate, undefined, round_id);
    // just needed information are passed
    projects.push({
      id: project.id,
      title: project.title,
      round_id: round_id,
      averageRank: project.averageRank,
      averageScore: project.averageScore,
      weightedAverageScore: project.weightedAverageScore,
      round_registered_at,
      round_submitted_at,
    });
  }

  return projects;
};

// dates: [
// {
//   type: PROJECT_DATE_TYPES.milestone, //status, milestones - defenition
//   date: "01/11/2021",
//   title: "project start",
//   is_primary: true,
//   is_on_timeline: true,
// },
// {
//   type: PROJECT_DATE_TYPES.status,
//   date: "",
//   title: "concept design",
//   is_primary: false,
//   is_on_timeline: false,
// },
// ],
