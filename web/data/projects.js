import { project_mockup_meetings } from "./simulators/project-meetings-generator";
import { project_mockup_issues } from "./simulators/project-issues-generator";

// clients: [...Array(2)].map((i, index) => <ProfileTumbnail key={index} xs profile={"random"} />),
// contributors: [...Array(6)].map((i, index) => <ProfileTumbnail key={index} xs profile={"random"} />),

export const project1 = {
  id: "PR20220420",
  title: "my house",
  round: "id",
  averageRank: 7.8,
  averageScore: 7.2,
  weightedAverageScore: 7.5,
  brief: {
    type: "residential",
    location: "kordan, Iran",
    locationCord: "",
    siteArea: 3000,
    BuildingFootprint: 280,
    floorArea: 450,
    stories: 3,
    attributes: {},
  },
  clients: [
    //objects inside are populated by profiles
    {
      id: "profile_id",
      name: "ramtin elahi",
    },
  ],
  contributors: [
    //only approved and accepted contributions should be requested - not unapproved contribution assignment or invitations
    {
      profile_id: "", //optional
      name: "Vahid Ghodsi",
      title: "Architect",
    },
  ],
  assets: [
    {
      category: "", //drawing, 2d, 3d
      file_type: "", //pdf,jpeg,png
      path: "",
      file_name: "",
    },
  ],
  dates: [
    {
      type: "milestone", //status, milestones - defenition
      date: "01/11/2021",
      title: "project start",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "",
      title: "concept design",
      is_primary: false,
      is_on_timeline: false,
    },
  ],
  meetings: [...project_mockup_meetings],
  issues: [...project_mockup_issues],
  evaluations: [
    //this should be requested seperately, on demand
  ],

  // the roles and claims that the curent user of the app has (if any) relative to this project
  roles_and_claims: [{}],
};

export const project2 = {
  id: "PR139702",
  title: "Plus Polymer",
  round: "id",
  averageRank: null,
  averageScore: null,
  weightedAverageScore: null,
  brief: {
    type: "Office",
    location: "Science & Technology Park (Irani Lnad), Iran",
    locationCord: "",
    siteArea: 2700,
    BuildingFootprint: 1150,
    floorArea: 6000,
    stories: 5,
    description:
      "Plus Polymer company is an engineering and production group aiming to achieve new and advanced solutions in the field of polymer, and consists of highly educated and skilled personnel in different sections of the company. Each of these sections have specific demands which in some cases differ from that of other sections. In this respect, the plus polymer Building Project is defined to develop and enhance the company's activities, with the intention that its architecture can play an essential role in empowering these activities and their associated spaces, both in sectional and the whole complex scale.",
    attributes: {},
  },
  clients: [
    { id: "profile_id", name: "amir golchin" },
    { id: "profile_id", name: "hosein daryadari" },
  ],
  contributors: [
    {
      profile_id: "",
      name: "vahid ghodsi",
      title: "architect",
      type: ["head", "design", "project-management"],
    },
    {
      profile_id: "",
      name: "amir keshavarzian",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "siavash vazirnezami",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "mohammad-reza majidifar",
      title: "architect",
      type: ["technical"],
    },
    {
      profile_id: "",
      name: "mohammad-javad kasaie",
      title: "presentation",
      type: ["presentation"],
    },
    {
      profile_id: "",
      name: "majid gatmiri",
      title: "structural",
      type: ["consultants", "technical"],
    },
    {
      profile_id: "",
      name: "amir hasanzadeh",
      title: "mechanical,electerical",
      type: ["consultants", "technical"],
    },
    {
      profile_id: "",
      name: "a a",
      title: "contractor",
      type: ["construction"],
    },
  ],
  assets: [
    {
      category: "",
      path: "",
      file_name: "",
    },
    {
      category: "",
      path: "",
      file_name: "",
    },
  ],
  dates: [
    {
      type: "",
      date: "9/1/2018",
      title: "Project started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "1/1/2019",
      title: "Phase 1 design confirmed",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "milestone",
      date: "2/1/2019",
      title: "Phase2 design started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "milestone",
      date: "8/20/2019",
      title: "Architectural design delivered",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "status",
      date: "8/20/2019",
      title: "Approved for construction",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "status",
      date: "8/20/2019",
      title: "Construction started",
      is_primary: true,
      is_on_timeline: true,
    },
  ],
  meetings: [[...project_mockup_meetings.splice(1, 1)]],
  issues: [project_mockup_issues],
  evaluations: [],
  roles_and_claims: [{}],
};

