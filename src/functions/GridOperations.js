export const addNewNumber= (grid)=>{

    let GridCopy=grid.map((row)=>{
        return row.map((element)=> element)
      })
  
    let indexesOfZeros=[];
    grid.map((row,i)=>{
      return row.map((_,j)=>{
          if(!grid[i][j])
          return indexesOfZeros.push({
            x:i,
            y:j
          })
      })
  })

  if(indexesOfZeros.length===0)
  return GridCopy;

    let spot=indexesOfZeros[Math.floor(Math.random()*indexesOfZeros.length)];

    
    let randomNumber= (Math.random()>0.5)? 2:4 ;

    GridCopy[spot.x][spot.y]= randomNumber;

    // console.log(GridCopy);
    return GridCopy;
  }

export  const slideRight=(grid)=>{

    return grid.map(row=>{
      let arr=row.filter(e=>e);
      let zeros=Array(grid.length-arr.length).fill(0);
      arr=zeros.concat(arr);
      return arr;
    })
  
  }
  
export  const combineNumbers = grid =>{

  let Score=Number(localStorage.getItem("Score"))
  let BestScore=Number(localStorage.getItem("BestScore"))

    for(let j=0;j<grid.length;j++){
      let row=grid[j];
    for(let i=row.length-1;i>0;i--){
      if(row[i]===row[i-1]){
        row[i]*=2;
        row[i-1]=0;
        
        //Updating Score and Best Score in local Storage
        if(Score!==undefined)
          Score += (row[i]);
        BestScore= (Score>BestScore) ? Score:BestScore;
        localStorage.setItem("Score",Score.toString());
        localStorage.setItem("BestScore",BestScore.toString());
        
      }
    }
  }
  return grid;
  }
  
export const horizontalMirror = grid =>{
    let GridCopy=grid.map((row)=>{
      return row.map((element)=> element)
    })

    let MirroredGrid=GridCopy.map(row=>{
      return row.reverse()
    })

    return MirroredGrid;

  }

export const transpose = grid => grid[0].map((x,i) => grid.map(x => x[i]))

