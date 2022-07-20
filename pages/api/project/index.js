// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projects } from "@data/projects";

export default function handler(req, res) {
  // ===== GET Requests =====
  if (req.method === "GET") {
    // ===== GET RANDOM GENERATED ROUND =====
    res.status(200).json(projects);
  }

  // ===== POST Requests =====
  if (req.method === "POST") {
    res.status(200).json(req.body);
  }
}