export const project3 = {
  id: "PR139605",
  title: "Tabnak Building",
  round: "id",
  averageRank: null,
  averageScore: null,
  weightedAverageScore: null,
  brief: {
    type: "Office",
    location: "arak, iran",
    locationCord: "",
    siteArea: 400,
    BuildingFootprint: 260,
    floorArea: 800,
    stories: 5,
    description: [
      "The site of the project is located at the end of a 6 meter-wide alley, in a way that from west side is adjacent to the alley and from other three sides is next to the neighboring blocks. The site is 11.7 meter wide and 20 meter long, with the total area of 234 m2.",
      "The building is for residential purpose with 2 separate units in 2 stories, and the common spaces that will be in ground floor, underground level and on the roof level. Since both units will be used by client himself, common areas become important parts of the building. Building adjacency to the neighboring blocks and the alley, use of natural light and natural ventilation, and formation and relation between common areas are the main design objectives.",
    ],
    attributes: {},
  },
  clients: [{ id: "profile_id", name: "milad hezave" }],
  contributors: [
    {
      profile_id: "",
      name: "vahid ghodsi",
      title: "architect",
      type: ["head", "design", "project-management", "architectural-supervisor"],
    },
    {
      profile_id: "",
      name: "kiana mousavi",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "amir keshavarzian",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "mohammad-reza majidifar",
      title: "architect",
      type: ["technical"],
    },
    {
      profile_id: "",
      name: "majid gatmiri",
      title: "structural",
      type: ["consultants", "technical"],
    },
    {
      profile_id: "",
      name: "marjan yaghmayi",
      title: "mechanical",
      type: ["consultants", "technical"],
    },
    {
      profile_id: "",
      name: "milad hezave",
      title: "contractor",
      type: ["construction"],
    },
  ],
  assets: [
    //23
    {
      category: "",
      path: "",
      file_name: "",
    },
    {
      category: "",
      path: "",
      file_name: "",
    },
  ],
  dates: [
    {
      type: "",
      date: "3/1/2018",
      title: "Project started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "1/1/2018",
      title: "Phase 1 design confirmed",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "milestone",
      date: "7/1/2018",
      title: "Phase2 design started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "milestone",
      date: "8/1/2018",
      title: "Architectural design delivered",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "status",
      date: "8/10/2018",
      title: "Approved for construction",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "milestone",
      date: "8/15/2018",
      title: "Construction started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "8/15/2018",
      title: "Construction started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "milestone",
      date: "10/1/2020",
      title: "Construction finished",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "10/5/2020",
      title: "Built",
      is_primary: true,
      is_on_timeline: true,
    },
  ],
  meetings: [...project_mockup_meetings],
  issues: [...project_mockup_issues],
  evaluations: [],
  roles_and_claims: [{}],
};

