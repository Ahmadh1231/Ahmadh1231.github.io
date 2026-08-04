import Input from "./Input";
import Output from "./Output";

export default function Command({ command, result, onSubmit, inputRef }) {
  return <div className="command-row"><Input command={command} onSubmit={onSubmit} inputRef={inputRef} />{result && <Output result={result} />}</div>;
}
