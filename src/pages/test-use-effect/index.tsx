import React, { useLayoutEffect, useState, useEffect } from "react";

import { Button } from "antd";

export const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;

      const now = performance.now();

      while (performance.now() - now < 300) {}

      setCount(randomNum);
    }
  }, [count]);

  useEffect(() => {
    if (num === 0) {
      const randomNum = 10 + Math.random() * 200;

      const now = performance.now();

      while (performance.now() - now < 300) {}

      setNum(randomNum);
    }
  }, [num]);

  return (
    <div>
      <p>中间不会闪烁0</p>
      <Button onClick={() => setCount(0)}>useLayoutEffect: {count}</Button>

      <p>中间会闪烁0，因为 useEffect 是在 commitLayout 之后执行的</p>
      <Button onClick={() => setNum(0)}>useEffect: {num}</Button>
    </div>
  );
};
