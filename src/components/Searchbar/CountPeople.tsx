import {  Button, Stack } from "@mui/material";
import { useState } from "react";

interface propsType{
    type: string,
    defaultCount: number,
    onChange: (count: number) => void
}



const CountPeople: React.FC<propsType> = ( {type,defaultCount,onChange}) => {
    const [count, setCount] = useState<number>(defaultCount);
    

    return (
        <Stack direction="row" spacing={3} alignItems={"center"}>
            <label>{type +':'}</label>
            <Stack direction="row" spacing={2} alignItems={"center"}>
                <Button type='button' onClick={() => { setCount(count - 1); onChange(count - 1) }} disabled={count === defaultCount}>
                -</Button>
                <label style={{border:'1px solid blue', width:'25px',textAlign:'center',height:'30px'}}>{count}</label>
                <Button type='button' onClick={() => { setCount(count + 1); onChange(count+1) }}>
                +</Button>
            </Stack>
         </Stack>   
    )
}

export default CountPeople;