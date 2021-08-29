import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment_byone,remove_byone,decrement } from '../actions/numberAction'

const NumberList = (props)=>{
    const dispatch = useDispatch()
    const number=useSelector((state)=>{
        return state.number
    })

    const increment=(id)=>{
        dispatch(increment_byone(id))
    }

    return (
        <div>
            {
                number.map(num=>{
                  return(
                    <li key={num.id}>{num.value}
                    <button onClick={()=>increment(num.id)}>+</button>
                    <button onClick={()=>dispatch(decrement(num.id))}>-</button>
                    <button onClick={()=>dispatch(remove_byone(num.id))}>x</button>
                    </li>
                  )  
                })
            }
        </div>
    )
}
export default NumberList