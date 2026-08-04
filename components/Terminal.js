"use client";

import { useEffect, useRef, useState } from "react";
import { getCommandResult } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const run = (rawCommand) => {
    const enteredCommand = String(rawCommand).trim().toLowerCase().replace(/\s+/g, " ");
    if (!enteredCommand) return;

    const hasSlash = enteredCommand.startsWith("/");
    const command = hasSlash ? enteredCommand.slice(1) : enteredCommand;

    if (hasSlash && command === "clear") { setHistory([]); return; }

    const result = hasSlash
      ? getCommandResult(command)
      : { title: "command not found", intro: `Commands start with /. Try /help to list them.` };

    setHistory((current) => [...current, { command: enteredCommand, result }]);
  };

  useEffect(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" }); }, [history]);

  return (
    <main className={styles.shell} aria-label="Interactive portfolio terminal" onClick={() => inputRef.current?.focus()}>
      <div className={styles.body} ref={outputRef}>
        {history.map((entry, index) => <Command key={`${entry.command}-${index}`} {...entry} />)}
        <Command onSubmit={run} inputRef={inputRef} />
      </div>
    </main>
  );
}
