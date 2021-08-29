const initialNumber = []

const numberReducer =(state = initialNumber,action)=>{
    switch(action.type){
        case "Generate" :{
            return [...state,action.payload]
        }
        case "removeall" :{
            return []
        }
        case "addtwo" :{
            const num = state.map(ele=>{
                return {...ele,value:ele.value+2}
            })
            return num
        }
        case "increment":{
            const num = state.map(ele=>{
                if(ele.id === action.payload){
                    return {...ele,value:ele.value+1}
                }else {
                    return {...ele}
                }
            })
            return num
        }
        case "decrement":{
            const num = state.map(ele=>{
                if(ele.id === action.payload){
                    return {...ele,value:ele.value-1}
                }else {
                    return {...ele}
                }
            })
            return num
        }
        case "remove":{
            const filterData = state.filter(ele=>{
                return action.payload !== ele.id
            })
            return filterData
        }
        default :{
            return state
        }
    }
}
export default numberReducer