import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';
import { styled } from '@mui/system';


const useStyles = makeStyles((theme: Theme)=>{
    return {
        advertSec: {
            verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'contain',

            [theme.breakpoints.down('md')]: {
                height: '480px'
            },
        },
        sliderButtonLeft: {
            position: 'absolute',
            cursor: 'pointer',
            zIndex: '10',
            top: '50%',
            left: '0',
            marginTop: '-26px',
            width: '52px',
            height: '52px',
            border: '0',
            transition: 'all 0.3s linear',
            backgroundColor: 'rgba(66, 33, 100, 0.8)',
            borderRadius: '0 100% 100% 0',

            "&:hover": {
                backgroundColor: 'rgba(66, 33, 100, 0.5)',
            },

            [theme.breakpoints.down('sm')]: {
                top: '95%',
                borderRadius: '0 25px 0 0',
                backgroundColor: 'rgba(66, 33, 100, 0.5)',
            },
        },
        sliderButtonRight: {
            position: 'absolute',
            cursor: 'pointer',
            zIndex: '10',
            top: '50%',
            right: '0',
            marginTop: '-26px',
            width: '52px',
            height: '52px',
            border: '0',
            transition: 'all 0.3s linear',
            backgroundColor: 'rgba(66, 33, 100, 0.8)',
            borderRadius: '100% 0 0 100%',

            "&:hover": {
                backgroundColor: 'rgba(66, 33, 100, 0.5)',
            },

            [theme.breakpoints.down('sm')]: {
                top: '95%',
                borderRadius: '25px 0 0 0',
                backgroundColor: 'rgba(66, 33, 100, 0.8)',
            },
        },
        buttonIcon: {
            fontWeight: '900',
            lineHeight: '50px',
            width: '20px',
            height: '52px',
            color: 'rgba(255,255,255,.8)',
            textShadow: '1px 1px 1px rgba(0,0,0,.1)',
            textAlign: 'center',
            // marginLeft: '14px',
        },

        trackDots: {
            zIndex: '10',
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translate(-50%, 0)',
        },
        counter: {
            position: 'absolute',
            opacity: '0',
            top: 'auto',
            right: '20px',
            bottom: '20px',
            zIndex: '20',
            width: '36px',
            height: '40px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            fontSize: '18px',
            fontWeight: '300',
            transition: 'all 0.3s linear 0s',
        },
        currentSideNumber: {
            position: 'absolute',
            lineHeight: 1,
            top: '5px',
            left: '0px',
        },
        sideNumber: {
            position: 'absolute',
            lineHeight: 1,
            top: 'auto',
            bottom: '5px',
            left: 'auto',
            right: '0px',
        },
        sideNumberSpan: {
            display: 'block',
            fontSize: '32px',
            lineHeight: '40px',
        },

        textContainer: {
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            margin: '0 auto',


            maxWidth: '1170px',
        },

        textArea1: {
            maxWidth: '600px',
            transform: 'translateY(0px)',
            opacity: '1.27166',
            color: 'rgb(238, 238, 238)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            marginTop: '-25px',
            position: 'absolute', width: '100%', height: '100%', left: '6rem', top: '254px',

            [theme.breakpoints.down('md')]: {
                top: '200px',
                left: '3rem',
                width: 'fit-content'
            },
            [theme.breakpoints.down('sm')]: {
                left: '1rem'
            }
        },
        textArea2: {
            maxWidth: '600px',
            transform: 'translateY(0px)',
            opacity: '1.27166',
            color: 'rgb(238, 238, 238)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            marginTop: '-25px',
            position: 'absolute', width: '100%', height: '100%', left: '6rem', top: '84px',

            [theme.breakpoints.down('md')]: {
                top: '150px',
                left: '3rem',
                width: 'fit-content'
            },
            [theme.breakpoints.down('sm')]: {
                left: '1rem'
            }
        },
        textArea3: {
            maxWidth: '600px',
            transform: 'translateY(0px)',
            opacity: '1.27166',
            color: 'rgb(238, 238, 238)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            marginTop: '-25px',
            position: 'absolute', width: '100%', height: '100%', left: '6rem', top: '204px',

            [theme.breakpoints.down('md')]: {
                left: '3rem',
                width: 'fit-content'
            },
            [theme.breakpoints.down('sm')]: {
                left: '1rem'
            }
        },
        textArea4: {
            maxWidth: '600px',
            transform: 'translateY(0px)',
            opacity: '1.27166',
            color: 'rgb(238, 238, 238)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            marginTop: '-25px',
            position: 'absolute', width: '100%', height: '100%', left: '6rem', top: '204px',

            [theme.breakpoints.down('md')]: {
                left: '3rem',
                width: 'fit-content'
            },
            [theme.breakpoints.down('sm')]: {
                left: '1rem',
                
            }
        },
        textArea5: {
            color: 'rgb(238, 238, 238)',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            marginTop: '-25px',
            position: 'absolute', width: '100%', height: '100%', top: '254px', maxWidth: '100%', textAlign: 'center',

            [theme.breakpoints.down('sm')]: {
                top: '200px',
                width: 'fit-content'
            }
        },
        textAreaH2: {
            color: '#fff',
            fontWeight: '700',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            fontSize: '4rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '0px',

            [theme.breakpoints.down('md')]: {
                fontSize: '2.3rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            }
        },
        textAreaH2Animate: {
            color: '#fff',
            fontWeight: '700',
            textShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1px',
            fontSize: '4rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '0px',

            // for animation
            opacity: 0,
            animationDuration: '1s',
            animationFillMode: 'both',
            animationDelay: '0.4s',

            [theme.breakpoints.down('md')]: {
                fontSize: '2.3rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            }
        },
        textAreaP: {
            marginTop: '30px',
            marginBottom: '20px',
            fontSize: '1.5rem',
            // fontWeight: '700'

            [theme.breakpoints.down('md')]: {
                fontSize: '1.25rem',
            },
        },
        textAreaPAnimate: {
            marginTop: '30px',
            marginBottom: '20px',
            fontSize: '1.5rem',
            // fontWeight: '700'

            // for animation
            opacity: 0,
            animationDuration: '1s',
            animationFillMode: 'both',
            animationDelay: '0.4s',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.25rem',
            },
        },
        slideButtonAnimate: {
            // for animation
            opacity: 0,
            animationDuration: '1s',
            animationFillMode: 'both',
            animationDelay: '0.4s',
        },
        slideButton: {
            
        },
        textAreaPBtn: {
            margin: '0 0',
            color: 'rgb(255, 255, 255) !important',
            background: 'rgb(66, 36, 99)',
            padding: '7px 25px 10px',
            borderRadius: '25px',
            fontVariant: 'all-small-caps',
            fontSize: '1.375rem',
            fontWeight: '300',
            textDecoration: 'none',

            "&:hover": {
                backgroundColor: 'rgb(255, 255, 255)',
                border: '2px solid rgb(66, 36, 99)',
                color: 'rgb(66, 36, 99) !important',
            }
        }
    }
})


const useContentSections = makeStyles((theme: Theme)=>{
    return {
        inner: {
            padding: '60px 0 100px 0',
            position: 'relative',
            margin: '0 auto',
        },
        inner2: {
            paddingRight: '15px',
            paddingLeft: '15px',
            position: 'relative',
            top: 0,
            padding: 0,

            margin: '0 auto',
            background: 'none !important',
            maxWidth: '1170px',
        },
        rowHalf: {
            marginBottom: '15px',
            width: '50%',
            float: 'left',
        },
        linkButton:{
            fontFamily: 'serif',
            background: '#ba5c04',
            color:' #fff !important',
            padding: '7px 35px',
            borderRadius: '25px',
            margin: '0 15px 0 15px',
            textDecoration: 'none',
            fontSize: '1rem'
        },
        lostNumber: {
            fontFamily: 'serif',
            marginTop: '40px',
            padding: '0 0 0 15px',
            background: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            color: '#444',
            fontWeight: '500',
            textAlign: 'left',
        },
        lostNumberSecond: {
            fontFamily: 'serif',
            padding: '0 0 0 15px',
            background: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            color: '#444',
            fontWeight: '500',
            textAlign: 'left',
        },
        firstContentH3: {
            display: 'flex',
            justifyContent: 'center',
            background: '#eee',
            color: '#444',
            fontSize: '1.5rem',
            fontWeight: '700',
            lineHeight: '1.5',
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',
        },

        rowHalfLast: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '15px',
            width: '50%',
            float: 'left',

            "&::after": {
                display: 'block',
                clear: 'both',
                content: "''",
            }
        },
        rowHalfLastLink: {
            padding: '0 15px',
            color: '#1a0039 !important',
            textDecoration: 'none !important',
            backgroundColor: 'transparent',
        },
        rowHalfLastImg: {
            width: '90px',
            border: 'none',
            maxWidth: '100%',
            verticalAlign: 'middle',
        },


        firstContentResponsive: {
            background: 'none !important',
            width: '100% !important',
            margin: '0 auto',
            textAlign: 'center',
        },
        halfSmall: {
            marginBottom: '40px',
            display: 'flex',
            flexFlow: 'column',
            width: '100%',
            float: 'none',
        },
        linkButtonSmall:{
            fontFamily: 'serif',
            background: '#ba5c04',
            color:' #fff !important',
            padding: '7px 35px',
            borderRadius: '25px',
            margin: '0 15px 0 15px',
            textDecoration: 'none',
            fontSize: '1rem'
        },
        lostNumberSmall: {
            fontFamily: 'serif',
            marginTop: '40px',
            padding: '0 0 0 15px',
            background: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            color: '#444',
            fontWeight: '500',
        },
        lostNumberSecondSmall: {
            fontFamily: 'serif',
            padding: '0 0 0 15px',
            background: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            color: '#444',
            fontWeight: '500',
        },
        firstContentH3Small: {
            display: 'flex',
            justifyContent: 'center',
            background: '#eee',
            fontSize: '25px',
            color: '#444',
            fontWeight: 600,
            lineHeight: '1.5',
            margin: '0 0 40px',
            fontFamily: 'Raleway, sans-serif',
        },
        rowHalfLastSmall: {
            marginBottom: '40px',
            display: 'flex',
            flexFlow: 'column',
        }
    }
})


