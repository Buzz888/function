function Fn(type,elm,fn){
    if(type===1){
        fnc(type.elm,fn)
    }else if(type===2){
         fnc = (type,elm,fn)=>{}
    }else{
        fnc(100,elm,fn)
    }
    return fnc(type,elm,fn)
}
Fn(2,2,()=>{
    console.log(2)
})