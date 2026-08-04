"use client";

import { useEffect, useState } from "react";
import styles from "./Input.module.css";

export default function Input({ command = "", onSubmit, inputRef }) {
  const [value, setValue] = useState(command);
  useEffect(() => { if (!command) inputRef?.current?.focus(); }, [command, inputRef]);

  const prompt = (
    <span className={styles.label}>
      <span className={styles.prompt}>Ahmadh:$</span>
    </span>
  );

  if (command) {
    return <div className={styles.form}>{prompt}<span className={styles.enteredCommand}>{command}</span></div>;
  }

  return (
    <form className={styles.form} onSubmit={(event) => { event.preventDefault(); onSubmit(value); setValue(""); }}>
      <label htmlFor="terminal-command">{prompt}</label>
      <input ref={inputRef} id="terminal-command" className={styles.input} value={value} onChange={(event) => setValue(event.target.value)} aria-label="Enter a portfolio command" autoComplete="off" spellCheck="false" placeholder="/help to list commands" />
    </form>
  );
}