export const project4 = {
  id: "PR139603",
  title: "Villa-e Aftab",
  round: "id",
  averageRank: null,
  averageScore: null,
  weightedAverageScore: null,
  brief: {
    type: "residential",
    location: "Mohammad shahr, Alborz",
    locationCord: "",
    siteArea: 1300,
    BuildingFootprint: 150,
    floorArea: 250,
    stories: 2,
    description: [
      "The site of this residential project is located in Aftab complex, in mohammad shahr town. The area of the site is around 1300 m2- 58 m by 23 m. The site is enclosed by tall trees and there are high number of trees inside the garden. However, two big walnut trees in the construction area has formed the main character and challenge of the design; how the architecture relate to these two trees and the garden.",
      "Considering the orientation and length in one direction, the visual connection between interior spaces and the garden are in this direction of the site, and the opposite Axe is treated with solid surfaces. 6 of these solid surfaces come at sides of the building area and walnut trees. Interior spaces emerge among these solids and the solids adjust to the program. In the second level there is less building mass and open spaces are formed.",
    ],
    attributes: {},
  },
  clients: [{ id: "profile_id", name: "payam fotouhi" }],
  contributors: [
    {
      profile_id: "",
      name: "vahid ghodsi",
      title: "architect",
      type: ["head", "design", "architectural-supervisor"],
    },
    {
      profile_id: "",
      name: "Leyla Saadat",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "amir keshavarzian",
      title: "architect",
      type: ["design"],
    },
    {
      profile_id: "",
      name: "majid gatmiri",
      title: "structural",
      type: ["consultants", "technical"],
    },
  ],
  assets: [
    //18
    {
      category: "",
      path: "",
      file_name: "",
    },
    {
      category: "",
      path: "",
      file_name: "",
    },
  ],
  dates: [
    {
      type: "milestone",
      date: "7/1/2017",
      title: "Project started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "7/25/2017",
      title: "Phase 1 design confirmed",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "milestone",
      date: "8/1/2017",
      title: "Phase2 design started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "milestone",
      date: "11/1/2017",
      title: "Architectural design delivered",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "status",
      date: "11/1/2017",
      title: "Approved for construction",
      is_primary: false,
      is_on_timeline: false,
    },
    {
      type: "milestone",
      date: "11/1/2017",
      title: "Construction started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "11/1/2017",
      title: "Construction started",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "milestone",
      date: "5/1/2019",
      title: "Construction finished",
      is_primary: true,
      is_on_timeline: true,
    },
    {
      type: "status",
      date: "5/1/2019",
      title: "Built",
      is_primary: true,
      is_on_timeline: true,
    },
  ],
  meetings: [...project_mockup_meetings],
  issues: [...project_mockup_issues],
  evaluations: [],
  roles_and_claims: [{}],
};

export const projects = [project1, project2, project3, project4];

