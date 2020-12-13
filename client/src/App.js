import React, {useState, useEffect} from "react";
import {
    Container,
    Typography,
    Grow,
    Grid,
    AppBar,
} from "@material-ui/core";
import {useDispatch} from "react-redux";


import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import {getPosts} from "./actions/posts";

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container className={classes.container}>
            <AppBar className={classes.appBar}>
                <Typography className={classes.heading}>
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classes.mainContainer}
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
