// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { profileGenerator } from "@data/simulators/profile-generator";
// import users from "@data/users";

export default function handler(req, res) {
  // ===== GET Requests =====
  const { profile_id } = req.query;
  if (req.method === "GET") {
    // ===== GET USER BY ID =====
    let type = req.query.type ? req.query.type : "architect";
    let user = profileGenerator(type, profile_id);
    res.status(200).json(user);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
