import {DARK_THEME, NORMAL_THEME} from '../constants/actionType' ;

export function switchTheme(themeType){
    if(themeType === 'dark'){
        return {type: DARK_THEME}
    }
    else if(themeType === 'normal'){
        return {type: NORMAL_THEME}
    }
}