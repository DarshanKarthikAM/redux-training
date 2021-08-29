const initialUsers =[]

const userReducers =(state =initialUsers,action)=>{
    switch(action.type){
        case "SET_USERS" : {return [...action.payload]}
        default :{
            return [...state]
        }
    }
}
export default userReducers