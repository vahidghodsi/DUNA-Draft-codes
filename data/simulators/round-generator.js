import { loremIpsum } from "react-lorem-ipsum";
import dayjs from "dayjs";
import {
  ROUND_STATE_TYPES,
  PROJECT_PROGRAM_TYPES,
  PROJECT_SCOPE_TYPES,
} from "../../../dev-material/datamodel-definitions";
import { profileGenerator } from "./profile-generator";
import { generateRoundEvaluations } from "./evaluation-generator";
import { roundProjectsGenerator } from "./project-generator";
// import { assetsGenerator } from "./asset-generator";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

const QAGenerator = (count = 10, baseDate = "1-1-2022", period = 80) => {
  let date = dayjs(baseDate);
  let items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      title: `question${i}`,
      question: loremIpsum({ p: 1, random: true, startWithLoremIpsum: false }),
      answer: loremIpsum({ p: parseInt(Math.random() * 3) + 1, random: true, startWithLoremIpsum: false }),
      is_visible: true,
      created_at: date.add(roundedRandom(period), "days").format(),
      created_by: profileGenerator("architect"),
    });
  }
  return items;
};

// config: onlyCompleted = false | allstates = true | periods = [] | projectCount = num
export const roundGenerator = (baseDate = "1-1-2022", round_id, config = {}) => {
  let round_date = dayjs(baseDate);
  round_id = round_id || "R" + parseInt(Math.random() * 2000);
  let round_title = config.title || "Round " + parseInt(Math.random() * 500);

  // ===== STATE =====
  // initiated | submitted | validated | started | registrationEnded | registrationConfirmed | projectSubmissionEnded | Evaluated | Completed | suspended | failed
  let stateTypes = Object.values(ROUND_STATE_TYPES);
  let roundState = ROUND_STATE_TYPES.Completed;
  if (!config.onlyCompleted) {
    let randomTypeFactor = Math.random();
    if (randomTypeFactor < 0.13) {
      roundState = ROUND_STATE_TYPES.started;
    } else if (randomTypeFactor < 0.25) {
      roundState = ROUND_STATE_TYPES.registrationEnded;
    } else if (randomTypeFactor < 0.4) {
      roundState = ROUND_STATE_TYPES.registrationConfirmed;
    } else if (randomTypeFactor < 0.55) {
      roundState = ROUND_STATE_TYPES.registrationEnded;
    } else if (randomTypeFactor < 0.7) {
      roundState = ROUND_STATE_TYPES.Evaluated;
    }

    if (config.allStates) {
      randomTypeFactor = Math.random();
      if (randomTypeFactor < 0.025) {
        roundState = ROUND_STATE_TYPES.suspended;
      } else if (randomTypeFactor < 0.05) {
        roundState = ROUND_STATE_TYPES.failed;
      } else if (randomTypeFactor < 0.1) {
        roundState = ROUND_STATE_TYPES.initiated;
      } else if (randomTypeFactor < 0.15) {
        roundState = ROUND_STATE_TYPES.submitted;
      } else if (randomTypeFactor < 0.25) {
        roundState = ROUND_STATE_TYPES.validated;
      }
    }
  }
  let stateTypeIndex = stateTypes.indexOf(roundState);

  // ===== DATES =====
  // Round Start date , Registration end date, Confirmation end date , Submission end date , Evaluation end date , Decision end date (completed)
  let periods = config.periods || [30, 7, 45, 14, 14];

  let milestone1 = round_date.add(10, "days");
  let milestone2 = milestone1.add(periods[0], "days");
  let milestone3 = milestone2.add(periods[1], "days");
  let milestone4 = milestone3.add(periods[2], "days");
  let milestone5 = milestone4.add(periods[3], "days");
  let milestone6 = milestone5.add(periods[4], "days");

  let submittedDate = undefined;
  let validatedDate = undefined;
  // let roundstartedDate = undefined;
  // let registrationEndedDate = undefined;
  let registrationConfirmedDate = undefined;
  let projectsSubmissionEndedDate = undefined;
  let evaluatedDate = undefined;
  let completedDate = undefined;

  if (roundState !== ROUND_STATE_TYPES.suspended && roundState !== ROUND_STATE_TYPES.failed) {
    if (stateTypeIndex >= 1) submittedDate = round_date.add(roundedRandom(7), "days"); //random days after initiation
    if (stateTypeIndex >= 2) validatedDate = submittedDate.add(roundedRandom(3), "days"); //random days that takes for validation
    if (stateTypeIndex >= 5) registrationConfirmedDate = milestone3;
    if (stateTypeIndex >= 6) projectsSubmissionEndedDate = milestone4;
    if (stateTypeIndex >= 7) evaluatedDate = milestone5;
    if (stateTypeIndex >= 8) completedDate = milestone6;
  }

  let QAItems = stateTypeIndex >= 4 ? QAGenerator(parseInt(Math.random() * 30), submittedDate, 80) : [];
  // console.log(roundState + "-->" + stateTypeIndex);
  // console.log(roundState + "-->" + round_date.add(10, "days"));

  // ===== PROJECTS =====
  let projectCount = config.projectCount || 40;
  let projects = [];
  if (stateTypeIndex >= 4) {
    // initiated | submitted | validated | 4 started | registrationEnded | registrationConfirmed | projectSubmissionEnded | Evaluated | Completed | suspended | failed
    // the start of the registration period is sent as date
    projects = roundProjectsGenerator(projectCount, milestone1, round_id, periods);
  }

  // ===== EVALUATIONS =====
  let evaluations = [];
  let roundAllAverageScore = undefined;
  let roundAllWeightedAverageScore = undefined;
  if (stateTypeIndex >= 7) {
    evaluations = generateRoundEvaluations(projects.length, periods[3], milestone4, { flatData: true });
    let evaluationsScores = evaluations.map(item => item.overallScore);
    roundAllAverageScore =
      parseInt((evaluationsScores.reduce((sum, item) => sum + item) / evaluationsScores.length) * 10) / 10;
    // roundAllWeightedAverageScore = "";
  }

  // ===== RETURN =====
  return {
    id: round_id,
    title: round_title,
    round_type: "standard",
    brief: {
      type: PROJECT_PROGRAM_TYPES.residential,
      scope: PROJECT_SCOPE_TYPES.new_construction,
      location: "location",
      locationCord: "",
      siteArea: 2700,
      BuildingFootprint: 1300,
      floorArea: 6000,
      stories: 3,
      description: loremIpsum({ p: parseInt(Math.random() * 4) + 1, random: true, startWithLoremIpsum: false }),
      created_at: round_date.format(),
      //navigation properties
      attributes: [],
    },
    clients: [{ profile: "", is_admin: true }],

    milestone_1: milestone1.format(),
    milestone_2: milestone2.format(),
    milestone_3: milestone3.format(),
    milestone_4: milestone4.format(),
    milestone_5: milestone5.format(),
    milestone_6: milestone6.format(),

    state: roundState,
    created_at: round_date?.format(),
    submitted_at: submittedDate?.format(),
    validated_at: validatedDate?.format(),
    projects_submission_ended_at: projectsSubmissionEndedDate?.format(),
    registration_confirmed_at: registrationConfirmedDate?.format(),
    evaluated_at: evaluatedDate?.format(),
    completed_at: completedDate?.format(),

    projects: projects,
    evaluations: evaluations,
    round_all_average_score: roundAllAverageScore,
    round_all_weighted_average_score: roundAllWeightedAverageScore,
    qa: [...QAItems],
  };
};

