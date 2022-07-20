// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateRounds } from "@data/simulators/round-generator";

export default function handler(req, res) {
  // const { profile_id } = req.query.profile_id;

  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== TEMP DATA GENERATION: profile rounds should be derived from profile projects =====
    let round = generateRounds(parseInt(Math.random()*12));
    res.status(200).json(round);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
