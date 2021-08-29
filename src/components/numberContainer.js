import React from 'react'
import {useSelector} from 'react-redux'
import NumberControl from './numberControl'
import NumberList from './numberList'


const NumberContainer =(props)=>{
    const number = useSelector((state)=>{
        return state.number
      })
    
    const totalSum=()=>{
        let sum =0
        number.forEach(ele=>{
            sum += ele.value
        })
        return sum
      }
    return (
        <div>
            <h2>Random Number Generator</h2>
            <h4>Listing -{number.length} sum -{totalSum()} </h4>
            <NumberList />
            <NumberControl />
        </div>
    )
}
export default NumberContainer