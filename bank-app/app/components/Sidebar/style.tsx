import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { styled } from '@mui/system';



const useStyles = makeStyles((theme: Theme)=>{
    return {
        imgHolder: {
            padding: '40px 20px 20px',
        },
        ul: {
            padding: '20px 0',
            listStyle: 'none'
        },
        li: {
            marginBottom: '32px',
            listStyleType: 'none',
        },
        link: {
            color: '#d1a23c',
            opacity: 1,
            borderRadius: '15px 0 0 15px',
            backgroundColor: '#d1a23c',
            fontSize: '14px',
            letterSpacing: '.35px',
            padding: '8px 20px',
            fontWeight: 900,
            borderLeft: '4px solid transparent',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',
            textDecoration: 'none',
        },
        linkWidthAfter: {
            color: '#d1a23c',
            opacity: 1,
            borderRadius: '15px 0 0 15px',
            // backgroundColor: '#d1a23c',
            fontSize: '14px',
            letterSpacing: '.35px',
            padding: '8px 20px',
            fontWeight: 900,
            borderLeft: '4px solid transparent',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',
            textDecoration: 'none',

            "&:after": {
                right: '0 !important',
                content: "''",
                width: '12px',
                height: '7.42px',
                maskImage: 'url(/imgs/nav-icons/sue.svg)',
                display: 'block',
                marginLeft: 'auto',
                transform: 'rotate(180deg)',
                transition: 'all .5s ease',
                background: '#111',
                opacity: 1,
                color: '#111',
                position: 'relative',
            }
        },
        linkWidthAfterActive: {
            color: '#d1a23c',
            opacity: 1,
            borderRadius: '15px 0 0 15px',
            // backgroundColor: '#d1a23c',
            fontSize: '14px',
            letterSpacing: '.35px',
            padding: '8px 20px',
            fontWeight: 900,
            borderLeft: '4px solid transparent',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',
            textDecoration: 'none',

            "&:after": {
                right: '0 !important',
                content: "''",
                width: '12px',
                height: '7.42px',
                maskImage: 'url(/imgs/nav-icons/sue.svg)',
                display: 'block',
                marginLeft: 'auto',
                transform: 'rotate(0deg)',
                transition: 'all .5s ease',
                background: '#111',
                opacity: 1,
                color: '#111',
                position: 'relative',
            }
        },
        linkWidthNoAfter: {
            color: '#d1a23c',
            opacity: 1,
            borderRadius: '15px 0 0 15px',
            // backgroundColor: '#d1a23c',
            fontSize: '14px',
            letterSpacing: '.35px',
            padding: '8px 20px',
            fontWeight: 900,
            borderLeft: '4px solid transparent',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',
            textDecoration: 'none',
        },

        linkSpanText: {
            color: '#fff !important',
            paddingTop: '0 !important',
            margin: 'auto auto auto 13px',
            display: 'inline-block',
        },
        linkSpanTextUnActive: {
            color: '#000 !important',
            paddingTop: '0 !important',
            margin: 'auto auto auto 13px',
            display: 'inline-block',
        },
        linkSpanImg: {
            backgroundColor: '#fff',
            opacity: 1,
            mask: 'url(/imgs/nav-icons/home.svg) no-repeat center left',
            width: '18px',
            height: '18px',
            display: 'inline-block',
            transition: 'all .5s',
        },
        linkSpanImgUnActive: {
            backgroundColor: '#000',
            opacity: 1,
            width: '18px',
            height: '18px',
            display: 'inline-block',
            transition: 'all .5s',
        },

        dropdownMenu: {
            display: 'none'
        },
        dropdownMenuShow: {
            position: 'relative',
            padding: 'unset !important',
            float: 'unset',
            transform: 'unset !important',
            top: 'unset !important',
            left: 'unset !important',
            willChange: 'unset !important',
            backgroundColor: 'unset !important',
            border: 'none !important',

            zIndex: '1000',
            display: 'block',
            minWidth: '10rem',
            margin: '0.125rem 0 0',
            fontSize: '1rem',
            color: '#212529',
            textAlign: 'left',
            listStyle: 'none',
            backgroundClip: 'padding-box',
            borderRadius: '0.25rem',
        },

        dropdownMenuActive: {
            position: 'relative',
            padding: 'unset !important',
            float: 'unset',
            transform: 'unset !important',
            top: 'unset !important',
            left: 'unset !important',
            willChange: 'unset !important',
            backgroundColor: 'unset !important',
            border: 'none !important',

            zIndex: '1000',
            display: 'none',
            minWidth: '10rem',
            margin: '0.125rem 0 0',
            fontSize: '1rem',
            color: '#212529',
            textAlign: 'left',
            listStyle: 'none',
            backgroundClip: 'padding-box',
            borderRadius: '0.25rem',
        },

        dropdownItem: {
            color: '#000 !important',
            padding: '15px 20px 10px 55px !important',
            borderLeft: '4px solid transparent',

            fontSize: '14px',
            letterSpacing: '.35px',
            fontWeight: 900,
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',

            width: '100%',
            clear: 'both',
            textAlign: 'inherit',
            whiteSpace: 'nowrap',
            backgroundColor: 'initial',
            border: 0,
            textDecoration: 'none',
        },
        dropdownItemActive: {
            color: '#d1a23c !important',
            padding: '15px 20px 10px 55px !important',
            borderLeft: '4px solid transparent',

            fontSize: '14px',
            letterSpacing: '.35px',
            fontWeight: 900,
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 1.2s',
            marginBottom: 0,
            marginLeft: '16px',

            width: '100%',
            clear: 'both',
            textAlign: 'inherit',
            whiteSpace: 'nowrap',
            backgroundColor: 'initial',
            border: 0,
            textDecoration: 'none',
        }
    }
});

//Styled components
const NavigationInner = styled('div')(({ theme }) => ({
    maxHeight: 'none',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    maxWidth: '100%',
    outline: 'none',
    direction: 'ltr'
}));
const NavigationInner2 = styled('div')(({ theme }) => ({
    position: 'relative',
    top: 0,
    left: 0,
    overflow: 'hidden',
    overflowY: 'auto',
    width: 'auto',
    height: 'auto',
}));

export { NavigationInner, NavigationInner2, useStyles};