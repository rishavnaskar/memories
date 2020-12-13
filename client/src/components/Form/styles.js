import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        margin: '1rem 5rem',
        borderRadius: '0.8rem',
        background: '#3700B3',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        letterSpacing: '2px'
    },
    buttonClear: {
        margin: '0 2rem',
        borderRadius: '1rem',
        padding: '0.5rem',
        background: '#B00020',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        letterSpacing: '3px'
    },
}));