import React from 'react';
import VideoList from './VideoList';
import SearchBox from './SearchBox';
import Footer from './Footer';
import youtube from './apis/youtube';


class App extends React.Component{
    state={videos:[],search:'',streamVideoId:''}
    onSearchChange=(search)=>{
        this.youtubeRequest(search);
    }

    onVideoClick=(video)=>{
        this.setState({streamVideoId:video.id.videoId})
    }

    youtubeRequest=(search)=>{
        this.setState({videos:[]})
        this.setState({search:search})
        youtube.get('/search',{params:{
            key:'AIzaSyCObz9vN81iHO1GDyKh3pKr1kPp2EM4VJg',
            part:'snippet',
            order:'viewCount',
            type:'video',
            maxResults:10,
            videoDefinition:'any',
            q:search
        }}).then(response=>this.setState({videos:response.data.items}))
    }
    
    render(){
        return(
            <div>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <VideoList videos={this.state.videos}  search={this.state.search} onVideoClick={this.onVideoClick} streamVideoId={this.state.streamVideoId}/>
                <Footer text={`Showing ${this.state.videos.length} results.`}/>
            </div>

        )
    }
}

export default App;