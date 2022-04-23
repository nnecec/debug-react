export const TestSyntheticEvent = () => {
  function handleClick(event: any) {
    console.log(event);
  }

  return (
    <div onClick={handleClick}>
      <p onClick={handleClick}>
        <button onClick={handleClick}>button</button>
      </p>
    </div>
  );
};
