// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { evaluationGenerator } from "@data/simulators/evaluation-generator";

export default function handler(req, res) {
  const { evaluation_id } = req.query;

  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET round BY Profile ID / results in random id, if the id is not given =====
    let period = req.query.period;
    let date = req.query.date;
    let config = {
      rankBias: parseInt(req.query.rank_bias),
      exactRank: req.query.exact_rank === "true",
    }
    let round = evaluationGenerator(period, date, evaluation_id, config);
    // res.status(200).json(config);
    res.status(200).json(round);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
