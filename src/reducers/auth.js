export function auth( state = undefined, action){
    if (state === undefined){
        state = {authentication_header: localStorage.getItem("authentication_header")}
    }
    switch (action.type){
        case "AUTHENTICATION_OK":{
            localStorage.setItem("authentication_header", action.resp.authentication_header)
            return {...state, authentication_header: action.resp.authentication_header}
        }
        default: return state;
    }
}