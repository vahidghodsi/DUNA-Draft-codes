import { api } from "./api";

const getEvaluation = evaluation_id => {
  if (!evaluation_id) return console.log("Need an evaluation id");
  return api
    .get(`/api/evaluation/${evaluation_id}`)
    .then(result => result)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getEvaluations = () => {
  return api
    .get(`/api/evaluation`)
    .then(result => {
      console.log("get project", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getProfileEvaluations = async profileId => {
  // return await api.get(`/api/profileRound?profile_id=${profileId}`);
  if (!profileId) return console.log("Need a profile id");
  return api
    .get(`/api/evaluation/byProfileId?profile_id=${profileId}`)
    .then(result => {
      console.log("[get_profile_evaluations]", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const evaluationService = {
  getEvaluation,
  getEvaluations,
  getProfileEvaluations,
};
