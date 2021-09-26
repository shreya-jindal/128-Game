import { Grid_compare } from "./Grid_compare";
import { addNewNumber, slideRight, combineNumbers, horizontalMirror, transpose } from "./GridOperations";


  export function RightMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    GridCopy=slideRight(GridCopy)
    GridCopy=combineNumbers(GridCopy);
    GridCopy=slideRight(GridCopy)
    
    if(Grid_compare(GridCopy,grid))
      return GridCopy;

    GridCopy= addNewNumber (GridCopy);
    return GridCopy;
  
  }

  export function LeftMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    GridCopy=horizontalMirror(GridCopy);
    GridCopy=slideRight(GridCopy);
    GridCopy=combineNumbers(GridCopy);
    GridCopy=slideRight(GridCopy) ; 
    GridCopy=horizontalMirror(GridCopy);

    if(Grid_compare(GridCopy,grid))
    return GridCopy;

    GridCopy= addNewNumber (GridCopy);
    return GridCopy;
  }

  export function DownMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    GridCopy= transpose (GridCopy);
    GridCopy= slideRight (GridCopy);
    GridCopy= combineNumbers (GridCopy);
    GridCopy= slideRight (GridCopy);
    GridCopy= transpose (GridCopy);

    if(Grid_compare(GridCopy,grid))
      return GridCopy;

    GridCopy= addNewNumber (GridCopy);
    return GridCopy;
  }

  export function UpMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    GridCopy= transpose (GridCopy);
    GridCopy= horizontalMirror (GridCopy);
    GridCopy= slideRight (GridCopy);
    GridCopy= combineNumbers (GridCopy);
    GridCopy= slideRight (GridCopy) ; 
    GridCopy= horizontalMirror (GridCopy);
    GridCopy= transpose (GridCopy);

    if(Grid_compare(GridCopy,grid))
      return GridCopy;

    GridCopy= addNewNumber (GridCopy);
      return GridCopy;
  }

 