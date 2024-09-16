import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";



const useStyles = makeStyles((theme: Theme)=>{
    return {
        navIcon: {
            color: '#999 !important',
            fontSize: '1.7rem !important',
            fontWeight: '900 !important'
        },
        logo: {
            transition: 'height 0.4s ease 0s, opacity 0.3s ease 0s',
            margin:'0 auto'
        },
        logoHolder: {
          width: '100%',
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center'
        },
        paragraph: {
          lineHeight: 1.6,
          color: '#555',
          fontSize: '0.978rem',
          fontStyle: 'normal',
          textAlign: 'left',
          fontWeight: '400',
          marginBottom: '30px'
      },
      footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
          padding: '0rem',
        },
      },
      linkButton: {
        color: '#fff !important',
        backgroundColor: '#5d307f',
        borderColor: '#5d307f',
        marginLeft: '10px',
        display: 'inline-block',
        fontWeight: 400,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        userSelect: 'none',
        border: '1px solid transparent',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        lineHeight: 1.5,
        borderRadius: '0.25rem',
        textDecoration: 'none',
        transition: 'all 0.15s ease-in-out',

        "&:hover": {
          color: '#000 !important',
          backgroundColor: '#e37927',
          borderColor: '#e37927',
        },

        [theme.breakpoints.down('sm')]: {
          marginLeft: '0',
          marginTop: '5px',
          display: 'block'
        },
      },
      asideInner: {
        padding: '1rem',
        width: '100%',
        height: '100%',

        [theme.breakpoints.down('md')]: {
          padding: '1rem',
        },
      }
    }
});

export default useStyles;