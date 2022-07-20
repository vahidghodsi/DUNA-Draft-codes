const PROJECT = {
  id: "id",
  title: "Plus Polymer",
  client: [
    {
      id: "id",
      name: "Mr. Golchin",
      isAdmin: true,
    },
    {
      id: "id",
      name: "Mr. Daryadari",
      isAdmin: false,
    },
  ],
  round: "id", // or Null for projects without any round
  category: "", // what platform assgins, from its pre-defined categories
  brief: {
    type: "office",
    location: "Science & Technology Park (Irani Lnad)",
    locationCord: "",
    siteArea: 2700,
    BuildingFootprint: 1300,
    floorArea: 6000, //gross
  },
  // info: {
  StatusRecords: [
    {
      status: "Approved For Construction",
      date: "date",
    },
    {
      status: "phase 2 comppleted",
      date: "date",
    },
  ],
  // },
  dates: {
    design: [
      // start: "9/1/2018",
      // p2Start: "2/1/2019",
      // end: "8/25/2019",
      { title: "start", date: "date1" },
      { title: "end", date: "date2" },
      { title: "custom1", date: "date3" },
      { title: "custom2", date: "date4" },
    ],
    construction: [
      // start: "8/25/2019",
      { title: "start", date: "date1" },
      { title: "end", date: "date2" },
      { title: "custom1", date: "date3" },
      { title: "custom2", date: "date4" },
    ],
  },
  projectRoles: [
    {
      Id: "id1",
      name: "Vahid Ghodsi",
      role: "Architect",
      claims: ["claim", "claim"], // lazy load, not needed before access to project panel
    },
    {
      Id: "id2",
      name: "Amir Keshavarzian",
      role: "design team",
      claims: ["claim", "claim"],
    },
    // ["id", "Vahid Ghodsi", "architect"],
    // ["id", "Amir Keshavarzian", "design team"],
    // ["id", "Siavash Vazirnezami", "design team"],
    // ["id", "Mohammad-Reza Majidifar", "technical team"],
    // ["id", "Mohammad-Javad Kasaie", "visualisation"],
    // ["id", "Majid Gatmiri", "structural designer"],
    // ["id", "Amir Hasanzadeh", "electrical designer"],
    // ["id", "Amir Hasanzadeh", "mechanical designer"],
  ],
  // or have them in team
  // team: {
  //   //-------------
  //   architect: "Vahid Ghodsi",
  //   designTeam: ["Amir Keshavarzian", "Siavash Vazirnezami"],
  //   presentation: "Mohammad-Javad Kasaie",
  //   technicalTeam: "Mohammad-Reza Majidifar",
  //   consultants: {
  //     structural: "Majid Gatmiri",
  //     electrical: "Amir Hasanzadeh",
  //     mechanical: "Amir Hasanzadeh",
  //   },
  //   construction: {},
  // },
  //-----------
  assets: {
    presentation: {
      clip: 1,
      Object: 1, // 3D objects
      panels: 5, // we know as sheets
    },
    document: {
      imgQty: 25, // built images
      videoQty: 1,
      visQty: 20, // visualisations
      DiagramsQty: 10, // Diagrams such as concept, design process, functions, etc
      animationQty: 1,
      DrawingsQty: 12, // 2D & 3D, such as plans, sections, elevations, etc
    },
    description: [
      "Plus Polymer company is an engineering and production group aiming to achieve new and advanced solutions in the field of polymer, and consists of highly educated and skilled personnel in different sections of the company. Each of these sections have specific demands which in some cases differ from that of other sections. In this respect, the plus polymer Building Project is defined to develop and enhance the company's activities, with the intention that its architecture can play an essential role in empowering these activities and their associated spaces, both in sectional and the whole complex scale.",
    ],
  },
  evaluations: {
    averageRank: 3.8,
    averageScore: 7.2,
    weightedAverageScore: 7.5,
    // Ids: ["id", "id", "id"], // ids of all single evaluations, lazy load
    records: [
      //all single evaluations on this project, lazy load
      {
        id: "id",
        date: "date",
        architect: "id",
        architectName: "vahid ghodsi",
        architectCredit: 5,
        rank: 4,
        overallScore: 7.4,
        averageAspectScores: 6.9,
        aspectScores: {
          aspect1: "rate1",
          aspect2: "rate2",
          aspectN: "rateN",
        },
      },
    ],
  },
};

const ROUND = {
  client: "id", // or admin
  observers: ["id", "id"], // clients that are not admin
  roundType: "standard", // limited entry, free competition, 2-stage
  info: {
    budget: "",
    category: "", // what platform assgins, from its pre-defined categories
  },
  brief: {
    type: "",
    location: "",
    locationCord: "",
    siteArea: 500,
    BuildingFootprint: 300,
    floorArea: 1000, //gross
    // floorAreaNet: 800,
    stories: 3,
    brief: {
      bedrooms: 2, // number
      Masterbedrooms: [2, 3], // range
      garageCapacity: "if possible, for 2 or 3 cars, have access to kitchen", //text
      storage: true, //boolean
      other: [
        //there are a set of defined specs that client can choose from as well as custom specs
        { title: "spec1", value: "value1" },
        { title: "spec2", value: "value2" },
      ],
    },
    // file: ["path"], // like a , images
    references: ["path"], // like pdf( like pdf version of the brief), pictures, movies, insights, movies
  },
  timeline: {
    Date1: "", // Round Start
    Date2: "", // Registration end
    Date3: "", // Confirmation end
    Date4: "", // Submission end
    Date5: "", // Evaluation end
    Date6: "", // Decision end
  },
  evaluations: {
    // Ids: ["id", "id", "id"], // ids of all single evaluations
    roundAllAverageScore: 7.2, // average of all single averageScore in one round. for informative purposes
    roundAllWeightedAverageScore: 7.5, // average of all single wightedAverageScore in one round. for informative purposes
    records: [
      {
        id: "id",
        date: "date",
        project: "id",
        projectTitle: "project 1",
        architect: "id",
        architectName: "vahid ghodsi",
        architectCredit: 5,
        rank: 4,
        overallScore: 7.4,
        averageAspectScores: 6.9,
        // aspectScores: { // probably not needed
        // aspect1: "rate1",
        // aspect2: "rate2",
        // aspectN: "rateN",
        // },
      },
    ],
  },
};

