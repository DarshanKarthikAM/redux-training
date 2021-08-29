import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import numberReducer from '../reducers/numberReducer'
import userReducers from '../reducers/userReducers'

const numberStore=()=>{
    const store = createStore(combineReducers(
        {
            number:numberReducer,
            users:userReducers
        }
    ),applyMiddleware(thunk))
    return store
}
export default numberStore