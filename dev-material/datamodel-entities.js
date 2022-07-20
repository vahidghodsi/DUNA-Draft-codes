import * as DEFINITIONS from "./datamodel-definitions";

const ROUND = {
  id: "",
  title: "",
  round_type: "standard", // limited entry, free competition, 2-stage
  budget: "",
  category: "", // what platform assgins, from its pre-defined categories

  milestone1: "", // Round Start date
  milestone2: "", // Registration end date
  milestone3: "", // Confirmation end date
  milestone4: "", // Submission end date
  milestone5: "", // Evaluation end date
  milestone6: "", // Decision end date

  state: "initiated", // initiated, submitted, validated, started, registrationEnded, registrationConfirmed, projectSubmissionEnded, Evaluated, Completed | suspended, failed
  created_at: "",
  submitted_at: "",
  validated_at: "",
  registration_confirmed_at: "",
  projects_submission_ended_at: "",
  evaluated_at: "",
  completed_at: "",

  //update on timeline events
  round_all_average_score: 7.2, // average of all single averageScore in one round. for informative purposes
  round_all_weighted_average_score: 7.5, // average of all single wightedAverageScore in one round. for informative purposes

  //navigation properties
  projects_id: ["", ""],
  clients_id: ["", ""],
  brief_ids: ["", ""],
};

const ROUND_CLIENTS = {
  client_id: "id",
  round_id: "id",
  is_admin: true,
};

const ROUND_PROJECT_BRIEFS = {
  id: "",
  round_id: "",
  project_id: "",
  brief_id: "",
  created_at: "",
};

const ROUND_QA = {
  id: "",
  round_id: "",
  title: "",
  question: "",
  answer: "", // rich editor
  is_visible: true,
  created_at: "",
  created_by: "",
};

//schedule job -- runs 1 time per day
// const ROUND_SCORES_HISTORY = {
//   round_id: "id",
//   roundAllAverageScore: 7.2, // average of all single averageScore in one round. for informative purposes
//   roundAllWeightedAverageScore: 7.5, // average of all single wightedAverageScore in one round. for informative purposes
//   created_at: "",
// };

const PROJECT = {
  id: "id",
  title: "Plus Polymer",
  round: "id", // or Null for projects without any round
  category: "", // what platform assgins, from its pre-defined categories
  // status: "", // this is not included, since in the dates, the last date with the 'type' of 'status' is considered as updated status
  averageRank: 3.8,
  averageScore: 7.2,
  weightedAverageScore: 7.5,

  //foreign keys
  profile_id: "",
  //navigation properties
  briefs_id: [""],
  clients_id: [""],
  project_assets_id: [""],
  project_contributors_id: [""],
  project_dates_id: [""],
  project_meetings_id: [""],
  evaluations_id: [""],
  issues_id: [""],
};

const PROJECT_CLIENTS = {
  client_id: "id",
  project_id: "id",
  is_admin: true,
};

const PROJECT_ASSETS = {
  id: "",
  project_id: "",
  category: "", //drawing, 2d, 3d
  assets_id: "",
};

const PROJECT_DATES = {
  id: "",
  project_id: "",
  type: "", //status, milestones - defenition (also round registration and submission dates, if not used directly in the project itself)
  date: "",
  title: "",
  is_primary: false,
  is_on_timeline: false,
};

const PROJECT_MEETINGS = {
  id: "",
  project_id: "",
  title: "",
  description: "",
  date: "",
  text: "",
  is_internal: false,
  is_important: false,
  //navigation properties
  meeting_profile_ids: [""],
  meeting_assets_id: [""],
};

const PROJECT_MEETING_ASSETS = {
  meeting_id: "id",
  asset_id: "id",
};

const PROJECT_MEETING_PROFILES = {
  meeting_id: "id",
  profile_id: "id",
};

const PROJECT_CONTRIBUTORS = {
  id: "",
  profile_id: "", //optional
  project_id: "",
  is_verified: true, // if admin has approved
  invitation_email: "",
  name: "Vahid Ghodsi",
  title: "Architect",
  type: ["head", "design"], //design, project-management, interior, technical, presentation, consultant, out-source, modelmaking
};

const PROJECT_ROLES = {
  id: "",
  contributors_id: "",
  title: "Architect",
  //foreign keys
  claims_id: ["", ""],
};

const PROJECT_ROLE_CLAIMS = {
  project_role_id: "",
  claim_id: "",
};

