import { api } from "./api";

const getUser = profile_id => {
  // if (!profile_id) return console.log("Need an evaluation id");
  if (!profile_id) profile_id = "random";
  return api
    .get(`/api/user/${profile_id}`)
    .then(result => {
      // console.log("get user", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getUserByEmail = profile_email => {
  if (!profile_email) return console.log("Need a profile email");
  return api
    .get(`/api/user/byEmail?email=${profile_email}`)
    .then(result => {
      // console.log("get user", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getUserByToken = token => {
  if (!token) return console.log("Need a profile email");
  return api
    .get(`/api/user/byToken?email=${token}`)
    .then(result => {
      // console.log("get user", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const userService = {
  getUser,
  getUserByEmail,
  getUserByToken
};
