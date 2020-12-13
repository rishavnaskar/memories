import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'stretch',
    },
    CircularProgress: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10vh 10vw',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));