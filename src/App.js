import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './layout/Navbar' ; 
import dark from './theme/dark';
import normal from './theme/normal';
import './App.css' ;
import Blog from './blog/index';
import FullBlog from './blog/FullBlogs' ;
import Resume from './resume/index' ;

function App() {
  const siteTheme = useSelector(state => state.switchTheme);
  const [theme, setTheme] = useState(createMuiTheme(dark)) ;
  useEffect(()=>{
    setTheme( siteTheme === 'dark' ? createMuiTheme(dark) : createMuiTheme(normal) ) ;
  },[siteTheme])
  
  return (
    <Router>
      <div style={{display:'flex'}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path='/' >
              <Blog />
            </Route>
            <Route exact path='/read-blog'>
              <FullBlog />
            </Route>
            <Route exact path='/resume'>
              <Resume />
            </Route>
          </Switch>
          <Navbar/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
