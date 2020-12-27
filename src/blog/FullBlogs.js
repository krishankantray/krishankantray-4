import React from 'react';
import {useLocation, Link} from 'react-router-dom' ;
import Paper from '@material-ui/core/Paper';
import "../styles/blog.css" ;

export default function FullBlogs(){
    let location = useLocation();
    let data = location.state.data; 
    let Post = require('../posts/'+data.filename).default;
    return(
        <div  className="blog-container">
            <div className="back-button">
                <Link to="/" className="link">
                    <i class="fas fa-arrow-alt-circle-left fa-3x" color="rgba(4, 104, 122, 1)"></i>
                </Link>
            </div>
            <Paper className="paper-container" elevation={3}>
                <Post />
            </Paper>
        </div>
    )
}
