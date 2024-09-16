import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { styled } from '@mui/system';

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
        mainContentInner: {
            position: 'relative',
            padding: '25px 0',
            margin: '0 auto',
        },
        mainContentInnerContainer: {
            position: 'relative',
            top: 0,
            padding: '50px 5px',
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
        linkBtn: {
            background: '#422164',
            padding: '7px 35px',
            borderRadius: '25px',
            color: '#fff !important',
            margin: '0 15px 0 15px',
            textDecoration: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            "&:hover": {
                background: '#150624',
            }
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
            fontSize: '0.878rem',
            fontStyle: 'normal',
            textAlign: 'left'
        },
        paragrapha: {
            lineHeight: 1.5,
            color: '#b55e0c',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        },




        // Presonal
        pageCard: {
            marginTop: '68px !important',
            padding: '68px 30px 30px !important',
            backgroundColor: '#FFF',
            border: '1px solid #E5E5E5',
            borderRadius: '5px',
            textAlign: 'center',
            position: 'relative',
        },
        cardIconHolder: {
            backgroundColor: '#FFF',
            position: 'absolute',
            top: '-48px',
            left: '50%',
            margin: '0 0 0 -48px',
            border: '2px solid #583680',
            borderRadius: '50%',
            padding: '3px',
            width: '96px',
            height: '96px',
            display: 'block',
            transition: 'all 0.01s linear'
        },
        cardIcon: {
            lineHeight: '88px',
            fontSize: '16px',
            borderRadius: '50%',
            backgroundColor: '#583680',
            zIndex: 1,

            position: 'relative',
            width: '100%',
            height: '100%',
            color: '#FFF',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.05s linear'
        },
        cardH3: {
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '0',
            color: '#333',
            textTransform: 'uppercase',
            lineHeight: 1.5,
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',
        },
        cardLink: {
            padding: '10px 15px',
            border: '2px solid #eee',
            borderRadius: '5px',
            lineHeight: 3,
            color: '#b55e0c !important',
            textDecoration: 'none !important',
        }
        
    };
});


// Styled components
const Hero = styled('section')(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(/imgs/checking_accounts.jpg)',
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
const MainContent = styled('section')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    background: '#fff',
    margin: '0',
}));

export {useStyles, Hero, MainContent};