import React from 'react'
import { addNumber,remove_All,add_plusTwo } from '../actions/numberAction'
import {useDispatch} from 'react-redux'

const NumberControl =(props)=>{
    const dispatch = useDispatch()

    const generateNumber =()=>{
        const number = Math.round(Math.random()*100)
        const num = {
            id:Number(new Date()),
            value:number
        }
        dispatch(addNumber(num))
    }

    const removeAll =()=>{
        dispatch(remove_All())
    }

    const add_num=()=>{
        dispatch(add_plusTwo())
    }

    return (
        <div>
            <button onClick={generateNumber}>Generate</button>
            <button onClick={add_num}>+2</button>
            <button onClick={removeAll}>Remove all</button>
        </div>
    )
}
export default NumberControl