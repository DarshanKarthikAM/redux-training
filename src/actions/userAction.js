import axios from 'axios'
// start or async
export const startGetUsers=()=>{
    // below function take two arg (dispatch,getState)
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const users = response.data
            dispatch(setUsers(users))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const setUsers=(users)=>{
    return {type:"SET_USERS",payload:users}
}