"use client";

import { useEffect, useRef, useState } from "react";
import { COMMANDS, getCommandResult } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const run = (rawCommand) => {
    const command = String(rawCommand).trim().toLowerCase().replace(/\s+/g, " ");
    if (!command) return;
    if (command === "clear") { setHistory([]); return; }
    setHistory((current) => [...current, { command, result: getCommandResult(command) }]);
  };

  useEffect(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" }); }, [history]);

  return (
    <section className={styles.shell} aria-label="Interactive portfolio terminal">
      <div className={styles.titlebar}><span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} /><span className={styles.title}>portfolio.sh</span></div>
      <div className={styles.body} ref={outputRef}>
        <div className={styles.welcome}>
          <p>Welcome. Explore Ahmadh&apos;s work with a command, or use the shortcuts below.</p>
          <nav className={styles.commands} aria-label="Portfolio sections">
            {COMMANDS.filter(({ name }) => name !== "clear").map(({ name, label }) => <button type="button" key={name} onClick={() => run(name)}>{label}</button>)}
          </nav>
        </div>
        {history.map((entry, index) => <Command key={`${entry.command}-${index}`} {...entry} />)}
        <Command onSubmit={run} inputRef={inputRef} />
      </div>
    </section>
  );
}
