import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import youtube from './api/youtube';

export class App extends Component {

  state = {
    videos : [],
    selectedVideo: null
  }

  componentDidMount = () =>{
    this.SubmitSearch('Astronomia')
  }
  
  SubmitSearch = async (searchTerm) =>{
    const response = await youtube.get('search',{
      params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyC1yVMgFkOPSrnY53UPhDUtLkEFuaND5aI',
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]})
  }
  
  selectVideo = (video) =>{
    this.setState({selectedVideo: video})
  }
  
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.SubmitSearch}/>
            </Grid>
             <Grid item xs={8}>
               <VideoDetails video={this.state.selectedVideo}/>
             </Grid>
             <Grid item xs={4}>
            <VideoList videolist={this.state.videos} onVideoSelect={this.selectVideo}/>
             </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App

