import { Button } from "antd";

export const TestSyntheticEvent = () => {
  function handleClick(event: any) {
    console.log(event);
  }

  return (
    <div onClick={handleClick}>
      <p onClick={handleClick}>
        <Button onClick={handleClick}>button</Button>
      </p>
    </div>
  );
};
