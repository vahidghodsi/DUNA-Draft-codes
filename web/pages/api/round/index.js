// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { projects } from "@data/projects";
import { roundGenerator, generateRounds } from "@data/simulators/round-generator";

export default function handler(req, res) {
  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET RANDOM GENERATED ROUND(s) =====
    if (req.query.count) {
      let rounds = generateRounds(req.query.count);
      return res.status(200).json(rounds);
    }
    let round = roundGenerator();
    res.status(200).json(round);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
