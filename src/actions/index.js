import fetch from 'cross-fetch'

export function listFolders(folder){
    return function(dispatch){
        dispatch({type:"BROWSE_REQUEST", id: folder})

        fetch("https://sharing.legrand.ws/commands",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
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

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FOLDERS: 'SHOW_FOLDERS',
    SHOW_FILES: 'SHOW_FILES'
}

export const browse = id => { return listFolders(id)}