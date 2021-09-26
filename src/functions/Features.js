import { addNewNumber } from "./GridOperations";
import { RightMove,LeftMove, DownMove, UpMove } from './GameMoves';
import { Grid_compare } from "./Grid_compare";

export function newGame(){

    let grid= [ 
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0] 
  ]

    //adding 2 numbers at random place
    grid= addNewNumber(grid);
    grid= addNewNumber(grid);

    //reseting Score to 0
    localStorage.setItem("Score","0");

    return grid;
  }


  export const checkWinCondition= grid =>{

    //if any number===128 =>WON
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
        if(grid[i][j]===128){
          return true;
        }
      }
    }
    return false;
  }


  export const checkLostCondition= grid =>{

    //if board is empty i.e. sum of all numbers==0 => NOT Lost
    let sumOfNumbers=grid.map((row)=>{
      return row.reduce((a1,a2)=>a1+a2);
    }).reduce((num1,num2)=>num1+num2);

    if(sumOfNumbers===0){
      return false;
    }

    //if original grid is different from grid after any move =>NOT Lost , otherwise Lost
    if( !Grid_compare(grid,RightMove(grid)) ){
      return false;
    }
    if( !Grid_compare(grid,LeftMove(grid)) ){
      console.log(2);
      return false;
    }
    if( !Grid_compare(grid,UpMove(grid)) ){
      console.log(3);
      return false;
    }
    if( !Grid_compare(grid,DownMove(grid)) ){
      console.log(4);
      return false;
    }

    return true;
  }