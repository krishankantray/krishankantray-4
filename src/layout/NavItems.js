import {React} from 'react' ;
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import {switchTheme} from '../redux/actions/switchTheme.action' ;
import '../styles/navItems.css' ;

export function ThemeChanger(props) {
    const dispatch = useDispatch() ; 
    const siteTheme = useSelector(state => state.switchTheme);
    return(
        <div className="theme-changer">
            <IconButton onClick={()=> siteTheme==='dark' ? dispatch(switchTheme('normal')) : dispatch(switchTheme('dark')) }>
                <i class="fas fa-sun" color="#D4AC0D"></i>
            </IconButton>
        </div>
    )
}

export function NavItems(props) {
    return(
        <div className="nav-items">
            <ul>
                <li><Link exact to="/" className="nav-link">Blog</Link></li>
                <li><Link exact to="/resume" className="nav-link">Resume</Link></li>
                <li><Link exact to="/projects" className="nav-link">Projects</Link></li>
                <li><Link exact to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
    )
}