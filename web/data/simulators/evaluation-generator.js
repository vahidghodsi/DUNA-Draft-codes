import { loremIpsum } from "react-lorem-ipsum";
import { EVALUATION_STATUS_TYPES } from "../../../dev-material/datamodel-definitions";
import { profileGenerator } from "./profile-generator";
import dayjs from "dayjs";

const roundedRandom = (range = 1, level = 0) => {
  // level 0 = integer, 1=0.0, 2 = 0.00, ...
  return parseInt(Math.random() * range * Math.pow(10, level)) / Math.pow(10, level);
};

const average = (numbers, level = 1) => {
  return (
    parseInt((numbers.reduce((sum, number) => sum + number) / numbers.length) * Math.pow(10, level)) /
    Math.pow(10, level)
  );
};

const scoreGenerator = rankBias => {
  let aspectItemScore = 9 - rankBias * 0.8 + roundedRandom(3, 1) - 1.5;
  return Math.trunc(aspectItemScore * 10) / 10;
};

// config: onlyCompleted = false | rankBias = num | exactRank = false | evaluator = profile | project_id = id
export const evaluationGenerator = (evaluationPeriod = 30, baseDate = "1-1-2022", evaluation_id, config = {}) => {
  let evalBaseDate = dayjs(baseDate);
  let evaluationDate = evalBaseDate;
  if (!config.exactDate) evaluationDate = evalBaseDate.add(roundedRandom(evaluationPeriod * 24), "hours");

  let evaluationStatus = EVALUATION_STATUS_TYPES.completed;
  if (!config.onlyCompleted) {
    let randomTypeFactor = Math.random();
    if (randomTypeFactor < 0.05) {
      evaluationStatus = EVALUATION_STATUS_TYPES.invalid;
    } else if (randomTypeFactor < 0.2) {
      evaluationStatus = EVALUATION_STATUS_TYPES.refused;
    } else if (randomTypeFactor < 0.6) {
      evaluationStatus = EVALUATION_STATUS_TYPES.requested;
    }
  }

  let rankBias = config.rankBias || roundedRandom(5, 0) + 1;
  // let rankBias = config.rankBias? config.rankBias : roundedRandom(5, 0) + 1;
  let evaluationResultRank = rankBias;
  if (!config.exactRank) {
    evaluationResultRank = Math.round(rankBias + roundedRandom(2, 1) - 1);
    if (evaluationResultRank > 5) evaluationResultRank = 5;
    if (evaluationResultRank < 1) evaluationResultRank = 1;
  }

  let aspect_problemStatement = scoreGenerator(rankBias);
  let aspect_concept = scoreGenerator(rankBias);
  let aspect_program = scoreGenerator(rankBias);
  let aspect_development = scoreGenerator(rankBias);
  let aspect_technical = scoreGenerator(rankBias);
  let aspect_feasibility = scoreGenerator(rankBias);

  let aspectsScore = [
    aspect_problemStatement,
    aspect_concept,
    aspect_program,
    aspect_development,
    aspect_technical,
    aspect_feasibility,
  ];
  aspectsScore = Math.round((aspectsScore.reduce((sum, item) => sum + item) / aspectsScore.length) * 10) / 10;

  let overallScore = scoreGenerator(rankBias);
  overallScore = overallScore > aspectsScore ? Math.floor(overallScore) : Math.ceil(overallScore);

  return {
    id: evaluation_id || evaluationDate.format("MMDD")+ roundedRandom(1000),
    evaluator: config.evaluator || profileGenerator("architect"),
    created_at: evaluationDate.format(),
    project_id: config.project_id || "unset",
    status: evaluationStatus,
    rank: evaluationResultRank,
    overallScore: overallScore,
    aspectsScore: aspectsScore,
    aspect_problemStatement: aspect_problemStatement,
    aspect_concept: aspect_concept,
    aspect_program: aspect_program,
    aspect_development: aspect_development,
    aspect_technical: aspect_technical,
    aspect_feasibility: aspect_feasibility,
    text: loremIpsum({ p: parseInt(Math.random() * 3), random: true, startWithLoremIpsum: false }),
  };
};

// ===== MULTIPLE EVALUATIONS ==========

export const generateEvaluations = (count = 10, evaluationPeriod, baseDate, config) => {
  let evaluations = [];
  let evaluation_id = undefined;
  for (let i = 0; i < count; i++) {
    evaluations.push(evaluationGenerator(evaluationPeriod, baseDate, evaluation_id, config));
  }
  return evaluations;
};