const useContentSections2 = makeStyles((theme: Theme)=>{
    return {
        secondContent1: {
            position: 'relative',
            maxWidth: '1170px',
            textAlign: 'center',
            width: '100%',
            padding: '0 15px',
            margin: '0 auto',
        },
        sectionTitleHolder: {
            display: 'flex',
            justifyContent: 'space-around',
            boxShadow: 'none',
            
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },
        },
        sectionTitleHolderSmall: {
            display: 'none',
            justifyContent: 'space-around',
            boxShadow: 'none',
            
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column'
            },
        },
        sectionTitle: {
            color: '#fff',
            fontSize: '2.5rem',
            textAlign: 'center',
            fontWeight: '700',
            lineHeight: '1.5',
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',

            "&::after": {
                display: 'block',
                clear: 'both',
                content: "''",
            }
        },
        sectionTitleLink: {
            display: 'block',
            fontFamily: 'serif',
            cursor: 'pointer',
            background: 'white',
            border: '2px solid #fff',
            borderRadius: '25px',
            height: '100%',
            marginTop: '10px',
            color: '#422662 !important',
            fontSize: '1.3rem',
            textDecoration: 'none',
            fontWeight: 500,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            padding: '0.675rem 0.85rem',
            transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',

            "&:hover": {
                background: '#422662 !important',
                color: '#fff  !important',
            },

            [theme.breakpoints.down('sm')]: {
                marginBottom: '1rem',
                display: 'none'

                
            },
        },
        sectionTitleLinkSmall: {
            display: 'none',
            fontFamily: 'serif',
            cursor: 'pointer',
            background: 'white',
            border: '2px solid #fff',
            borderRadius: '25px',
            height: '100%',
            marginTop: '10px',
            color: '#422662 !important',
            fontSize: '1.3rem',
            textDecoration: 'none',
            fontWeight: 500,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            padding: '0.675rem 0.85rem',
            transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',

            "&:hover": {
                background: '#422662 !important',
                color: '#fff  !important',
            },

            [theme.breakpoints.down('sm')]: {
                marginBottom: '1rem',
                display: 'block',
            },
        },

        secondSecCard: {
            display: 'flex',
            background: '#fff',
            margin: '0.8rem 0.4rem'
        },
        secondSecCardImg: {
            width: '50%',
            backgroundSize: 'cover',
        },
        secondSecText: {
            width: '60%',
            textAlign: 'center',
            padding: '1rem 2rem'
        },
        secondSecText1: {
            fontSize: '1.1rem',
            fontFamily: 'serif',
            fontWeight: '700',
            color: '#5c2c7f',
            lineHeight: '1.5',
            marginBottom: '5px'
        },
        secondSecText2: {
            fontSize: '0.9rem',
            fontFamily: 'serif',
            fontWeight: '500',
            color: '#5c2c7f',
            lineHeight: '1.5',
        },
        secondSecText3: {
            fontFamily: 'Raleway, sans-serif',
            fontSize: '2.3rem',
            fontWeight: '700',
            color: '#5c2c7f',
            lineHeight: 1.5,
            margin: '0 0 5px',
        },
        secondSecText4: {
            fontSize: '1rem',
            fontWeight: '700',
        },
        secondContentLastText: {
            color: '#fff',
            fontFamily: 'serif',
            fontSize:'1rem',
        }
    }
})


