

function count(){
    let a =0;
    function cal(){
        return a+=1
    }
   return cal
}
const res = count();
console.dir(res);
