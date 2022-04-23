import React, { useState, useMemo, useCallback } from "react";

export const TestUseCallback = () => {
  const [amount, setAmount] = useState(100);
  const [, forceUpdate] = useState([]);
  const handleClick1 = () => {
    forceUpdate([]);
  };

  const handleClick2 = useCallback(() => {
    forceUpdate([]);
  }, []);

  return (
    <div>
      <label>
        按钮数量:
        <input
          type="number"
          max={1000}
          min={0}
          value={amount}
          onChange={(value) => setAmount(Number(value))}
        />
      </label>
      <List
        amount={amount}
        title="without useCallback"
        onClick={handleClick1}
      ></List>
      <List
        amount={amount}
        title="with useCallback"
        onClick={handleClick2}
      ></List>
    </div>
  );
};

const List = (props: any) => {
  const { title, onClick, amount } = props;
  const list = useMemo(() => {
    const result: any[] = [];
    for (let i = 0; i < amount; i++) {
      result.push(
        <button key={i} onClick={onClick}>
          click
        </button>
      );
    }
    return result;
  }, [amount, onClick]);

  return (
    <div>
      <div>{title}</div>
      <div style={{ height: 200, overflow: "hidden" }}>{list}</div>
    </div>
  );
};
