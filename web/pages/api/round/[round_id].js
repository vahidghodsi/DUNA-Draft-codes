// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { roundGenerator } from "@data/simulators/round-generator";

export default function handler(req, res) {
  const { round_id, date } = req.query;

  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET round BY Profile ID / results in random id, if the id is not given =====
    // ** this is temporary, ultimately ID must be included otherwise error will be throwed
    // let date = req.query.date;
    let round = roundGenerator(date, round_id);
    res.status(200).json(round);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
