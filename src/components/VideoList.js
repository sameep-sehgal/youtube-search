import React from 'react';
import Video from './Video';
import StreamVideo from './StreamVideo';
import './VideoList.css';

const VideoList =(props)=>{
    const videos = props.videos.map(video=>{
    return <Video key={video.id.videoId} video={video} onVideoClick={props.onVideoClick}/>
    })
    if(props.search && props.videos.length===0){
        return(
            <h3>LOADING...</h3>
        )
    }
    if(props.search && props.videos.length!==0){
        return(
            <div className='box'>
                <h3>You searched for '{props.search}'</h3>
                <StreamVideo streamVideoId={props.streamVideoId}/>
                {videos}
            </div>
        )
    }
    return <h3>Search For Youtube Videos!</h3>
}

export default VideoList;
