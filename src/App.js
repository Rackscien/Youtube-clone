// import logo from './logo.svg';
import React from "react";
import SearchBar from "./components/SearchBar";
import './App.css';
import youtube from './apis/youtubeapi';
import VideoList from "./components/videoList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  
  state={
    videos : [],
    selectedVideo : "",
  };
  onSelectVideo = (video) =>{
    this.setState({selectedVideo: video});
  };
 
componentDidMount(){
  this.onTermSubmit("");

}

  onTermSubmit = async(term) => {
   const res= await youtube.get('/search',{
      params : {
        q: term,
      },
    });
    this.setState({videos : res.data.items, selectedVideo: res.data.items[0]});
    
  };

  render(){
  return (
    <>
      <div className='container'>
        <div className='row yt' >
          
          <h1 className="col-md-12 text-center appheader">
          <i className="fab fa-youtube-square"></i>
           &nbsp; Video Search Engine
         </h1>
        </div>

      <div className="row my-2">
        <div className="col-md-8">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
         <VideoDetails video={this.state.selectedVideo}/>
      </div>

        <div className="col-md-4">
         <VideoList
          videos={this.state.videos}
          onSelectVideo={this.onSelectVideo}
          />
        </div>        
      </div>
   </div>
</>
   
  );
 }
}

export default App;