export const generateProjectEvaluations = (count = 10, evaluationPeriod, baseDate, config) => {
  let project_id = "specific_project_id";
  let evaluations = [];
  let evaluation_id = undefined;
  for (let i = 0; i < count; i++) {
    evaluations.push(evaluationGenerator(evaluationPeriod, baseDate, evaluation_id, { ...config, project_id }));
  }
  return evaluations;
};

export const generateArchitectEvaluations = (count = 10, evaluationPeriod, baseDate,  config) => {
  let evaluator = profileGenerator("architect");
  let evaluations = [];
  let  evaluation_id = undefined;
  for (let i = 0; i < count; i++) {
    evaluations.push(evaluationGenerator(evaluationPeriod, baseDate, evaluation_id, { ...config, evaluator }));
  }
  return evaluations;
};

// ===== ROUND EVALUATIONS ==========

export const generateRoundEvaluationSet = (evaluationPeriod, evaluationDate, config = {}) => {
  let evaluator = profileGenerator("architect");
  let evaluationSet = [];
  let evaluation_id = undefined;
  if (!config.projectIds) config.projectIds = ["pr-id01", "pr-id02", "pr-id03", "pr-id04", "pr-id05"];

  for (let i = 0; i < 5; i++) {
    if (config.projectIds[i]) {
      evaluationSet.push(
        evaluationGenerator(evaluationPeriod, evaluationDate, evaluation_id, {
          rankBias : i + 1,
          onlyCompleted: true,
          evaluator: evaluator,
          project_id: config.projectIds[i],
          exactRank: true,
          exactDate: true,
        })
      );
    } else {
      // ===== in cases that the passed set consists of one deliberately missing item
      evaluationSet.push(undefined);
    }
  }

  return evaluationSet;
};

const roundEvaluationGroupDistributor = (projectsCount, projectIds) => {
  let evaluationSets = [...Array(Math.ceil(projectsCount / 5))].map(() => []);
  // ===== each set will have max 5 items, and to fix the shortages in counts, a few sets will have one undefined item.
  // ===== this can be 0 group to max 4 groups. later on groupd with 4 must adjust their ranking to a 5-scale ranking
  for (let n = 0; n < 5; n++) {
    for (let i = 0; i < projectsCount / 5; i++) {
      let pickedId = projectIds[roundedRandom(projectIds.length - 1)];
      evaluationSets[i].push(pickedId);
      projectIds = projectIds.filter(id => pickedId !== id);
    }
  }
  return evaluationSets;
};

export const generateRoundEvaluations = (
  projectsCount = 30,
  evaluationPeriod = 14,
  baseDate = "1-1-2022",
  config = {}
) => {
  let evalBaseDate = dayjs(baseDate);
  let projectIds = [...Array(projectsCount)].map((i, index) => `round-1_project-${index}`);
  let allEvaluationIdSets = [];
  let roundEvaluations = [];

  for (let i = 0; i < 5; i++) {
    allEvaluationIdSets = [...allEvaluationIdSets, ...roundEvaluationGroupDistributor(projectsCount, projectIds)];
  }

  allEvaluationIdSets.forEach(evaluationIdSet => {
    let evalualtionSetDate = evalBaseDate.add(roundedRandom(evaluationPeriod * 24), "hours");
    roundEvaluations.push(
      generateRoundEvaluationSet(evaluationPeriod, evalualtionSetDate, {
        projectIds: evaluationIdSet,
      })
    );
  });

  if (config.flatData) return roundEvaluations.flat().filter(i => i);
  return roundEvaluations;
  // return allEvaluationIdSets.flat().filter(i=>i);
  // return roundEvaluations.flat().filter(i => i).map(i=>i.evaluator.name);
};