const PROJECT_ISSUE = {
  id: "",
  created_at: "",
  created_by: "",
  title: "",
  description: "",
  is_internal: false, // only project members can access, not clients
  is_important: false,
  is_urgent: false,
  is_pinned: false,
  //foreign keys
  project_id: "",
};

const PROJECT_ISSUE_MESSAGES = {
  id: "",
  parent_id: "", //refer to current issue message
  issue_id: "",
  is_pinned: false,
  created_at: "",
  author: "",
  content: "",
  //navigation properties
  project_issue_message_assets_id: [""],
};

const PROJECT_ISSUE_MESSAGE_ASSETS = {
  id: "",
  project_issue_message_id: "",
  asset_id: "",
};

const OFFICE = {
  id: "",
  profile_id: "",
  created_at: "",
  expire_at: "", //used to set free period,as well as end of paid period
  is_active: false, //used for archiving and tracking purposes

  //foreign keys
  office_contributors_id: [""],
  membership_plan_id: "",
};

const OFFICE_CONTRIBUTORS = {
  id: "",
  profile_id: "", //optional
  office_id: "",
  is_admin: false,
  is_verified: true, // if admin has approved
  invitation_email: "",
  name: "Vahid Ghodsi",
  title: "Architect",
};

const OFFICE_ROLES = {
  id: "",
  office_contributor_id: "",
  title: "Architect",
  //foreign keys
  claims_id: ["", ""],
};

const OFFICE_ROLE_CLAIMS = {
  office_role_id: "",
  claim_id: "",
};

const BRIEF = {
  // these are fixed brief properties, the custom properties are stored as attributes in a BRIEF_ATTRIBUTES table
  id: "",
  type: "office",
  scope: "new construction", // interior, exterior, renovation, etc
  location: "Science & Technology Park (Irani Lnad)",
  locationCord: "",
  siteArea: 2700,
  BuildingFootprint: 1300,
  floorArea: 6000, //gross
  stories: 3,
  description: "",
  created_at: "", //iso date,
  //navigation properties
  attributes_ids: ["id", "id"],
};

const BRIEF_ATTRIBUTES = {
  id: "id",
  brief_id: "id",
  title: "spec1",
  value: "value1",
  assets_ids: "", // like pdf( like pdf version of the brief), pictures, movies, insights, movies,
};

const PROFILE = {
  id: "",
  type: "", //client,architect,office
  prefix: "", // mr, mrs, dr, etc
  firstName: "",
  lastName: "",
  email: [""],
  tel: [""],
  mobile: [""],
  website: [""],
  address: [""],
  emailVerified: true,
  accountVerified: true, // like picture or legal verification
  speciality: "residential,interior", //use as a tagging feature for notification
  verification_token: "",
  //foreign keys
  avatar_asset_id: "",
};

const PROFILE_CREDITS = {
  id: "",
  profile_id: "",
  credit: 6,
  created_at: "",
};

const CLIENT = {
  id: "",
  profile_id: "",
};

const ARCHITECT = {
  id: "",
  profile_id: "",
  //navigation properties
  evaluations_id: ["", ""],
};

const EVALUATION = {
  id: "",
  architect_id: "",
  project_id: "",
  created_at: "",
  status: DEFINITIONS.EVALUATION_STATUS_TYPES.completed, // requested, completed, invalid, refused
  rank: 4, // between 1-5, evaluator ranks project among 4 other projects
  // ===== SCORES : each between 1-10 - 0 reserved for other purposes- e.g. invalid result
  overallScore: 7.4,
  aspectsScore: 6.9, // average of aspect scoreces, or derived from them
  aspect_problemStatement: 6.5, // has it well understood the design problem, subject, values, etc
  aspect_concept: 7, // how is it related? how creativily solves the problem or adds value? etc
  aspect_program: 6, // function
  aspect_development: 8, // planning and idea development
  aspect_technical: 5, //
  aspect_feasibility: 8, // how feasibile is the design. (how is this related to built projects)
  text: "",
  // projectTitle: "project 1", //redundancy for evaluation display (to avoid loading all data) - use caching instead
  // architectName: "vahid ghodsi", //redundancy for evaluation display (to avoid loading all data) - use caching instead
  // architectCredit: 5, //redundancy for evaluation display (to avoid loading all data) - use caching instead
};

const EVALUATION_SET = {
  id: "",
  min_required_credit: 6,
};

