import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "ahmadh1231",
        link: "https://github.com/ahmadh1231",
      },
      {
        medium: "email",
        username: "ahmadhhassan05@gmail.com",
        link: "mailto:ahmadhhassan05@gmail.com",
      },
      {
        medium: "linkedin",
        username: "ahmadhhassan",
        link: "https://www.linkedin.com/in/ahmadhhassan/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
