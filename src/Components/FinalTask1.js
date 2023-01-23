import React,  {useState, useEffect} from 'react';
import {Button} from "@mui/material";

const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
}

const FinalTask1 = () => {
   let fungsi1 = () => {
      Result1 = twoSum([2,4,6,8], 6);
      console.log(Result1);
      return Result1
    }
  
  let [Result1,  setResult1] = useState(true);
  return (
  <>
  <div>
     <Button variant="outlined" onClick={() => setResult1(fungsi1)}>
      Nomor 1!
     </Button>
  </div>
  </>
  );
};
 export default FinalTask1;




