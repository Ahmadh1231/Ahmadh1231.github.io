const link = (label, href, external = true) => ({ label, href, external });

export const COMMANDS = [
  { name: "about", label: "about" }, { name: "experience", label: "experience" }, { name: "research", label: "research / projects" },
  { name: "education", label: "education" }, { name: "skills", label: "skills" }, { name: "leadership", label: "leadership" },
  { name: "contact", label: "contact" }, { name: "resume", label: "resume" }, { name: "help", label: "help" }, { name: "clear", label: "clear" },
];

const results = {
  about: { title: "about", intro: "I am an electrical and computer engineering, applied physics, and mathematics student at Rutgers University-New Brunswick. I build and study hardware at the intersection of quantum information, condensed matter, and space systems." },
  experience: { title: "experience", items: [
    { heading: "Argonne National Laboratory · Quantum Computing Research Intern · June–August 2026", text: "DOE SULI research on superconducting microwave resonators for electron-on-solid-neon devices, including HFSS eigenmode and driven-modal simulation, lithography-ready layouts, and materials characterization." },
    { heading: "Condensed Matter Experiment Undergraduate Researcher · May 2025–present", text: "Honors thesis research on gated Eu₂Ir₂O₇ Hall-bar devices using cryogenic magnetotransport, nanofabrication, and data analysis." },
    { heading: "NASA via NJSGC · Electronics & Power Intern · June–August 2024", text: "Worked on electrical systems, PCB integration, and thermal control for a 6U CubeSat." },
  ] },
  research: { title: "research / projects", items: [
    { heading: "QResAudit", text: "A Python / PyAEDT / HFSS framework for reproducible electromagnetic simulation validation.", links: [link("View on GitHub", "https://github.com/Ahmadh1231/QResAudit")] },
    { heading: "Device-independent QKD · June–August 2024", text: "Simulated CHSH games in Qiskit and Python while studying quantum communication protocols." },
    { heading: "Selected topics", text: "Superconducting resonators · gated Eu₂Ir₂O₇ Hall-bar devices · MNIST CNN (99.8% reported accuracy) · renormalization groups in graphene." },
  ] },
  education: { title: "education", items: [{ heading: "Rutgers University-New Brunswick · New Brunswick, NJ", text: "B.S. Electrical & Computer Engineering · B.S. Applied Physics · B.S. Mathematics · Expected May 2027 · GPA 3.8 / 4.0" }] },
  skills: { title: "skills", intro: "Python, C++, Qiskit, PyTorch, PyAEDT, HFSS, KiCad, PCB design, nanofabrication, cryogenic measurement, data analysis, VHDL, Verilog, and scientific computing." },
  leadership: { title: "leadership", items: [
    { heading: "Space Technology Association at Rutgers · Power Team Lead · September 2023–present", text: "Lead the Power Team developing electrical systems for space technology projects." },
    { heading: "Rutgers University Quantum Computing Group · President / Co-Founder · May 2024–present", text: "Lead a student community exploring quantum computing through workshops, talks, and hands-on learning." },
  ] },
  contact: { title: "contact", intro: "The best way to reach me is by email. I am also active on GitHub and LinkedIn.", links: [link("ahmadhhassan05@gmail.com", "mailto:ahmadhhassan05@gmail.com", false), link("GitHub · Ahmadh1231", "https://github.com/Ahmadh1231"), link("LinkedIn · Ahmadh Hassan", "https://www.linkedin.com/in/ahmadhhassan/")] },
  resume: { title: "resume", intro: "My current resume is available here.", links: [link("Open resume.pdf", "/resume.pdf", false)] },
  help: { title: "help", intro: "Use a command to explore the portfolio. Buttons above are also keyboard accessible.", commands: COMMANDS.map(({ name }) => name) },
};

export function getCommandResult(command) { return results[command] || { title: "command not found", intro: `No portfolio section matches “${command}”. Try help to see the available commands.` }; }
