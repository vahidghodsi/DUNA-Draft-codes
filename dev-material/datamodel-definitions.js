export const ROUND_TYPES = {
  standard: "standard",
  limited_entry: "limited-entry",
  free_competition: "free-competition",
  two_stage: "two-stage",
};

export const ROUND_STATE_TYPES = {
  // initiated, submitted, validated, started, registrationEnded, registrationConfirmed, projectsSubmissionEnded, Evaluated, Completed | suspended, failed
  initiated: "initiated",
  submitted: "submitted",
  validated: "validated",
  started: "started",
  registrationEnded: "registration_ended",
  registrationConfirmed: "registration_confirmed",
  projectSubmissionEnded: "projects_submission_ended",
  Evaluated: "evaluated",
  Completed: "completed",
  suspended: "suspended",
  failed: "failed",
};

export const PROJECT_SCOPE_TYPES = {
  interior: "interior",
  exterior: "exterior",
  new_construction: "new_construction",
  renovation: "renovation",
  restoration: "restoration",
};

export const PROJECT_PROGRAM_TYPES = {
  residential: "residential",
  office: "office",
  cultural: "cultural",
  commercial: "commercial",
  industrial: "industrial",
  health: "health",
  hospitality: "hospitality",
};

export const PROJECT_CATEGORIES = {
  // what platform assgins, from its pre-defined categories
  cat1: "cat1",
};

export const PROJECT_DATE_TYPES = {
  status: "status",
  milestone: "milestone",
};

export const PROJECT_CONTRIBUTORS_TYPES = {
  // type: ["head", "design"],
  design: "design",
  principal: "principal",
  head: "head",
  director: "director",
  project_management: "project_management",
  interior: "interior",
  technical: "technical",
  presentation: "presentation",
  consultant: "consultant",
  outsource: "outsource",
  modelmaking: "modelmaking",
};

export const EVALUATION_STATUS_TYPES = {
  // requested, completed, invalid, refused
  completed: "completed",
  requested: "requested",
  refused: "refused",
  invalid: "invalid",
};

export const NOTIF_ACTION_TYPES = {
  // default, //reads from notification type definitions
  all: "all",
  no: "no",
  mention: "mention",
  role: "role",
};

export const GENERAL_ASSET_TYPES = {
  // file_type: "", //pdf,jpeg,png or picture|object|text|...
};
