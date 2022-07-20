import { api } from "./api";

// const getRounds = async () => {
//   return await api.get(`/api/round`);

// };
const getRound = (round_id, date) => {
  // if (!round_id) return "Need a round id";
  // temporarily it is accepted to not pass an ID
  return api
    .get(`/api/round/${round_id}?date=${date}`)
    .then(result => result)
    .catch(error => {
      console.log(error);
      throw error;
    }); 
};

const getRounds = count => {
  return api
    .get(`/api/round?count=${count}`)
    .then(result => {
      console.log("get project", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getProfileRounds = profile_id => {
  // return await api.get(`/api/profileRound?profile_id=${profileId}`);
  return api
    .get(`/api/round/byProfileId?profile_id=${profile_id}`)
    .then(result => {
      console.log("[get_profile_rounds]", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const roundService = {
  getRound,
  getRounds,
  getProfileRounds,
};
