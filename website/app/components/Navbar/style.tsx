import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material';
import {styled} from '@mui/system'



const useStyles = makeStyles((theme: Theme)=>{
    return {
        section: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            zIndex: '205 !important',
            borderBottomColor: 'rgb(238, 238, 238)',
            transition: 'all 0.15s linear',
            
          
            // Media query for smaller screens
            [theme.breakpoints.down('lg')]: {
                backgroundColor: '#150723 !important',
                height: 'auto !important'
            },
        },
        imgSection: {
            width: 'fit-content',

            [theme.breakpoints.down('md')]: {
                marginLeft: '-10px',
            },
        },
        logo: {
            display: 'block',
            transition: 'all 0.15s linear',
            height: '100px',

            [theme.breakpoints.down('lg')]: {
                height: '100px !important',
            },
        },

        navigationSection: {
            // float: 'right',
        },
        ul: {
            borderWidth: '0px !important',
            borderStyle: 'initial !important',
            borderColor: 'initial !important',
            borderImage: 'initial !important',
            listStyle: 'none',
        },
        li: {
            marginLeft: '0px',
            position: 'inherit',
            marginRight: '5px',
            float: 'left',
        },
        li2: {
            marginLeft: '0px',
            position: 'inherit',
            marginRight: '5px',
            float: 'left',
        },
        navLink: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: 'rgb(66, 40, 97) !important',
            background: 'white',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.15s linear',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            [theme.breakpoints.down('lg')]: {
                marginTop: '30px !important',
            },
        },
        navLinkActive: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: '#ffffff !important',
            backgroundColor: '#422861 !important',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.15s linear',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            [theme.breakpoints.down('lg')]: {
                marginTop: '30px !important',
            },
        },

        navLinkActiveSmall: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: '#422861 !important',
            backgroundColor: '#fff',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'margin 0.4s ease 0s, padding 0.4s ease 0s',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            "&:hover": {
                backgroundColor: '#422861 !important',
                color: '#fff !important'
            }
        },
        icon: {
            textAlign: 'center',
            verticalAlign: 'top',
            paddingRight: '2px',
            fontSize: '1.1rem !important',
            margin: '0px 2px',
        },
        searchForm: {
            opacity: '1',
            zIndex: '10',
            position: 'absolute',
            width: '100% !important',
            height: '100% !important',
            padding: '0 15px',
            margin: '0',
            top: '0',
            left: '0',
            transition: 'opacity .3s ease-in-out',

            [theme.breakpoints.down('md')]: {
                display: 'none'
            },
        }, 
        searchInput: {
            width: '70% !important',
            paddingLeft: '40px',
            pointerEvents: 'auto',
            borderBottomColor: 'rgba(255, 255, 255, 0.15) !important',
            textShadow: '1px 1px 1px rgba(0,0,0,.1)',
            borderRadius: '0',
            border: '0',
            outline: '0 !important',
            fontSize: '32px',
            padding: '0px 80px 10px 0',
            height: '100%',
            backgroundColor: 'transparent',
            fontWeight: '700',
            marginTop: '0 !important',
            fontFamily: 'Raleway, sans-serif',
            color: '#fff',
            letterSpacing: '2px',
        },

        overlay: {
            background: 'rgba(0, 0, 0, .75)',
            zIndex: '201 !important',
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100% !important',
            width: '100% !important',
            cursor: 'url(./imgs/close.png), auto',
        }
    }
})


/*
=============================================================== 
//* Styled Components
===============================================================
*/

const NavBig = styled('nav')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '0px 30px',
    height: '104px',

    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
const NavSmall = styled('nav')(({ theme }) => ({
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '0px 30px',
    display: 'none',
    height: '104px',
  
    [theme.breakpoints.down('md')]: {
        display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0px 20px',
    },
}));
const MeasureHeight = styled('section')(({ theme }) => ({
    height: '104px',
    display: 'none',
    // Media query for smaller screens
    [theme.breakpoints.down('lg')]: {
        display: 'block'
    },
}));

export {useStyles, NavBig, NavSmall, MeasureHeight}