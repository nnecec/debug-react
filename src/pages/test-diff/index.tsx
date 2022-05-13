import { useState } from "react";

export const TestDiff = () => {
  const [eat, setEat] = useState(false);

  const list = eat
    ? ["apple", "orange", "banana", "watermelon"]
    : ["apple", "banana", "watermelon"];

  return (
    <div>
      <blockquote>search: reconcileChildFibers</blockquote>
      <h3>Fruit list {eat ? "eat" : ""}</h3>
      <ul>
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <button onClick={() => setEat(!eat)}>like what?</button>
    </div>
  );
};
