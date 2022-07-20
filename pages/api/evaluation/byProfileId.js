// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateArchitectEvaluations } from "@data/simulators/evaluation-generator";

export default function handler(req, res) {
  const { profile_id } = req.query.profile_id;

  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET evaluations BY Profile ID / results in random id, if the id is not given =====

    let evaluations = generateArchitectEvaluations(profile_id);
    res.status(200).json(evaluations);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
