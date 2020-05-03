import React from 'react';
import './Video.css';

const Video = (props)=>{
    return(
        <div className='container'>
            <div className='block' onClick={()=>props.onVideoClick(props.video)}>
                <img alt="" src={props.video.snippet.thumbnails.medium.url}/>
                <p>
                    {props.video.snippet.title}
                </p>
            </div>
            <hr/>
        </div>

    )
}

export default Video;
