import { createStore, combineReducers  } from 'redux'

//name
function name(state = '王五', action) {
    switch (action.type) {
        case 'changeName': return '沈一'
        default: return state
    }
}
//age
function age(state = 20, action) {
    switch (action.type) {
        // case 'test': return '沈一'
        default: return state
    }
}
//cls
function cls(state = '0221', action) {
    switch (action.type) {
        // case 'test': return '沈一'
        default: return state
    }
}
//sex
function sex(state = '女', action) {
    switch (action.type) {
        // case 'test': return '沈一'
        default: return state
    }
}

let reducers = combineReducers({
    name,
    age,
    sex,
    cls
})
//reducer会接收两个参数，参数1：state：当前store里存放的值 参数2：通知的值
// const store = 
// // let a = {
// //     type: 'test'
// // }

// store.dispatch({
//     type:'names'
// })
// console.log(store.getState().name)//查看所有状态

export default createStore(reducers)