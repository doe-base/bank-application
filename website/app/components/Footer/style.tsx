import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { styled } from '@mui/system';


const useStyles = makeStyles((theme: Theme)=>{
    return {
        firstSectionInner: {
            maxWidth: '1170px',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        tagLineh3: {
            color: '#fff',
            letterSpacing: '2px',
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: 0,
            opacity: 1,
            animationDuration: '1s',
            animationFillMode: 'both',
            lineHeight: 1.5,
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',
        },
        tagLineImg: {
            width: '350px',
            maxWidth: '100%',
            verticalAlign: 'middle',
            borderStyle: 'none',
        },
        blossom: {
            display: 'inline-block',
            width: '60px',
            verticalAlign: 'text-top',
        },

        secondSectionInner: {
            position: 'relative',
            padding: '80px 0',
        },

        footerImg: {
            display: 'block',
            marginBottom: '30px',
            maxWidth: '100%',
            verticalAlign: 'middle',
            borderStyle: 'none',
        },
        addHolder: {
            fontStyle: 'normal',
            marginBottom: '30px',
            fontSize: '0.873rem',
            color: '#ccc',
            lineHeight: '1.4'
        },
        stongText: {
            fontSize: '0.873rem',
            color: '#ccc',
        },
        routingText: {
            opacity: '.8',
            fontSize: '0.873rem',
            lineHeight: 1.7,
            marginBottom: '30px',
        },
        listLink: {
            textDecoration: 'none',
            color: '#CCC',
            fontSize: '0.873rem',

            "&:hover": {
                color: '#fff',
            }
        },
        li: {
            padding: '4px', 
            listStyle: 'square',

            [theme.breakpoints.down('md')]: {
                listStyle: 'none',
            },
        }
    };
});



/*
=============================================================== 
//* Styled Components
===============================================================
*/
const FirstSection = styled('section')(({ theme }) => ({
    background: '#422861',
    padding: '20px 0 !important',
    position: 'relative',
    textAlign: 'center',
}));


const SecondSection = styled('section')(({ theme }) => ({
    fontFamily: 'serif',
    position: 'relative',
    maxWidth: '1170px',
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    [theme.breakpoints.down('md')]: {
        maxWidth: '540px !important',
    },
}));

const LastSection = styled('section')(({ theme }) => ({
    position: 'relative',
    color: '#ccc',
    background: '#111111',
    textShadow: '1px 1px 1px rgba(0,0,0,.1)',
    padding: '40px 0',
    fontSize: '14px',
    lineHeight: 1.8,
    fontFamily: 'serif'
}));

const Foot = styled('footer')(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#150723',
    color: '#CCC',
    borderTopColor: 'rgba(0, 0, 0, .2)',
}));


export {useStyles, FirstSection, SecondSection, LastSection, Foot};