import { listFolders } from './browse'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FOLDERS: 'SHOW_FOLDERS',
    SHOW_FILES: 'SHOW_FILES'
}

export const browse = id => { return listFolders(id)}


export const login = (onClose, onLogin) => {
    return {
        "type": "SHOW_MODAL",
        modalType: "LOGIN",
        modalProps: {
            open:true,
            "onClose": onClose,
            "onLogin": onLogin
        }
    }
}

export const hideLogin = () => {
    return {
        "type": "HIDE_MODAL",
        modalType: "LOGIN",
        modalProps: {
            open:false,
        }
    }
}