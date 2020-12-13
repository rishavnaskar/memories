import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@material-ui/core";

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress className={classes.CircularProgress}/> : (
            <Grid className={classes.container} container spacing={3}>
                {posts.map((post, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;
