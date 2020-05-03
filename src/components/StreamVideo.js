import React from 'react';

const StreamVideo =(props)=>{
    if(props.streamVideoId.length===0){
        return <h3>Click on video to play.</h3>
    }
    return(
        <iframe src={`https://www.youtube.com/embed/${props.streamVideoId}`} allowFullScreen width="520" height="355"></iframe>
    )
}

export default StreamVideo;