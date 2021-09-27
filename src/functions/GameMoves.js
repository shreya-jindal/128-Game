import { Grid_compare } from "./Grid_compare";
import { addNewNumber, slideRight, combineNumbers, horizontalMirror, transpose } from "./GridOperations";

//functions of arrow key down

  export function RightMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    //On Right Arrow Key down, slide numbers right , combine same numbers and slide again
    let UpdatedGridCopy= slideRight(GridCopy);
    UpdatedGridCopy= combineNumbers(UpdatedGridCopy);
    UpdatedGridCopy= slideRight(UpdatedGridCopy)
    
    //If no change on key down, return copy of original grid. Else add new number to it
    if(Grid_compare(UpdatedGridCopy,GridCopy))
      return GridCopy;

      UpdatedGridCopy= addNewNumber (UpdatedGridCopy);
    return UpdatedGridCopy;
  
  }

  export function LeftMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    
    //On Left Arrow Key down, mirror the rows, slide numbers right , combine same numbers , slide again and mirror back
    let UpdatedGridCopy=horizontalMirror(GridCopy);
    UpdatedGridCopy=slideRight(UpdatedGridCopy);
    UpdatedGridCopy=combineNumbers(UpdatedGridCopy);
    UpdatedGridCopy=slideRight(UpdatedGridCopy) ; 
    UpdatedGridCopy=horizontalMirror(UpdatedGridCopy);

    
    //If no change on key down, return copy of original grid. Else add new number to it
    if(Grid_compare(UpdatedGridCopy,GridCopy))
    return GridCopy;

    UpdatedGridCopy= addNewNumber (UpdatedGridCopy);
    return UpdatedGridCopy;
  }

  export function DownMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    //On Down Arrow Key down, transpose the grid, perform operation of right key down and transpose back
    let UpdatedGridCopy= transpose (GridCopy);
    UpdatedGridCopy= slideRight (UpdatedGridCopy);
    UpdatedGridCopy= combineNumbers (UpdatedGridCopy);
    UpdatedGridCopy= slideRight (UpdatedGridCopy);
    UpdatedGridCopy= transpose (UpdatedGridCopy);
    
    //If no change on key down, return copy of original grid. Else add new number to it
    if(Grid_compare(UpdatedGridCopy,GridCopy))
      return GridCopy;

    UpdatedGridCopy= addNewNumber (UpdatedGridCopy);
    return UpdatedGridCopy;
  }

  export function UpMove(grid){
  
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })
  
    //On Up Arrow Key down, transpose the grid, perform operations of left key down and transpose back
    let UpdatedGridCopy= transpose (GridCopy);
    UpdatedGridCopy= horizontalMirror (UpdatedGridCopy);
    UpdatedGridCopy= slideRight (UpdatedGridCopy);
    UpdatedGridCopy= combineNumbers (UpdatedGridCopy);
    UpdatedGridCopy= slideRight (UpdatedGridCopy) ; 
    UpdatedGridCopy= horizontalMirror (UpdatedGridCopy);
    UpdatedGridCopy= transpose (UpdatedGridCopy);

    //If no change on key down, return copy of original grid. Else add new number to it
    if(Grid_compare(UpdatedGridCopy,grid))
      return GridCopy;

    UpdatedGridCopy= addNewNumber (UpdatedGridCopy);
      return UpdatedGridCopy;
  }

 