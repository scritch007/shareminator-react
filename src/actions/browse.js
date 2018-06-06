import fetch from 'cross-fetch'

export function listFolders(folder){
    return function(dispatch, getState){
        
        dispatch({type:"BROWSE_REQUEST", id: folder})
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (getState().auth && getState().auth.authentication_header){
            headers["authentication"] = getState().auth.authentication_header
        }
        fetch("https://sharing.legrand.ws/commands",{
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                name: "browser.list",
                browser: {
                    list: {
                        input: {
                            path: folder,
                            show_hidden_files:false
                        }
                    }
                }
            })
        }).then(function(resp){
            return resp.json()
        }).then(function (respJSON){
            dispatch({
                type: "BROWSE_FOLDER_SUCCESS",
                resp: respJSON.browser.list.output.children,
                parent: folder
            })
        })
    }
}

export function authenticate(login, password){
    return function(dispatch, getState){
        fetch("https://sharing.legrand.ws/auths/dummy.get_challenge", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }).then(function(resp){
            return resp.json()
        }).then(function (respJSON){
            fetch("https://sharing.legrand.ws/auths/dummy.auth", {
                
                "method": "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    challenge_hash: respJSON.challenge+":"+password,
                    ref: respJSON.ref,
                    login: login
                })
                
            }).then(function(resp){
                return resp.json()
            }).then(function(respJSON){
                dispatch({
                    type: "AUTHENTICATION_OK",
                    resp: respJSON,
                })
                dispatch(listFolders(getState().items.currentElement));
            })
        });
    }
}