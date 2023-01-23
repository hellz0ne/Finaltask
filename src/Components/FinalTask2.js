import React,  {useState, useEffect} from 'react';
import {Button} from "@mui/material";

function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
} 
const FinalTask2 = () => {
    let fungsi2 = () => {
        Result2 = pascals(5);
        console.log(Result2);
        return Result2
      }
    
    let [Result2,  setResult2] = useState(true);
    return (
    <>
    <div>
       <Button variant="outlined" onClick={() => setResult2(fungsi2)}>
        Nomor 2!
       </Button>
    </div>
    </>
    );
 };
  export default FinalTask2;