const useContentSections3 = makeStyles((theme: Theme)=>{
    return {
        thirdInner: {
            margin: '0 50px',

            [theme.breakpoints.down('sm')]: {
                margin: '0 30px',
            },
        },
        sectionTitle: {
            color: '#444',
            fontSize: '2.5rem',
            textAlign: 'center',
            fontWeight: '700',
            lineHeight: '1.5',
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',

            "&::after": {
                display: 'block',
                clear: 'both',
                content: "''",
            }
        },
        sectionCard: {
            height: '100%',
            background: '#ebedee',
            color: '#3d2b53',
            textAlign: 'center',
            // padding: '0.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        sectionCardIcon: {
            color: '#3d2b53',
            fontSize: '2.75em',
            lineHeight: '2.75em',
            width: '2.75em',
            background: 'white',
            margin: '20px 0',
            borderRadius: '100%',
            top: '1px',
        },
        setion4H3: {
            fontSize: '1.3rem',
            color: '#3d2b53',
            fontWeight: 700,
            lineHeight: '1.5',
            margin: '0 0 30px',
            letterSpacing: '1px',
            fontFamily: 'Raleway, sans-serif',
        },
        sectionBackCard: {
            height: '100%',
            backgroundColor: '#3d2b53',
            color: '#fff',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        setionBack4H3: {
            fontSize: '1.5rem',
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: '1.5',
            margin: '0 0 10px',
            letterSpacing: '1px',
            fontFamily: 'Raleway, sans-serif',
        },
        setionBack4P: {
            fontSize: '1.1rem',
            color: '#ffffff',
            fontWeight: 500,
            lineHeight: '1.5',
            margin: '0 0 10px',
            fontFamily: 'serif',
        },
        sectionCardLink: {
            fontFamily: 'serif',
            cursor: 'pointer',
            background: 'white',
            border: '2px solid #fff',
            borderRadius: '25px',
            marginTop: '10px',
            color: '#422662 !important',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'block',
            fontWeight: 500,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            padding: '0.475rem 0.65rem',
            transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
            textTransform: 'uppercase',
            "&:hover": {
                background: '#422662 !important',
                color: '#fff  !important',
            },
        }
    }
})


const useContentSections4 = makeStyles((theme: Theme)=>{
    return {
        sectionTitle: {
            color: '#ffffff',
            fontSize: '2.5rem',
            textAlign: 'center',
            fontWeight: '700',
            lineHeight: '1.5',
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',

            "&::after": {
                display: 'block',
                clear: 'both',
                content: "''",
            }
        },
        firstFifthCon: {
            margin: 0, 
            position: 'relative',
            overflow: 'hidden !important',
            background: '0 0 !important',
            padding: 0,
        },
        firstFifthConInner: {
            position: 'relative',
            background: '#fff',
            display: 'flex',
            marginRight: '-15px',
            marginLeft: '-15px',
            overflow: 'hidden !important',
        },
        container: {
            

            [theme.breakpoints.down('md')]: {
                flexFlow: 'column-reverse !important'
            },
        },
        img: {
            width: 'default',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        imgHalf: {
            position: 'relative',
            background: 'url(imgs/team.jpg) 0% 0% / 100% rgb(0, 0, 0)',
            padding: '100px 60px !important',
            backgroundSize: 'cover !important',
            backgroundRepeat: 'no-repeat',
            height: 'unset !important',

            [theme.breakpoints.down('md')]: {
                padding: '150px 90px !important',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '120px 60px !important',
            },
        },
        imgHalf2: {
            position: 'relative',
            background: 'url(imgs/calculator2.jpg) 0% 0% / 100% rgb(0, 0, 0)',
            padding: '100px 60px !important',
            backgroundSize: 'cover !important',
            backgroundRepeat: 'no-repeat',
            height: 'unset !important',

            [theme.breakpoints.down('md')]: {
                padding: '150px 90px !important',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '120px 60px !important',
            },
        },
        textHalf: {
            position: 'relative',
            width: '100%',
            minHeight: '1px',
            backgroundColor: 'rgb(249, 249, 249)',
            height: 'unset !important',
            padding: '100px 60px !important',
            transition: 'all 0.35s ease-in-out',
            zIndex: 200,

            
            "&:hover": {
                transition: 'all 0.35s ease-in-out',
                transform: 'scale(1.05)',
            },

            [theme.breakpoints.down('md')]: {
                minHeight: 'fit-content',
                padding: '50px 30px !important',
            },
        },
        text: {
            fontSize: '1rem !important',
            lineHeight: '2.75 !important',
            color: '#333',
            paddingBottom: '28px',
            margin: 0,
            [theme.breakpoints.down('md')]: {
                paddingTop: '28px !important',
            },
        },
        button: {
            fontSize: '1.5rem',
            cursor: 'pointer',
            border: 0,
            background: '#422861',
            padding: '4px 18px 8px 18px',
            fontVariant: 'all-small-caps',
            color: 'white',
            textTransform: 'uppercase',
            fontFamily: 'Raleway',

            "&:hover": {
                background: '#ba5c04',
            }
        }, 
        textHolder: {
            marginTop: 0,
            padding: '0 40px 0 40px',
            position: 'relative',

            [theme.breakpoints.down('sm')]: {
                padding: '0 10px 0 10px',
            },
        },
        iconSection: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            paddingTop: '0px',
            paddingBottom: '0px',
            marginTop: '-81.5px',
            color: '#EEE',
            height: 'auto !important',
            left: 0,
            maxWidth: 'none !important',
            zIndex: 2,
        },
        iconSectionInner: {
            textShadow: '1px 1px 1px rgba(0,0,0,.1)',
            marginBottom: '50px',
            textAlign: 'center',
        },
        iconSectionInnerH2: {
            fontSize: '3.3rem',
            color: '#FFF',
            marginBottom: 0,
            fontWeight: 800,

            "&::after": {
                content: "''",
                textShadow: '1px 1px 1px rgba(0,0,0,.1)',
                borderTopColor: 'rgba(255, 255, 255, .4)',
                margin: '30px auto 0',
                display: 'block',
                width: '40px',
                borderTop: '2px solid #444',
            },
        },
        iconSectionInnerSpan: {
            "&:hover": {
                transition: 'all .35s ease-in-out',
                transform: 'scale(1.05)',
            }
        },
        enterSearch: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: 0,
        }, 
        diffH3: {
            fontSize: '1.5rem',
            color: '#422861',
            letterSpacing: '2px',
            fontWeight: 700,
            marginBottom: '0.5rem',
        },
        diffP: {
            color: '#422861',
            fontSize: '0.8rem',
            lineHeight: '1.5 !important',
            fontWeight: 500,
        },
        
    }
})




