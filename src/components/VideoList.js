import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItems from './VideoItems';

const VideoList = (props) => {
    const ListItems = props.videolist.map((vl, id) => <VideoItems onVideoSelect={props.onVideoSelect}
    key={id} videolistitem={vl} />)
    return (
    <Grid container spacing={10}>    
    {ListItems}
    </Grid>
    );
}

export default VideoList;