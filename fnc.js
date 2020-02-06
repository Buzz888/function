function Fn(a,b){
    return function(){
        return a+b
    }
}
console.log(Fn(1,2)())
