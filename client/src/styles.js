import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '2rem auto',
        display: 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '5px 7px rgba(255,255,255,0.2)',
        width: '60vw',
        textAlign: 'center',
    },
    heading: {
        color: 'black',
        fontSize: '2rem',
        fontWeight: 'bold',
        padding: '0.3rem',
        variant: 'h2',
        align: 'center',
        fontFamily: "cursive",
        lineHeight: "1.5"
    },
    image: {
        marginLeft: '2rem',
        height: '3rem'
    },
    container: {
        maxWidth: "lg",
        //background: '#E5E5E5'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            direction: 'column-reverse'
        }
    }
}));