/*
=============================================================== 
//* Styled Components
===============================================================
*/
const Hero = styled('section')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100vh',
    visibility: 'visible',
    overflow: 'hidden',
    display: 'block',      

    [theme.breakpoints.down('md')]: {
        height: '480px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '537px',
    },
}));


const HeroInner = styled('section')(({ theme }) => ({
    height: 'auto',
    transform: 'translateY(0px)',
    position: 'fixed',
    top: 0,
    left: 0
,        width: '100%',
    visibility: 'visible',

    [theme.breakpoints.down('md')]: {
        position: 'static',
    },

}));


const FirstContent = styled('section')(({ theme }) => ({
    margin: 0,
    background: 'linear-gradient(90deg, white 50%, #eee 50%)',
    position: 'relative',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
const FirstContentResponsive = styled('section')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        margin: '0',
        backgroundColor: '#fff'
    },
}));
const FirstContentResponsiveInner = styled('section')(({ theme }) => ({
    padding: '50px 15px',
    position: 'relative',
    margin: '0 auto',
}));
const SecondContent = styled('section')(({ theme }) => ({
    backgroundImage: 'url(/imgs/backgrond.png)',
    backgroundSize: '120% 120%',
    padding: '80px 0px',
    borderBottom: 'none',
    backgroundColor: 'transparent',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '10',
    transition: 'all 0.17s linear !important',
    
    [theme.breakpoints.down('lg')]: {
        backgroundPositionY: 'center !important',
        backgroundSize: 'cover',
    },
}));

