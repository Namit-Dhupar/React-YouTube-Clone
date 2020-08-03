import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

 const VideoItems = (props) => {
    return (
     <Grid item xs={12}>
      <Paper style={{ display: 'flex', alignItems:'center', cursor:'pointer'}}
      onClick={()=> props.onVideoSelect(props.videolistitem)}> 
      <img style={{marginRight:'25px', width: '55%'}} alt='thumbnail' 
      src={props.videolistitem.snippet.thumbnails.medium.url} />
      <Typography variant='subtitle1'><b>{props.videolistitem.snippet.title}</b>
      </Typography>
      </Paper>
     </Grid>
    )
}
export default VideoItems;