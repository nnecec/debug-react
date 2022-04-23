import React, { useState, useEffect } from "react";
import { getObserver } from "./util";

export const TestDiff = () => {
  const [lastInput, setLastInput] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const diffObs = getObserver(".test-diff-seq");
    diffObs();
  }, []);

  const patch = (e: any) => {
    console.log(e);
    setInput((last) => {
      setLastInput(last);
      return e;
    });
  };

  const sequence = input.trim().split("");

  return (
    <div>
      <div>
        <span color="gold">Inserted</span>
        <span color="red">Moved</span>
        <span color="green">Non moved</span>
      </div>
      <input placeholder="e.g. 123456" onChange={patch} />
      <div>
        {lastInput}
        {"  ➔ "}
        {input}
      </div>
      <hr />
      <div className="test-diff-seq">
        {sequence.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </div>
    </div>
  );
};
