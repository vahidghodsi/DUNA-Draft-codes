import { loremIpsum } from "react-lorem-ipsum";
import dayjs from "dayjs";
import { PROJECT_PROGRAM_TYPES, PROJECT_SCOPE_TYPES } from "../../../dev-material/datamodel-definitions";
// import { assetsGenerator } from "./asset-generator";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

// config: type | scope | location | locationCord | attributes
export const briefGenerator = (date = "1-1-2022", config = {}) => {
  // =====  =====
  let siteArea = roundedRandom(300) * 100;
  let BuildigFootPrint = siteArea * ((roundedRandom(4) + 3) / 10);
  let floorArea = BuildigFootPrint * (roundedRandom(4) + 3);
  let attributes = config.attributes ? [...config.attributes] : [];
  
  // ===== RETURN =====
  return {
    type: config.type || PROJECT_PROGRAM_TYPES.residential,
    scope: config.scope || PROJECT_SCOPE_TYPES.new_construction,
    location: config.location || "location",
    locationCord: config.locationCord || undefined,
    siteArea: siteArea,
    BuildingFootprint: BuildigFootPrint,
    floorArea: floorArea,
    // stories: (roundedRandom(10) + 2),
    stories: parseInt(floorArea / BuildigFootPrint),
    description: loremIpsum({ p: parseInt(Math.random() * 4) + 1, random: true, startWithLoremIpsum: false }),
    created_at: dayjs(date).format(),
    //navigation properties
    attributes: attributes,
  };
};

// ===== REFERENCES ==========

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
