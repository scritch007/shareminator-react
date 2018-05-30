import { combineReducers } from 'redux'
import { visibilityFilter } from './visibilityFilter'

export const items = (state = {elements: [], currentElement:"/"}, action) => {

    switch (action.type){
        case "BROWSE_FOLDER_SUCCESS":
            
            let resp = [];
            if (action.parent !== "/"){
                let a = action.parent.split("/")
                let up = a.slice(0, a.length-1).join("/");
                if (up === ""){
                    up = "/"
                }
                resp.push({name:"..", id:up})
            }
            action.resp.forEach((elem) => {
                elem.id = "/" + elem.name;
                resp.push(elem);
            })
            return {
                ...state,
                elements: resp,
                currentElement: action.parent,
            };
        default:{
            return state;
        }
    }
}

export default combineReducers({
    visibilityFilter,
    items,
})