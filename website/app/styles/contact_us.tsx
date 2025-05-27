import { makeStyles } from "@mui/styles";
import { styled } from '@mui/system';
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme)=>{
    return {
        heroInner: {
            position: 'relative',
            zIndex: 5,
            paddingTop: '100px',
            maxWidth: '1170px',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        heroInnerH1: {
            color: '#ffffffe6',
            fontSize: '2.4rem',
            fontWeight: 600,
            letterSpacing: '3px',
            padding: 0,
            margin: 0,
            lineHeight: 1,
            textTransform: 'uppercase',
            fontFamily: 'Raleway, sans-serif',

            [theme.breakpoints.down('md')]: {
                textAlign: 'center !important',
                fontSize: '2.2rem',
            },
        },
        mainContent: {
            position: 'relative',
            overflow: 'hidden',
            background: '#fff',
            margin: '0',
        },
        mainContentInner: {
            position: 'relative',
            padding: '25px 0',
            margin: '0 auto',
        },
        mainContentInnerContainer: {
            position: 'relative',
            top: 0,
            padding: '50px 0',
            maxWidth: '1170px',
            width: '100%',
            margin: '0 auto',

            [theme.breakpoints.down('lg')]: {
                maxWidth: '860px',
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: '600px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '440px',
                padding: '15px !important'
            },
        },

        mapHolder: {
            paddingTop: '66.6667%',
            width: '100%',
            position: 'relative',
            padding: 0,
        },
        iframe: {
            height: '400px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
        },
        pageTitle: {
            background: 'url(../imgs/dotted.png) repeat-x center',
            position: 'relative',
            marginBottom: '30px',
            clear: 'left',

            [theme.breakpoints.down('sm')]: {
                background: 'none',
            },
        },
        pageTitleH2: {
            fontSize: '1.9rem',
            background: '#fff',
            display: 'inline',
            paddingTop: '7px',
            paddingRight: '25px',
            color: '#444',
            fontWeight: 600,
            lineHeight: 1.5,
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.879rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        formLabel: {
            display: 'inline-block',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#555',
            marginBottom: '10px',
            cursor: 'pointer',
        },
        formInput: {
            display: 'block',
            width: '100%',
            padding: '8px 14px',
            fontSize: '15px',
            lineHeight: '1.42857143',
            color: '#555',
            backgroundColor: '#fff',
            backgroundImage: 'none',
            border: '2px solid #DDD',
            borderRadius: '0 !important',
            transition: 'border-color ease-in-out .15s',
            height: 'auto',
            overflow: 'visible',

            "&:focus": {
                border: '2px solid #555',
                outline: '#888'
            }
        },
        formInputHolder: {
            marginBottom: '25px', 
            display: 'block',
            position: 'relative',
            marginRight: '12%',
            float: 'left',

            [theme.breakpoints.down('sm')]: {
                marginRight: '0',
                width: '100%'
            },
        },
        formInputTextArea: {
            display: 'block',
            width: '100%',
            padding: '8px 14px',
            fontSize: '15px',
            lineHeight: '1.42857143',
            color: '#555',
            backgroundColor: '#fff',
            backgroundImage: 'none',
            border: '2px solid #DDD',
            borderRadius: '0 !important',
            transition: 'border-color ease-in-out .15s',
            height: 'auto',
            overflow: 'visible',

            maxWidth: '100%',

            "&:focus": {
                border: '2px solid #555',
                outline: '#888'
            }
        },
        linkBtn: {
            background: '#422164',
            padding: '7px 35px',
            borderRadius: '25px',
            color: '#fff !important',
            margin: '0 0px 5px 0px',
            textDecoration: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            border:'none',
            "&:hover": {
                background: '#150624',
            }
        },
        linkBtnDisabled: {
            background: '#150624',
            padding: '7px 35px',
            borderRadius: '25px',
            color: '#fff !important',
            margin: '0 0px 5px 0px',
            textDecoration: 'none',
            cursor: 'not-allowed',
            fontSize: '0.9rem',
            border:'none',
            opacity: '0.7'
        },

        strong: {
            lineHeight: 1.5,
            color: '#555',
            fontFamily: 'Raleway',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        },
        paragraph: {
            lineHeight: 1.5,
            color: '#555',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        },
        paragrapha: {
            lineHeight: 1.5,
            color: '#b55e0c',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        }
    };
});


// Styled components
const Hero = styled('section')(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(/imgs/contact.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '0px -217.168px',
    padding: '150px 0px',
    top: '-100px',
    marginBottom: '-100px',
    textShadow: 'none !important',
    borderBottom: 'none',
    backgroundColor: 'transparent',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    transition: 'all 0.17s linear !important',

    [theme.breakpoints.down('md')]: {
        padding: '100px 0px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '60px 0px',
    },
}));

export {useStyles, Hero};