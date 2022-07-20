// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projects } from "@data/projects";
import { projectGenerator } from "@data/simulators/project-generator";

export default function handler(req, res) {
  const { project_id, date } = req.query;

  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET PROJECT BY ID / results in random id, if the id is not given =====
    // eslint-disable-next-line no-unused-vars
    let project = projectGenerator(date, project_id);
    // res.status(200).json(project);
    res.status(200).json(projects[0]);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
