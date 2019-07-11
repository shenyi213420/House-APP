import { createStore, combineReducers } from 'redux'

//HistoryList
function HistoryList(state = [], action) {
    // console.log(action.obj);
    // action === {
    //     type: 'addHouse',
    //     obj // 当前点击的房产数据
    // }
    switch (action.type) {
        case 'changeHouse':
            //构建一个新的数组，把老的值拷贝过去，并且添加新数据
            //判断有没有相同数据
            for (let i = 0; i < state.length; i++) {
                if(state[i].id == action.obj.id){
                    state.splice(i,1)//如果有相同数据，就删除老数组的数据，从新加载新数组的数据
                    break
                }

            }
            return [action.obj, ...state]
        default: return state
    }
}

let reducers = combineReducers({
    HistoryList
})
export default createStore(reducers)