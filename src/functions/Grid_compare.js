export function Grid_compare(a1, a2) {
    if(a1.length !== a2.length) {
     return false;
    }
    for(var i in a1) {
     // Don't forget to check for arrays in our arrays.
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