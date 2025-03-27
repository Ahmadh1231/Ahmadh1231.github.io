export const CONTENTS = {
  about: () =>
    "Hello! I'm Ahmadh Hassan, a student at Rutgers University pursuing degrees in Electrical Engineering, Mathematics, and Applied Physics. I'm passionate about space technology, quantum computing, and building hardware systems from scratch.",

  education: () =>
    `<strong>Rutgers University-New Brunswick</strong>, New Brunswick, NJ
    <br />
    Pursuing B.S in Electrical Engineering, Mathematics, & Applied Physics (Expected May 2027)
    <br />
    GPA: 3.8/4.0`,

  experience: () =>
    `<ul>
      <li>
        <strong>NASA via NJSGC</strong> - Electronics & Power Intern (June 2024 - August 2024)
        <ul>
          <li>Designed and optimized electrical systems for a 6U CubeSat, including power budget redesign (+110% power generation)</li>
          <li>Collaborated on PCB design for CubeSat components, ensuring compliance with system-level validation standards</li>
          <li>Managed construction and implementation of Thermal Control System</li>
        </ul>
      </li>
      <li>
        <strong>Device-independent Quantum Key Distribution Research (DI-QKD)</strong> - Undergraduate Research Assistant (June 2024 - August 2024)
        <ul>
          <li>Researched untrustable scenarios focusing on vulnerabilities in quantum communication protocols</li>
          <li>Modeled the CHSH game using Qiskit and Python to simulate quantum entanglement</li>
        </ul>
      </li>
    </ul>`,

  skills: () =>
    `<ul>
      <li>Hardware Design: PCB Design, KiCad, Circuit Board Prototyping</li>
      <li>Programming: Python, C++, VHDL, Verilog, PyTorch</li>
      <li>Quantum Computing: Qiskit, Quantum Algorithms</li>
      <li>Engineering Tools: Oscilloscopes, STK, Arduino</li>
      <li>Machine Learning: CNNs, Data Augmentation</li>
    </ul>`,

  projects: () =>
    `<ul>
      <li>
        <strong>Simple As Possible Transistor-Transistor-Logic(TTL) Computer</strong> (March 2025 - Present)
        <ul>
          <li>Designed and implemented a central processing unit (CPU) from scratch on custom designed circuit boards</li>
          <li>Built custom TTL computer based on the SAP-Plus architecture using KiCad</li>
        </ul>
      </li>
      <li>
        <strong>MNIST Handwriting Recognition Machine Learning Algorithm</strong> (January 2025)
        <ul>
          <li>Developed a Convolutional Neural Network (CNN) using PyTorch to analyze the MNIST dataset with 42,000 samples achieving an accuracy of 99.8%</li>
          <li>Optimized the model by implementing data augmentation techniques</li>
        </ul>
      </li>
      <li>
        <strong>Retro Handheld Gaming Device</strong> (May 2024)
        <ul>
          <li>Designed and assembled a handheld gaming device from initiation, incorporating a microcontroller to run games like Tetris and Snake</li>
          <li>Soldered components, including a 7-segment display and tactile buttons</li>
        </ul>
      </li>
    </ul>`,

  leadership: () =>
    `<ul>
      <li>
        <strong>Space Technology Association at Rutgers</strong> - Power Team Lead (September 2023 - Present)
        <ul>
          <li>Managing a team of 10 to optimize electronics efficiency for a satellite</li>
          <li>Investigating inhibit systems by prototyping and simulating in VHDL and Verilog</li>
          <li>Incorporated attitude parameters into an STK model, increasing power generation from 12W to 20W</li>
        </ul>
      </li>
      <li>
        <strong>Rutgers University Quantum Computing Group</strong> - President/Co-Founder (May 2024 - Present)
        <ul>
          <li>Founded and led a student organization focused on quantum computing, growing membership to 70+ students</li>
          <li>Organized workshops and lectures to educate members and the public on quantum computing fundamentals</li>
        </ul>
      </li>
      <li>
        <strong>Rutgers Institute of Electrical and Electronics Engineers (IEEE)</strong> - Shadowing Executive Board (January 2024 - Present)
        <ul>
          <li>Developed hands-on workshops such as a Macropad design workshop</li>
          <li>Gained hands-on experience in using oscilloscopes, C++ programming, and arduino</li>
          <li>Worked with PCB design and fabrication</li>
        </ul>
      </li>
    </ul>`,

  contact: () =>
    `<ul>
      <li>GitHub: <a href="https://github.com/Ahmadh1231" target="_blank">Ahmadh1231</a></li>
      <li>Email: <a href="mailto:ahmadhhassan05@gmail.com">ahmadhhassan05@gmail.com</a></li>
    </ul>`,

  resume: () =>
    `You can view my resume <a href="YOUR_RESUME_URL_HERE" target="_blank">here</a>`,

  help: () =>
    `Available commands:
    <br />
    <span class="command">about</span> - Learn about me
    <br />
    <span class="command">education</span> - My educational background
    <br />
    <span class="command">experience</span> - My professional experience
    <br />
    <span class="command">skills</span> - Technologies I work with
    <br />
    <span class="command">projects</span> - Things I've built
    <br />
    <span class="command">leadership</span> - My leadership experiences
    <br />
    <span class="command">contact</span> - How to reach me
    <br />
    <span class="command">resume</span> - View my resume
    <br />
    <span class="command">help</span> - See this list again
    <br />
    <span class="command">clear</span> - Clear the terminal`,

  error: (command) =>
    `Command not found: ${command}. Type 'help' to see the available commands.`,
};