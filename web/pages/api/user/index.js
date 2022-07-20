// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { profileGenerator } from "@data/simulators/profile-generator";
// import users from "@data/users";

export default function handler(req, res) {
  // ===== GET Requests =====
  if (req.method === "GET") {
    // users[0],   
    // ===== GET RANDOM GENERATED USER =====
    let user = profileGenerator();
    res.status(200).json(user);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
