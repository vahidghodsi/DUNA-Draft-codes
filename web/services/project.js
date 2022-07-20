import { api } from "./api";

const getProject = project_id => {
  return api
    .get(`/api/project/${project_id}`)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getProjects = (count) => {
  return api
    .get(`/api/project`)
    .then(result => {
      console.log("get project", result);
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getProfileProjects = (profile_id) => {
  return api
    .get(`/api/project/byProfileId?profile_id=${profile_id}`)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const projectService = {
  getProject,
  getProjects,
  getProfileProjects,
};
