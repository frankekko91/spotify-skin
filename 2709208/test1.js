[
    JSON.stringify(range(2,4)) == JSON.stringify([2,3,4]) ,
    JSON.stringify(range(0,2)) == JSON.stringify([0,1,2])
 ].every(n=>n) || console.log('Test of abs failed');  
 


 function range(n,m) {
    var result = [];
    for (let i = n;i <= m;i++) {
        result.push(i);
       
    }  return result;
}


  