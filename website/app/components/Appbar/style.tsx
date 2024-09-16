import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme)=>{
    return {
      section: {
        display: 'block !important',
        width: '100vw !important',
        top: '0 !important',
        zIndex: '-1 !important',
        paddingTop: '100px !important',
        paddingBottom: '10px !important',
        background: '#150723 !important',
        border: '0 !important',
        transition: 'all .35s ease-in-out',
        borderBottom: '10px solid #5e2d81 !important',

        position: 'absolute',
        left: '0',
        margin: '0'
      },
      section2: {
        display: 'block',
        width: '100vw !important',
        height: 'auto',
        top: '0 !important',
        zIndex: '-1 !important',
        paddingTop: '100px !important',
        paddingBottom: '0px !important',
        background: '#150723 !important',
        border: '0 !important',
        transition: 'all .35s ease-in-out',
        borderBottom: '10px solid #5e2d81 !important',

        position: 'fixed',
        left: '0',
        margin: '0'
      },
      ul: {
        fontFamily: 'serif',
        width: '95%',
        margin: '0 auto',
        backgroundColor: 'transparent',
        borderTopColor: '#1ABC9C',
        listStyle: 'none',
        borderBottom: '2px solid #5e2d81',
      }, 
      button: {
        width: 'calc(33.33% - 2px)',
        margin: '0 2px 0 0',
        cursor: 'pointer !important',
        border: '0',
        borderRadius: '8px 8px 0 0',
        padding: '7px 0',
        textAlign: 'center',
        color: '#fff !important',
        background: 'none',
        fontSize: '1.05rem',
        fontFamily: 'inherit',
        fontWeight: '500',

        textTransform: 'uppercase',

        "&:hover": {
            background: '#5e2d81',
        }
      }, 
      activeButton: {
        width: 'calc(33.33% - 2px)',
        margin: '0 2px 0 0',
        cursor: 'pointer !important',
        border: '0',
        borderRadius: '8px 8px 0 0',
        padding: '7px 0',
        textAlign: 'center',
        color: '#fff !important',
        background: '#5e2d81',
        fontSize: '1.05rem',
        fontFamily: 'inherit',
        fontWeight: '500',

        textTransform: 'uppercase',

      },

      linkCard: {
        width: 'calc(12.5% - 2px)',
        float: 'left',
        height: '140px',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        boxSizing: 'border-box',
        padding: '0px',
        margin: '1px',
        maxWidth: '66.6667%',

        "&:hover": {
            transform: 'translateY(-5px)',
            transition: 'all 0.28s ease-in-out 0s',
            backgroundColor: '#fff',
        }
      },
      linkIconHolder: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column",
        color: '#fff'
      },
      linkCardIcon: {
        fontSize: '2.5em',
        padding: '10px',
      },
      form: {
        marginBottom: '30px',
      },
      box: {
        background: '#fff',
        width: '325px',
        margin: '0 auto',
        boxSizing: 'border-box',
        borderRadius: '5px',
        padding: '10px 0',
      },
      firstPart: {
        width: '300px',
        margin: '0 auto',
      },
      secondPart: {
        margin: '0rem auto',
        marginTop: '0.5rem',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around',
      },

      firstPartTitle: {
        color: '#5e2d81 !important',
        margin: '0 0 14px 0',
        fontSize: '1.55rem',
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: '1.5',
        fontFamily: 'Raleway, sans-serif',
      },

      input1: {
        borderBottomColor: 'rgba(255, 255, 255, 0.15) !important',
        width: '100%',
        border: '0',
        borderRadius: '5px',
        padding: '0 5px 10px 0px',
        textAlign: 'center',
        fontFamily: 'serif',
        fontSize: '1.4rem',
        fontVariant: 'all-small-caps',
        letterSpacing: '1px',
        wordSpacing: '2px',
        overflow: 'visible',

        "&:focus": {
            outline: 'none',
        }
      }, 
      input2: {
        position: 'relative',
        borderBottomColor: 'rgba(255, 255, 255, 0.15) !important',
        width: '100%',
        border: '0',
        borderRadius: '25px',
        padding: '8px',
        fontFamily: 'serif',
        fontSize: '1.6rem',
        fontVariant: 'all-small-caps',
        background: 'rgba(0, 0, 0, .7)',
        color: '#fff',
        marginTop: '10px',
        letterSpacing: '2px',
        overflow: 'visible',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#5e2d81'
        }
      },
      input2Loading:{
        position: 'relative',
        borderBottomColor: '#5e2d81 !important',
        width: '100%',
        border: '0',
        borderRadius: '25px',
        padding: '8px',
        fontFamily: 'serif',
        fontSize: '1.6rem',
        fontVariant: 'all-small-caps',
        background: 'rgba(0, 0, 0, .7)',
        color: '#fff',
        margin: '10px 0',
        letterSpacing: '2px',
        overflow: 'visible',
        cursor: 'not-allowed',
      },
      input2preloader: {
        position: 'absolute',
        right: '1rem',
        top: '30%'
      },
      secondPartLinkSpan: {
        color: 'red !important',
        fontSize: '0.9rem',
      },  
      secondPartLink: {
        color: '#5e2d81 !important',
        textDecoration: 'none',
        fontSize: '0.9rem',
      },
      



        // Small nav
        smallul: {
          fontFamily: 'serif',
          width: '100%',
          margin: '0 auto',
          backgroundColor: 'transparent',
          borderTopColor: '#1ABC9C',
          listStyle: 'none',
          borderBottom: '2px solid #5e2d81',
        },
        smallnavHolder: {
          display: 'flex',
          borderTop: '1px solid #583680',
        },

        half: {
          position: 'relative',
          borderRight: '1px solid #583680',
          width: '50%',
          textAlign: 'center',
          fontSize: '1.15rem',
          textTransform: 'uppercase',
          padding: '10px',
        },
        icon: {
          textAlign: 'center',
          verticalAlign: 'top',
          paddingRight: '2px',
          fontSize: '1.1rem !important',
          margin: '0px 2px',
        },
        smallLink: {
          background: 'none',
          color: 'white !important',
          height: 'unset',
          margin: '0',
          justifyContent: 'center',
          borderRadius: '105px',
          padding: '0px 10px',
          display: 'flex',
          alignItems: 'center',
        },

        halfApp: {
          borderRight: '1px solid #583680',
          width: '50%',
          textAlign: 'center',
          fontSize: '1.15rem',
          textTransform: 'uppercase',
          padding: '10px',
          float: 'left',
          borderTop: '1px solid #583680',
        },

        smallnavItems: {

        },
        smallnavItemsButton: {
          width: '100%',
          margin: '0 auto !important',
          fontSize: '1.2rem', fontFamily: 'serif',
          textAlign: 'left',
          display: 'flex',
          padding: '12px 10px',
          borderTop: '1px solid #583680',
          borderBottom: '1px solid #583680',
          cursor: 'pointer !important',
          border: '0',
          color:' #fff !important',
          background: 'none',
          textTransform: 'uppercase',
        },
        smallnavItemsButtonActive: {
          width: '100%',
          margin: '0 auto !important',
          fontSize: '1.2rem', fontFamily: 'serif',
          textAlign: 'left',
          display: 'flex',
          padding: '12px 10px',
          borderTop: '1px solid #583680',
          borderBottom: '1px solid #583680',
          cursor: 'pointer !important',
          border: '0',
          color:' #fff !important',
          background: '#5e2d81',
          textTransform: 'uppercase',
        },
        mob: {

        },
        mobLi: {
          width: '100%',
          minHeight: 'unset',
          boxSizing: 'border-box',
          margin: '1px 1px 0 0 !important',
          position: 'relative',
          float: 'left',
          height: 'unset',
          color: 'black',
          display: 'flex',
          justifyContent: 'unset',
          alignItems: 'center',
          textAlign: 'left',
          maxWidth: 'unset !important',
          flexFlow: 'row !important',
          fontSize: '17px',
          zIndex: '1000',

          "&:hover": {
            transform: 'translateY(-5px)',
            transition: 'all 0.28s ease-in-out 0s',
            backgroundColor: '#fff',
          }

        }, 
        mobA: {
          margin: '12px 0px 12px 25px',
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          color: '#fff',
        },

        smallForm: {
          opacity: 1,
          zIndex: 10,
          height: '100px !important',
          position: 'absolute',
          width: '100% !important',
          padding: '0 15px',
          margin: 0,
          transition: 'opacity .3s ease-in-out',
        },
        smallInput: {
          color: '#fff',
          fontSize: '1.05rem',
          fontWeight: '600',
          borderBottomColor: 'rgba(255, 255, 255, 0.15) !important',
          textShadow: '1px 1px 1px rgba(0,0,0,.1)',
          position: 'relative',
          left: '-15px',
          padding:' 0 15px',
          borderRadius: '0',
          border: '0',
          outline: '0 !important',
          marginTop: '0 !important',
          fontFamily: 'Raleway, sans-serif',
          boxShadow: 'none !important',
          width: '100% !important',
          height: '25px !important',
          background: 'none !important',
          letterSpacing: '1px !important',
          display: 'block',
          lineHeight: 1.5,
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
        }
    
    }
});



/*
=============================================================== 
//* Styled Components
===============================================================
*/
const Section = styled('section')({
  display: 'block',
  width: '100vw !important',
  height: 'cal(100% - 8rem)',
  top: '0 !important',
  zIndex: '-1 !important',
  paddingTop: '100px !important',
  paddingBottom: '0px !important',
  background: '#150723 !important',
  border: '0 !important',
  transition: 'all .35s ease-in-out',
  borderBottom: '10px solid #5e2d81 !important',

  position: 'fixed',
  left: '0',
  margin: '0'

});

export {useStyles, Section};