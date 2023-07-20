import { createStore, applyMiddleware } from 'redux'

function counterReducer(state = {counter: 0}, action){
    switch (action.type){
        case 'PLUS':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'MINUS':
            return{
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}
const loginMiddleware = store => next => action => {
let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('after state', store.getState())
    console.groupEnd()
    return result
}
const thunkMiddleware = store => next => action => {
    typeof action === "function" ?
        action(store.dispatch, store.getState) :
        next(action)
}
const store = createStore(counterReducer, applyMiddleware(thunkMiddleware,loginMiddleware))

export default store