const ROUND_PROJECT_EVALUATION_SET = {
  id: "",
  //foreign keys
  evaluation_set_id: "",
  project_id: "",
  round_id: "",
};

const ARCHITECT_EVALUATION_LIMIT = {
  id: "",
  is_suspended: false,
  created_at: "",
  expire_at: "",
  is_deleted: false,
  //foreign keys
  architect_id: "",
  round_id: "",
  project_id: "",
};

const CLAIMS = {
  id: "",
  title: "",
};

const GENERAL_ASSETS = {
  id: "",
  file_type: "", //pdf,jpeg,png
  path: "",
  file_name: "", //we may need this for foldering, like project_assets
};

const PROFILE_SETTING = {
  id: "",
  profile_id: "",
  interface_theme: "", //dark,light
  user_expert_level: "",

  // notif_project_issue_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  // notif_project_issue_email: DEFINITIONS.NOTIF_ACTION_TYPES.mention, // for more specefic conditions
  // project_issue_sms_notification: DEFINITIONS.NOTIF_ACTION_TYPES.no,

  notif_profile_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  notif_profile_email: DEFINITIONS.NOTIF_ACTION_TYPES.no,

  notif_round_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  notif_round_email: DEFINITIONS.NOTIF_ACTION_TYPES.no,

  notif_project_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  notif_project_email: DEFINITIONS.NOTIF_ACTION_TYPES.mention,

  notif_office_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  notif_office_email: DEFINITIONS.NOTIF_ACTION_TYPES.no,

  notif_evaluation_push: DEFINITIONS.NOTIF_ACTION_TYPES.all,
  notif_evaluation_email: DEFINITIONS.NOTIF_ACTION_TYPES.no,
};

const MEMBERSHIP_PLANS = {
  id: "",
  name: "",
  price: "",
  period: "", //in months
  description: "", //use rich editor to include features
};

// TABLEs LIST
const profiles = [
  [PROFILE, PROFILE_CREDITS, PROFILE_SETTING, NOTIF_ACTION_TYPES],
  CLIENT,
  [ARCHITECT, ARCHITECT_EVALUATION_LIMIT],
  [OFFICE, OFFICE_CONTRIBUTORS, OFFICE_ROLES, OFFICE_ROLE_CLAIMS],
];
const units = [
  [ROUND, ROUND_CLIENTS, ROUND_PROJECT_BRIEFS, ROUND_QA, ROUND_PROJECT_EVALUATION_SET],
  [
    PROJECT,
    PROJECT_CLIENTS,
    PROJECT_ASSETS,
    PROJECT_DATES,
    PROJECT_MEETINGS,
    PROJECT_MEETING_ASSETS,
    PROJECT_MEETING_PROFILES,
    PROJECT_CONTRIBUTORS,
    PROJECT_ROLES,
    PROJECT_ROLE_CLAIMS,
    PROJECT_ISSUE,
    PROJECT_ISSUE_MESSAGES,
    PROJECT_ISSUE_MESSAGE_ASSETS,
  ],
  [BRIEF, BRIEF_ATTRIBUTES],
  [EVALUATION, EVALUATION_SET, EVALUATION_SET_LIMIT],
  CLAIMS,
  GENERAL_ASSETS,
  MEMBERSHIP_PLANS,
];

// ROUND;
// ROUND_CLIENTS;
// ROUND_PROJECT_BRIEFS
// ROUND_QA
// PROJECT;
// PROJECT_CLIENTS;
// PROJECT_ASSETS;
// PROJECT_DATES;
// PROJECT_MEETINGS;
// PROJECT_MEETING_ASSETS;
// PROJECT_MEETING_PROFILES;
// PROJECT_CONTRIBUTORS;
// PROJECT_ROLES;
// PROJECT_ROLE_CLAIMS;
// PROJECT_ISSUE;
// PROJECT_ISSUE_MESSAGES;
// PROJECT_ISSUE_MESSAGE_ASSETS;
// OFFICE;
// OFFICE_CONTRIBUTORS;
// OFFICE_ROLES;
// OFFICE_ROLE_CLAIMS;
// BRIEF;
// BRIEF_ATTRIBUTES;
// PROFILE;
// PROFILE_CREDITS;
// PROFILE_SETTING;
// NOTIF_ACTION_TYPES;
// CLIENT;
// ARCHITECT;
// EVALUATION;
// EVALUATION_SET
// CLAIMS;
// GENERAL_ASSETS
