export const ROUND_TYPES = {
  standard: "[ROUND_TYPES]STANDARD",
  limited_entry: "[ROUND_TYPES]LIMITED_ENTRY",
  free_competition: "[ROUND_TYPES]FREE_COMPETITION",
  two_stage: "[ROUND_TYPES]TWO_STAGE",
};

export const ROUND_STATE_TYPES = {
  // initiated, submitted, validated, started, registrationEnded, registrationConfirmed, projectsSubmissionEnded, Evaluated, Completed | suspended, failed
  initiated: "[ROUND_STATE]INITIATED",
  submitted: "[ROUND_STATE]SUBMITTED",
  validated: "[ROUND_STATE]VALIDATED",
  started: "[ROUND_STATE]STARTED",
  registrationEnded: "[ROUND_STATE]REGISTRATION_ENDED",
  registrationConfirmed: "[ROUND_STATE]REGISTRATION_CONFIRMED",
  projectSubmissionEnded: "[ROUND_STATE]PROJECTS_SUBMISSION_ENDED",
  Evaluated: "[ROUND_STATE]EVALUATED",
  Completed: "[ROUND_STATE]COMPLETED",
  suspended: "[ROUND_STATE]SUSPENDED",
  failed: "[ROUND_STATE]FAILED",
};

export const PROJECT_SCOPE_TYPES = {
  interior: "[PROJECT_SCOPE_TYPES]INTERIOR",
  exterior: "[PROJECT_SCOPE_TYPES]EXTERIOR",
  new_construction: "[PROJECT_SCOPE_TYPES]NEW_CONSTRUCTION",
  renovation: "[PROJECT_SCOPE_TYPES]RENOVATION",
  restoration: "[PROJECT_SCOPE_TYPES]RESTORATION",
};

export const PROJECT_PROGRAM_TYPES = {
  residential: "[PROJECT_PROGRAM_TYPES]RESIDENTIAL",
  office: "[PROJECT_PROGRAM_TYPES]OFFICE",
  cultural: "[PROJECT_PROGRAM_TYPES]CULTURAL",
  commercial: "[PROJECT_PROGRAM_TYPES]COMMERCIAL",
  industrial: "[PROJECT_PROGRAM_TYPES]INDUSTRIAL",
  health: "[PROJECT_PROGRAM_TYPES]HEALTH",
  hospitality: "[PROJECT_PROGRAM_TYPES]HOSPITALITY",
};

export const PROJECT_CATEGORIES = {
  // what platform assgins, from its pre-defined categories
  cat1: "[PROJECT_CATEGORIES]CAT1",
};

export const PROJECT_DATE_TYPES = {
  status: "[PROJECT_DATE_TYPES]STATUS",
  milestones: "[PROJECT_DATE_TYPES]MILESTONES",
};

export const PROJECT_CONTRIBUTORS_TYPES = {
  // type: ["head", "design"],
  design: "[PROJECT_CONTRIBUTION_TYPES]DESIGN",
  principal: "[PROJECT_CONTRIBUTION_TYPES]PRINCIPAL",
  head: "[PROJECT_CONTRIBUTION_TYPES]HEAD",
  director: "[PROJECT_CONTRIBUTION_TYPES]DIRECTOR",
  project_management: "[PROJECT_CONTRIBUTION_TYPES]PROJECT_MANAGEMENT",
  interior: "[PROJECT_CONTRIBUTION_TYPES]INTERIOR",
  technical: "[PROJECT_CONTRIBUTION_TYPES]TECHNICAL",
  presentation: "[PROJECT_CONTRIBUTION_TYPES]PRESENTATION",
  consultant: "[PROJECT_CONTRIBUTION_TYPES]CONSULTANT",
  outsource: "[PROJECT_CONTRIBUTION_TYPES]OUTSOURCE",
  modelmaking: "[PROJECT_CONTRIBUTION_TYPES]MODELMAKING",
};

export const EVALUATION_STATUS_TYPES = {
  // requested, completed, invalid, refused
  completed: "[EVALUATION_STATUS_TYPES]COMPLETED",
  requested: "[EVALUATION_STATUS_TYPES]REQUESTED",
  refused: "[EVALUATION_STATUS_TYPES]REFUSED",
  invalid: "[EVALUATION_STATUS_TYPES]INVALID",
};

export const NOTIF_ACTION_TYPES = {
  // default, //reads from notification type definitions
  all: "ALL",
  no: "NO",
  mention: "MENTION",
  role: "ROLE",
};

export const GENERAL_ASSET_TYPES = {
  // file_type: "", //pdf,jpeg,png or picture|object|text|...
};
