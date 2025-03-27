import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Simple As Possible Transistor-Transistor-Logic(TTL) Computer",
        description:
          "Designed and implemented a central processing unit (CPU) from scratch on custom designed circuit boards. Designed and built custom TTL computer based on the SAP-Plus architecture using KiCad.",
        stack: ["Hardware Design", "Digital Logic", "KiCad", "CPU Architecture"],
        link: "https://github.com/Ahmadh1231/ttl-computer",
        image: "ttl-computer.png",
        largeImage: "ttl-computer-lg.png",
      },
      {
        name: "MNIST Handwriting Recognition Machine Learning Algorithm",
        description:
          "Developed a Convolutional Neural Network (CNN) using PyTorch to analyze the MNIST dataset with 42,000 samples achieving an accuracy of 99.8%. Optimized the model by implementing data augmentation techniques, reducing overfitting, and improving generalization to unseen data.",
        stack: ["Python", "PyTorch", "CNN", "Machine Learning"],
        link: "https://github.com/Ahmadh1231/mnist-recognition",
        image: "mnist.png",
        largeImage: "mnist-lg.png",
      },
      {
        name: "Retro Handheld Gaming Device",
        description:
          "Designed and assembled a handheld gaming device from initiation, incorporating a microcontroller to run games like Tetris and Snake. Soldered components, including a 7-segment display and tactile buttons.",
        stack: ["Microcontrollers", "C++", "Hardware", "Electronic Design"],
        link: "https://github.com/Ahmadh1231/retro-handheld",
        image: "retro-handheld.png",
        largeImage: "retro-handheld-lg.png",
      }
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}