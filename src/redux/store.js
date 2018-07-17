
import {createStore} from 'redux'
// Reducer

let defaultState = {
    count: 100,
    name: 'xixi'
}

function reducer(state = defaultState, action) {
    let _state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'increase':
            _state.count = _state.count + 1
            break;
        case 'decrement':
            _state.count = _state.count - action.num
            break;
        case 'changeName':
            _state.name = _state.name === 'xixi' ? 'hehe' : 'xixi'
            break;
        default:
            break;
    }
    return _state;
}
// Store
const store = createStore(reducer);
export default store;