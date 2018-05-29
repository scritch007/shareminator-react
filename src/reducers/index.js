import { combineReducers } from 'redux'
import { visibilityFilter } from './visibilityFilter'

export const items = (state = [], action) => {

    switch (action.type){
        case "BROWSE_FOLDER_SUCCESS":
            let resp = [];
            action.resp.forEach((elem) => {
                elem.id = "/" + elem.name;
                resp.push(elem);
            })
            return resp;
        default:{
            return state;
        }
    }
}

export default combineReducers({
    visibilityFilter,
    items,
})