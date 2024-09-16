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
                maxWidth: '600px',
                padding: '15px !important'
            },
        },
        colFull: {
            clear: 'both',
            float: 'none',
            marginRight: 0,

            display: 'block',
            position: 'relative',
            marginBottom: '50px',
            
            width: '100%',
        },
        blackbots: {
            background: 'url(/imgs/tiny_dots.png)',
            backgroundSize: '74%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right',
            display: 'flex',
            marginBottom: '80px',

            [theme.breakpoints.down('md')]: {
                flexFlow: 'column',
                marginBottom: '40px',
                backgroundSize: '120%',
                backgroundPosition: '100% 15%',
            },
        },
        blackbotsRight: {
            flexFlow: 'row-reverse',
            backgroundPosition: 'center left',

            background: 'url(/imgs/tiny_dots.png)',
            backgroundSize: '74%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            marginBottom: '80px',

            [theme.breakpoints.down('md')]: {
                flexFlow: 'column',
                marginBottom: '40px',
                backgroundSize: '120%',
                backgroundPosition: '100% 15%',
            },
        },
        
        blackbotsPromoImg: {
            background: 'url(/imgs/fin7.jpg)',
            width: '100%',
            height: '580px',
            backgroundSize: 'cover',

            [theme.breakpoints.down('md')]: {
                height: '250px',
            },
        },

        blackbotsPromoImg2: {
            background: 'url(/imgs/fin6.jpg)',
            width: '100%',
            height: '580px',
            backgroundSize: 'cover',

            [theme.breakpoints.down('md')]: {
                height: '250px',
            },
        },

        promoDetailsWrapper: {
            background: '#fff',
            margin: '80px 10px 80px 0',
            padding: '20px',
            borderLeft: '4px solid #5f2d81',
            position: 'relative',
            left: '-40px',
            width: '90%',

            [theme.breakpoints.down('md')]: {
                margin: '0 20px',
                padding: '10px 10px 20px 10px',
                border: '0',
                borderTop: '4px solid #5f2d81',
                borderBottom: '4px solid #5f2d81',
                textAlign: 'center',
                position: 'relative',
                left: 0,
                top: '-40px',
            },
        },
        promoDetailsWrapperH2: {
            margin: '20px 40px',
            fontSize: '26px',
            color: '#444',
            fontWeight: '600',
            lineHeight: '1.5',

            [theme.breakpoints.down('md')]: {
                margin: '20px 10px',
            },
            
        },
        promoDetailsWrapperP: {
            lineHeight: '1.8',
            margin: '20px 40px',
            color: '#555',
            fontSize: '0.875rem',

            [theme.breakpoints.down('md')]: {
                margin: '20px 10px',
            },
            
        },
        promoDetailsWrapperUl: {
            margin: '20px 40px',
            paddingLeft: '20px',
            lineHeight: '1.4',
            color: '#555',
            fontSize: '0.875rem',
            // textAlign: 'left',

            [theme.breakpoints.down('md')]: {
                margin: '20px 10px',
            },
            
        },
        promoDetailsWrapperBtn: {
            margin: '20px 40px',
            background: '#422164',
            padding: '7px 35px',
            borderRadius: '25px',
            color: '#fff !important',
            fontSize: '0.875rem',

            "&:hover": {
                background: '#150624'
            },

            [theme.breakpoints.down('md')]: {
                margin: '20px 10px',
            },
            
        },





//


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
            fontSize: '0.978rem',
            fontStyle: 'normal'
        },
        paragrapha: {
            lineHeight: 1.5,
            color: '#b55e0c',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        }
    }
})


const Hero = styled('section')(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(/imgs/promotion.jpg)',
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



export {useStyles, Hero, MainContent}