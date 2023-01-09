function fatorial(n){
    let fat = 1
    for (let c = n; c >= 1; c--)
    fat *= c
    return fat
}

console.log(fatorial(5))


/* recursividade */

function fatorial1(b){
    if(b == 1){
        return 1
    }else{
        return b * fatorial1(b-1)
    }

  
}
console.log(fatorial1(5))