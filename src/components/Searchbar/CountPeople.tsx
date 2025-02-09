import { Button, Stack } from "@mui/material";
import { useState } from "react";

interface propsType {
  type: string;
  defaultCount: number;
  onChange: (count: number) => void;
}

const CountPeople: React.FC<propsType> = ({ type, defaultCount, onChange }) => {
  const [count, setCount] = useState<number>(defaultCount);

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      gap={"10px"}
      justifyContent={"space-between"}
    >
      <span>{type + ":"}</span>
      <Stack direction="row" alignItems={"center"}>
        <Button
          type="button"
          onClick={() => {
            setCount(count - 1);
            onChange(count - 1);
          }}
          disabled={count === defaultCount}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          type="button"
          onClick={() => {
            setCount(count + 1);
            onChange(count + 1);
          }}
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
};

export default CountPeople;