export const generateRounds = (count = 10, baseDate, config) => {
  let rounds = [];
  let round_id = undefined;
  for (let i = 0; i < count; i++) {
    rounds.push(roundGenerator(baseDate, round_id, config));
  }
  return rounds;
};

// ===== REFERENCES ==========

// const ROUND = {
//   id: "",
//   title: "",
//   round_type: "standard", // limited entry, free competition, 2-stage
//   budget: "",
//   category: "", // what platform assgins, from its pre-defined categories

//   milestone1: "", // Round Start date
//   milestone2: "", // Registration end date
//   milestone3: "", // Confirmation end date
//   milestone4: "", // Submission end date
//   milestone5: "", // Evaluation end date
//   milestone6: "", // Decision end date

//   state: "initiated", // initiated, submitted, validated, started, registrationEnded, registrationConfirmed, projectSubmissionEnded, Evaluated, Completed | suspended, failed
//   created_at: "",
//   submitted_at: "",
//   validated_at: "",
//   registration_confirmed_at: "",
//   projects_submission_ended_at: "",
//   evaluated_at: "",
//   completed_at: "",

//   //update on timeline events
//   round_all_average_score: 7.2, // average of all single averageScore in one round. for informative purposes
//   round_all_weighted_average_score: 7.5, // average of all single wightedAverageScore in one round. for informative purposes

//   //navigation properties
//   projects_id: ["", ""],
//   clients_id: ["", ""],
//   brief_ids: ["", ""],
// };

// const ROUND_CLIENTS = {
//   client_id: "id",
//   round_id: "id",
//   is_admin: true,
// };

// const ROUND_PROJECT_BRIEFS = {
//   round_id: "",
//   project_id: "",
//   brief_id: "",
//   created_at: "",
// };

// const ROUND_QA = {
//   id: "",
//   round_id: "",
//   title: "",
//   question: "",
//   answer: "", // rich editor
//   is_visible: true,
//   created_at: "",
//   created_by: "",
// };

//schedule job -- runs 1 time per day
// const ROUND_SCORES_HISTORY = {
//   round_id: "id",
//   roundAllAverageScore: 7.2, // average of all single averageScore in one round. for informative purposes
//   roundAllWeightedAverageScore: 7.5, // average of all single wightedAverageScore in one round. for informative purposes
//   created_at: "",
// };

// const BRIEF = {
//   // these are fixed brief properties, the custom properties are stored as attributes in a BRIEF_ATTRIBUTES table
//   id: "",
//   type: "office",
//   location: "Science & Technology Park (Irani Lnad)",
//   locationCord: "",
//   siteArea: 2700,
//   BuildingFootprint: 1300,
//   floorArea: 6000, //gross
//   stories: 3,
//   description: "",
//   created_at: "", //iso date,
//   //navigation properties
//   attributes_ids: ["id", "id"],
// };

// const BRIEF_ATTRIBUTES = {
//   id: "id",
//   brief_id: "id",
//   title: "spec1",
//   value: "value1",
//   assets_ids: "", // like pdf( like pdf version of the brief), pictures, movies, insights, movies,
// };
