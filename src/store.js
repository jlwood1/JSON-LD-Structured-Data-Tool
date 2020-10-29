import {createStore, combineReducers} from 'redux';
import reducer from './reducers/widgetReducer';

const rootReducer = combineReducers({
    app: reducer
}); 

export default createStore(rootReducer);