// projects in old structure
export const temp = [
  {},
  {
    id: "CO139502",
    title: "Hellal-e Iranian",
    info: {
      status: "Design Proposal",
      category: "Competition",
      location: "Tehran- Iran",
      scale: "10000",
    },
    dates: {
      design: {
        start: "1/1/2017",
        phase2Start: "1/1/2017",
      },
      construction: {},
    },
    team: {
      architect: ["Vahid Ghodsi", "Amir Keshavarzian", "Khashayar Hamidi"],
      consultants: {},
      construction: {},
    },
    description: [
      "The usual formation of the buildings facade in the city takes place from designing an envelope on a mass which is usually the extrusion of the buildings’ initial placement. This  process, in the intense structure of the city, leads to solidification of the city mass and elimination of greenery. And inside of the buildings, which are the main place of human presence, will be deprived from natural light, ventilation and having interaction with the outside .",
      "The main approach for this design proposal is to achieve  an appropriate  respond to the mentioned  challenges. By the means of fragmentation of the initial mass (the foundation and structure the building has been built up to 6 story) and moving the parts in an acceptable range the design objectives such as integration of greenery with inside spaces, use of natural ventilation and sunlight can be addressed.",
    ],
    media: {
      imgQty: 12,
      videoQty: 0,
    },
  },
  {
    id: "PR139201",
    title: "Villa 101",
    info: {
      status: "Built",
      category: "Residential",
      location: "Koohsar - Iran",
      scale: "500",
    },
    dates: {
      design: {
        start: "1/1/2013",
        phase2Start: "2/1/2013",
        finish: "3/1/2013",
      },
      construction: {
        start: "3/1/2013",
        finish: "4/1/2016",
      },
    },
    team: {
      architect: "Vahid Ghodsi",
      consultants: {
        structural: "Majid Gatmiri",
        electrical: "Behnam Momeni",
        mechanical: "Mehdi Bazargani",
      },
      construction: {
        projectManager: ["Taban Hajimirza, Majid Gatmiri"],
        constructionHead: "Mohammadreza Eshrati",
        ArchitectureSupervisor: ["Vahid Ghodsi", "Siavash Mehdizadeh"],
        ConstructionSupervisor: "Majid Gatmiri",
      },
    },
    description: [
      "Located out of the city, this mid-size residence is in a garden (one unit of a large complex of villas). In spite of the flexibility came from the big area of the site, the project faced a certain limitations and challenges such as specific shape and orientation of the site, building regulations and construction, client’s requests, etc.",
      "Geometry of Building emerges from four cubes gathering around two vertical and horizontal Axes which are the basis of the concept of connection of inside to outside. Building is seen as a part of its environment not a single entity. Due to adjacency to neighboring gardens on both sides in a relative close distance, the building comes with solid walls on sides. This makes contrast with the High full glass surfaces on south and north facade, and focus on the South-North Axe which is also the entrance side and path to the backyard. The building is built in 430 m2 in two floors and 70m2 basement.",
    ],
    media: {
      imgQty: "31",
      videoQty: "0",
    },
  },
];

// {
//   id: "PR139702",
//   title: "Plus Polymer",
//   info: {
//     status: "Approved For Construction",
//     category: "Office",
//     location: "Science & Technology Park (Irani Lnad)",
//     scale: 6000,
//   },
//   dates: {
//     design: {
//       start: "9/1/2018",
//       phase2Start: "2/1/2019",
//       finish: "8/25/2019",
//     },
//     construction: {
//       start: "8/25/2019",
//     },
//   },
//   team: {
//     architect: "Vahid Ghodsi",
//     designTeam: ["Amir Keshavarzian", "Siavash Vazirnezami"],
//     presentation: "Mohammad-Javad Kasaie",
//     technicalTeam: "Mohammad-Reza Majidifar",
//     consultants: {
//       structural: "Majid Gatmiri",
//       electrical: "Amir Hasanzadeh",
//       mechanical: "Amir Hasanzadeh",
//     },
//     construction: {},
//   },
//   description: [
//     "Plus Polymer company is an engineering and production group aiming to achieve new and advanced solutions in the field of polymer, and consists of highly educated and skilled personnel in different sections of the company. Each of these sections have specific demands which in some cases differ from that of other sections. In this respect, the plus polymer Building Project is defined to develop and enhance the company's activities, with the intention that its architecture can play an essential role in empowering these activities and their associated spaces, both in sectional and the whole complex scale.",
//   ],
//   media: {
//     imgQty: 33,
//     videoQty: 0,
//   },
// },
// {
//   id: "PR139701",
//   title: "Mehrshahr Residential",
//   info: {
//     status: "Built",
//     category: "Residential",
//     location: "Mehrshahr, Alborz",
//     scale: 1800,
//   },
//   dates: {
//     design: {
//       start: "4/1/2018",
//       phase2Start: "7/1/2018",
//       finish: "9/15/2018",
//     },
//     construction: {
//       start: "7/15/2018",
//       finish: "6/1/2020",
//     },
//   },
//   team: {
//     architect: "Vahid Ghodsi",
//     designTeam: ["Amir Keshavarzian"],
//     consultants: {
//       structural: "Majid Gatmiri",
//     },
//     construction: {
//       projectManager: ["Mansour Mirmohammad"],
//     },
//   },
//   description: [],
//   media: {
//     imgQty: 1,
//     videoQty: 0,
//   },
// },