const ThirdContent = styled('section')(({ theme }) => ({
    padding: '50px 0',
    background: '#fff',
    color: '#000',
    position: 'relative',
    overflow: 'hidden',
}));
const FouthContent = styled('section')(({ theme }) => ({
    backgroundImage: 'url(/imgs/background2.jpg)',
    backgroundSize: '120% 120%',
    padding: '80px 0px',
    borderBottom: 'none',
    backgroundColor: '#120523',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '10',
    transition: 'all 0.17s linear !important',
    
    [theme.breakpoints.down('lg')]: {
        backgroundPositionY: 'center !important',
        backgroundSize: 'cover',
    },
}));
const FifthContent = styled('section')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    background: '#fff',
}));

const SithContent = styled('section')(({ theme }) => ({
    background: '#eaeaea',
    padding: '20px 0 !important',
    position: 'relative',
    textAlign: 'center',
    marginTop: '-50px !important',
    zIndex: '20'
}));
const SeventhContent = styled('section')(({ theme }) => ({
    background: '#422861',
    padding: '20px 0 !important',
    position: 'relative',
    marginTop: '-50px !important',
}));

export {useStyles, useContentSections, useContentSections2, useContentSections3, useContentSections4, Hero, HeroInner, FirstContent, FirstContentResponsive, FirstContentResponsiveInner, SecondContent, ThirdContent, FouthContent, FifthContent, SithContent, SeventhContent}