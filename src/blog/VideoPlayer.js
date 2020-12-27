import React from 'react' ;
import ReactPlayer from 'react-player/youtube'
import "../styles/blog.css" ;
export default function VideoPlayer(props) {
    return (
        <div className="video-container">
            <ReactPlayer url={props.url} />        
        </div>
    )
}
