import {DARK_THEME, NORMAL_THEME} from '../constants/actionType' ; 

const theme = 'dark' ;
export default function switchTheme(state=theme, action) {
    switch (action.type){
        case DARK_THEME : 
            return 'dark'
        case NORMAL_THEME :
            return 'normal'
        default :
            return 'dark'        
    }
}