// ===== RESULT ANALYSIS ==========
export const roundEvaluationsResultAnalysis = roundEvaluations => {
  let evaluations = roundEvaluations.flat().filter(i => i);
  let evaluatorsAverageCredits = average(evaluations.map(item => item.evaluator.credit));
  let weightedScores = evaluations.map(item => {
    let evaluatorCreditFactor = item.evaluator.credit / evaluatorsAverageCredits;
    return {
      wightedOverallScore: item.overallScore * evaluatorCreditFactor,
      wieghtedAspectsScore: item.aspectsScore * evaluatorCreditFactor,
    };
  });

  return {
    numberOfEvaluations: evaluations.length,
    evaluatorsAverageCredits,
    averageoverallScore: average(evaluations.map(item => item.overallScore)),
    averageAspectsScores: average(evaluations.map(item => item.aspectsScore)),
    averageAspect_problemStatement: average(evaluations.map(item => item.aspect_problemStatement)),
    averageAspect_concept: average(evaluations.map(item => item.aspect_concept)),
    averageAspect_program: average(evaluations.map(item => item.aspect_program)),
    averageAspect_development: average(evaluations.map(item => item.aspect_development)),
    averageAspect_technical: average(evaluations.map(item => item.aspect_technical)),
    averageAspect_feasibility: average(evaluations.map(item => item.aspect_feasibility)),

    averageWeightedOverallScore: average(weightedScores.map(item => item.wightedOverallScore)),
    averageWeightedAspectsScores: average(weightedScores.map(item => item.wieghtedAspectsScore)),
    // evaluatorsCreditsOffSet: evaluations.map(item => item.evaluator.credit / evaluatorsAverageCredits),
    // evaluationsScoresOffset : evaluations.map(item => item.overallScore - item.overallScore * (item.evaluator.credit / evaluatorsAverageCredits)),
    // evaluationsWeightedOverallScores,
  };
};

export const projectEvaluationsResultAnalysis = projectEvaluations => {
  let evaluations = projectEvaluations.flat().filter(i => i);
  let evaluatorsAverageCredits = average(evaluations.map(item => item.evaluator.credit));
  let weightedScores = evaluations.map(item => {
    let evaluatorCreditFactor = item.evaluator.credit / evaluatorsAverageCredits;
    return {
      wightedRank: item.rank * evaluatorCreditFactor,
      wightedOverallScore: item.overallScore * evaluatorCreditFactor,
      wieghtedAspectsScore: item.aspectsScore * evaluatorCreditFactor,
    };
  });

  return {
    numberOfEvaluations: evaluations.length,
    evaluatorsAverageCredits,
    averageRank: average(evaluations.map(item => item.rank)),
    averageoverallScore: average(evaluations.map(item => item.overallScore)),
    averageAspectsScores: average(evaluations.map(item => item.aspectsScore)),
    averageAspect_problemStatement: average(evaluations.map(item => item.aspect_problemStatement)),
    averageAspect_concept: average(evaluations.map(item => item.aspect_concept)),
    averageAspect_program: average(evaluations.map(item => item.aspect_program)),
    averageAspect_development: average(evaluations.map(item => item.aspect_development)),
    averageAspect_technical: average(evaluations.map(item => item.aspect_technical)),
    averageAspect_feasibility: average(evaluations.map(item => item.aspect_feasibility)),

    averageWeightedRank: average(weightedScores.map(item => item.wightedRank)),
    averageWeightedOverallScore: average(weightedScores.map(item => item.wightedOverallScore)),
    averageWeightedAspectsScores: average(weightedScores.map(item => item.wieghtedAspectsScore)),
  };
};

// ===== REFERENCES ==========

// const EVALUATION = {
//   id: "",
//   architect_id: "",
//   project_id: "",
//   created_at: "",
//   status: "completed", // requested, completed, invalid, refused
//   rank: 4, // between 1-5, evaluator ranks project among 4 other projects
//   overallScore: 7.4, // between 1-10
//   averageAspectScores: 6.9, // between 1-10

//   // each between 1-10
//   aspect_problemStatement: 6.5, // has it well understood the design problem, subject, values, etc
//   aspect_concept: 7, // how is it related? how creativily solves the problem or adds value? etc
//   aspect_program: 6, // function
//   aspect_development: 8, // planning and idea development
//   aspect_technical: 5, //
//   aspect_feasibility: 8, // how feasibile is the design. (how is this related to built projects)

//   // projectTitle: "project 1", //redundancy for evaluation display (avoid loading all data) - use caching instead
//   // architectName: "vahid ghodsi", //redundancy for evaluation display (avoid loading all data) - use caching instead
//   // architectCredit: 5, //redundancy for evaluation display (avoid loading all data) - use caching instead
// };

// const EVALUATION_SET = {
//   id: "",
//   min_required_credit: 6,
// };

// const ROUND_PROJECT_EVALUATION_SET = {
//   id: "",
//   //foreign keys
//   evaluation_set_id: "",
//   project_id: "",
//   round_id: "",
// };
