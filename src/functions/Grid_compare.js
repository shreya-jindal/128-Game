//if the multidementional arrays are same , the function returns true else false;
export function Grid_compare(a1, a2) {
    if(a1.length !== a2.length) {
     return false;
    }
    for(var i in a1) {
     if(a1[i] instanceof Array && a2[i] instanceof Array) {
      if(!Grid_compare(a1[i], a2[i])) {
       return false;
      }
     }
     else if(a1[i] !== a2[i]) {
      return false;
     }
    }
    return true;
   }