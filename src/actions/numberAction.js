export const addNumber = (n)=>{
    return {type:"Generate",payload:n}
}

export const remove_All =()=>{
    return {type:"removeall"}
}

export const add_plusTwo = ()=>{
    return {type:"addtwo"}
}

export const increment_byone =(id)=>{
    return {type:"increment",payload:id}
}

export const remove_byone =(id)=>{
    return {type:"remove",payload:id}
}

export const decrement=(id)=>{
    return {type:"decrement",payload:id}
}