const PROFILE = {
  // can be any individual (real) entity - client, architect, representative, enginear, etc
  id: "",
  clientId: "", // if the profile is related to a CLIENT
  architectId: "", // if the profile is related to aN ARCHITECT
  teamId: "", // if the profile is related to a TEAM
  title: "", // mr, mrs, dr, etc
  firstName: "",
  lastName: "",
  email: [""],
  tel: [""],
  mobile: [""],
  address: "",
  website: [""],
  emailVerified: true,
  accountVerified: true, // like picture or legal verification
  projects: [
    {
      projectId: "id1",
      role: "role",
      claims: ["claim", "claim"], // lazy load, not needed before access to project panel
    },
    {
      projectId: "id2",
      role: "role",
      claims: ["claim", "claim"],
    },
  ],
  team: [
    // lazy load, not needed before access to project panel/portfolio, member portfolio
    {
      teamId: "id1",
      role: "role",
      claims: ["claim", "claim"],
    },
    {
      teamId: "id2",
      role: "role",
      claims: ["claim", "claim"],
    },
  ],
};

const CLIENT = {
  id: "",
  profile: "id",
  round: [
    {
      id: "id",
      isAdmin: true,
    },
    {
      id: "id",
      isAdmin: false,
    },
  ],
};

const ARCHITECT = {
  id: "",
  profile: "id",
  // credit: "", // credit Level
  credits: [
    {
      credit: 7.3,
      date: "date",
    },
    {
      credit: 7.2,
      date: "date",
    },
    {
      credit: 7,
      date: "date",
    },
  ],
  evaluations: [
    //Lazy load
    {
      id: "id",
      projectId: "id",
      projectTitle: "project 1",
      status: "requested",
      validityLevel: null,
    },
    {
      id: "id",
      projectId: "id",
      projectTitle: "project 2",
      status: "completed",
      validityLevel: 6.8, // ONLY FOR 'completed' evaluations: how much is it compatible to high ranks' evaluations and etc
      rank: 4,
      overallScore: 7.4,
      averageAspectScores: 6.9,
      aspectScores: {
        aspect1: "rate1",
        aspect2: "rate2",
        aspectN: "rateN",
      },
    },
    {
      id: "id",
      projectId: "id",
      projectTitle: "project 3",
      status: "invalid",
      validityLevel: null,
    },
    {
      id: "id",
      projectId: "id",
      projectTitle: "project 4",
      status: "refused",
      validityLevel: null,
    },
  ],
  // evaluations: { //Lazy load
  //   requested: ["id"],
  //   compeletd: [
  //     {
  //       id: "id",
  //       validityLevel: 6.8 // how much is it compatible to high ranks' evaluations and etc
  //     },
  //     {
  //       id: "id",
  //       validityLevel: 7.5
  //     },
  //     {
  //       id: "id",
  //       validityLevel: 7.2
  //     }
  //   ],
  //   invalid: ["id", "id"],
  //   refused: ["id", "id", "id"],
  // },
};

const EVALUATION = {
  Id: "",
  date: "date",
  status: "completed", // requested, completed, invalid, refused
  project: "id",
  projectTitle: "project 1",
  architect: "id",
  architectName: "vahid ghodsi",
  architectCredit: 5,
  rank: 4, // between 0-5, evaluator ranks project among 4 other projects
  overallScore: 7.4, // between 0-10
  averageAspectScores: 6.9, // between 0-10
  aspectScores: {
    // each between 0-10
    problemStatement: 6.5, // has it well understood the design problem, subject, values, etc
    concept: 7, // how is it related? how creativily solves the problem or adds value? etc
    program: 6, // function
    development: 8, // planning and idea development
    technical: 5, //
    feasibility: 8, // how feasibile is the design. (how is this related to built projects)
  },
};

const TEAM = {
  //or studio, office, business, group, agency, etc
  id: "",
  profile: "id",
  // credit: "", // credit Level, for the team
  credits: [
    // credit Level for the team - the last rocord is the current
    {
      credit: 6.4,
      date: "date",
    },
    {
      credit: 6.2,
      date: "date",
    },
    {
      credit: 6,
      date: "date",
    },
  ],
  teamRoles: [
    {
      Id: "id1",
      name: "Vahid Ghodsi",
      role: "Architect",
      claims: ["claim", "claim"],
    },
    {
      Id: "id2",
      name: "Amir Keshavarzian",
      role: "design team",
      claims: ["claim", "claim"],
    },
    {
      Id: "id3",
      name: "Majid Gatmiri",
      role: "structural designer",
      claims: ["claim", "claim"],
    },
  ],
};

const persons = [PROFILE, CLIENT, ARCHITECT];
const groups = [TEAM];
const units = [PROJECT, EVALUATION];
const processes = [ROUND];
