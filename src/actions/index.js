import fetch from 'cross-fetch'

export function listFolders(folder){
    return function(dispatch){
        return fetch("https://sharing.legrand.ws/commands",{
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
                            path: "/",
                            show_hidden_files:false
                        }
                    }
                }
            })
          })
    }
}