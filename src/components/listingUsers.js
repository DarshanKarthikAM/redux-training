import React,{useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { startGetUsers } from "../actions/userAction"

const ListingUsers =()=>{
    const users = useSelector((state)=>{
        return state.users
    })
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(startGetUsers())
    },[])

    return (
        <div>
            <h3>Listing users-{users.length}</h3>
        </div>
    )
}
export default ListingUsers