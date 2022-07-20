import { name, surname } from "react-lorem-ipsum";
import { PROJECT_PROGRAM_TYPES } from "../../../dev-material/datamodel-definitions";
import dayjs from "dayjs";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

export const profileCreditsGenerator = (count = 10, targetCredit = 6.8) => {
  let recordeDate = dayjs();
  let credits = [];
  for (let i = 0; i < count; i++) {
    credits.push({
      credit: parseInt(targetCredit * 10) / 10,
      created_at: recordeDate.format(),
    });
    targetCredit -= roundedRandom(4, 0) / 10;
    recordeDate = recordeDate.subtract(roundedRandom(60), "days");
  }
  return credits;
};

export const specialtyGenertor = count => {
  let specialtyTypes = Object.keys(PROJECT_PROGRAM_TYPES);
  let specialties = [];
  for (let i = 0; i < count; i++) {
    specialties.push(specialtyTypes[Math.floor(Math.random() * (specialtyTypes.length + 1))]);
  }
  return specialties;
};

export const profileGenerator = (type = "architect", profile_id, profileName) => {
  let firstName = profileName ? profileName.split(" ")[0] : name();
  let lastName = profileName ? profileName.split(" ")[1] : surname();

  return {
    id: profile_id || "POFILE" + roundedRandom(2000),
    type: type,
    firstName: firstName,
    lastName: lastName,
    prefix: "",
    name: profileName || firstName + " " + lastName,
    email: firstName + "." + lastName + "@gmail.com",
    tel: [""],
    mobile: [""],
    website: [""],
    address: [""],
    emailVerified: true,
    accountVerified: true,
    credit: Math.floor(Math.random() * 35) / 10 + 5,
    speciality: specialtyGenertor(Math.floor(Math.random() * 4)),
    avatar: "random",
    settings: {},
    verification_token: "",
    //   for architects
    //   evaluations_id: ["", ""],
  };
};

export const generateProfiles = (type = "architect", count) => {
  let profiles = [];
  if (!count) count = roundedRandom(15);
  for (let i = 0; i < count; i++) {
    profiles.push(profileGenerator(type));
  }
  return profiles;
};

// ===== REFERENCES ==========

// const PROFILE = {
//   id: "",
//   type: "", //client,architect,office
//   prefix: "", // mr, mrs, dr, etc
//   firstName: "",
//   lastName: "",
//   email: [""],
//   tel: [""],
//   mobile: [""],
//   website: [""],
//   address: [""],
//   emailVerified: true,
//   accountVerified: true, // like picture or legal verification
//   speciality: "residential,interior", //use as a tagging feature for notification
//   verification_token: "",
//   //foreign keys
//   avatar_asset_id: "",
// };

// const PROFILE_CREDITS = {
//   id: "",
//   profile_id: "",
//   credit: 6,
//   created_at: "",
// };

// const PROFILE_SETTING = {
//   id: "",
//   profile_id: "",
//   interface_theme: "", //dark,light
//   user_expert_level: "",

//   // notif_project_issue_push: NOTIF_ACTION_TYPES.all,
//   // notif_project_issue_email: NOTIF_ACTION_TYPES.mention, // for more specefic conditions
//   // project_issue_sms_notification: NOTIFICATION_ACTION_TYPES.no,

//   notif_profile_push: NOTIF_ACTION_TYPES.all,
//   notif_profile_email: NOTIF_ACTION_TYPES.no,

//   notif_round_push: NOTIF_ACTION_TYPES.all,
//   notif_round_email: NOTIF_ACTION_TYPES.no,

//   notif_project_push: NOTIF_ACTION_TYPES.all,
//   notif_project_email: NOTIF_ACTION_TYPES.mention,

//   notif_office_push: NOTIF_ACTION_TYPES.all,
//   notif_office_email: NOTIF_ACTION_TYPES.no,

//   notif_evaluation_push: NOTIF_ACTION_TYPES.all,
//   notif_evaluation_email: NOTIF_ACTION_TYPES.no,
// };
