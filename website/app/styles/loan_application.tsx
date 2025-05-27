import { makeStyles } from "@mui/styles";
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
        paragrapha: {
            lineHeight: 1.5,
            color: '#b55e0c',
            fontSize: '0.978rem',
            fontStyle: 'normal'
        },




        

// Personal
        main: {
            maxWidth: '1080px',
            width: '100%',
            margin: '0 auto',
            padding: '20px',
            fontSize: '14px',
            lineHeight: 1.3,
        },
        form: {
            padding: '20px',
        },
        header: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',

            [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
                flexDirection: 'column'
            },
        },
        headerHalf: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',

            [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
                marginBottom: '0.5rem'
            },
        },
        logoLink: {
            display: 'inline-block',
            color: '#337ab7',
            textDecoration: 'none',
            backgroundColor: 'transparent',
        },
        logo: {
            width: '170px',
            height: 'auto',
            verticalAlign: 'middle',
            border: 0,
        },
        formHeaderAddress: {
            margin: '0 0',
            padding: '0 0 0 20px',
            fontSize: '13px',
            lineHeight: 1.2,
            fontStyle: 'normal',
        },
        formHeaderH1: {
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: 1.2,
            margin: '0 0',
            color: '#082F47',
        },
        formBody: {
            borderTop: '2px solid #082F47',
            marginTop: '20px',
            paddingTop: '20px',
        },
        fieldset: {
            position: 'relative',
            margin: '20px 0 40px',
            padding: '30px 20px 20px',
            border: '1px dashed #082F47',
            borderRadius: '10px',
            minWidth: '0',
        },
        fieldsetDisable: {
            margin: '20px 0 40px',
            padding: '30px 20px 20px',
            border: '1px dashed #082F47',
            borderRadius: '10px',
            minWidth: '0',

            height: '118px',
            overflow: 'hidden',
            opacity: '0.5',
            position: 'relative',
            paddingTop: '20px',
            pointerEvents: 'none',
            cursor: 'not-allowed !important'
        },
        fieldsetTitle: {
            border: 'none',
            margin: '0 0',
            display: 'inline-block',
            width: 'auto',
            position: 'absolute',
            background: '#FFF',
            padding: '0 8px',
            left: '15px',
            top: '-13px',
            zIndex: 2,
            fontSize: '17px',
            fontWeight: 'bold',
            color: '#5c2e7d',
        },
        ol: {
            marginTop: 0,
            marginBottom: '10px',
            lineHeight: 1.5,
            color: '#333',
            fontSize: '0.778rem',
            fontStyle: 'normal',
            padding: '0px 0px 0px 40px'
        },
        val: {
            display: 'block',
            width: '100%',
            position: 'relative',
        },
        val2: {
            display: 'block',
            width: '100%',
            position: 'relative',
            "&::before": {
                content: '"$"',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: 'calc(100% - 2px)',
                background: '#CCC',
                position: 'absolute',
                top: '1px',
                left: '1px',
                zIndex: 2,
                textAlign: 'center',
                fontFamily: 'inherit'
            },
        },
        
        inputStyle1: {
            height: '30px',
            padding: '6px',
            display: 'block',
            width: '100%',
            fontSize: '14px',
            fontFamily: 'inherit',
            fontWeight: '500',
            lineHeight: '1.42857143',
            color: '#555',
            backgroundColor: '#fff',
            backgroundImage: 'none',
            border: '1px solid #ccc',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
            transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',

            "&:focus": {
                outline: 'none',
                boxShadow: '0 0 3px 1px rgba(0, 136, 255, 0.5)',
            }
        },

        strong: {
            lineHeight: 1.8,
            color: '#333',
            fontFamily: 'Raleway',
            fontSize: '0.838rem',
            fontStyle: 'normal'
        },
        paragraph: {
            lineHeight: 2.3,
            color: '#333',
            fontSize: '0.778rem',
            fontWeight: '500',
            fontStyle: 'normal'
        },

        radio: {
            display: 'inline-block',
            position: 'relative',
            top: '1px',
            paddingLeft: '8px',
        },
        radioLabel: {
            marginRight: '18px',
            display: 'inline-block',
            margin: '0 0',
            position: 'relative',
        },
        radioLabelSpan: {
            paddingLeft: '20px',
            position: 'relative',
            color: '#333',
            fontFamily: 'Raleway',
            fontSize: '0.878rem',
            lineHeight: 1.1,
            marginBlock: '2px',
            maxWidth: '100%',
            fontWeight: 700,
        },
        fieldsetH3: {
            marginTop: 0,
            margin: '25px 0 0',
            color: '#9D70BB',
            fontSize: '1.15rem', fontWeight: '500',
            lineHeight: 1.1,
            width: '100%',
            position: 'relative',
            left: '3px',
        },
        flexRowInputHolder: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
        },
        field: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginLeft: '-8px',
            marginRight: '-8px',
        },
        fieldResponsive: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginLeft: '-8px',
            marginRight: '-8px',

            [theme.breakpoints.down('md')]: {
                display: 'none'
            },

        },
        fieldResponsive2: {
            display: 'none',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginLeft: '-8px',
            marginRight: '-8px',
            
            [theme.breakpoints.down('md')]: {
                display: 'flex',
            },

        },
        fxhead: {
            display: 'flex',
            alignItems: 'center !important',
            justifyContent: 'space-between !important',
        },
        fxbody: { },
        fxheadInner: {
            padding: '5px 5px !important',
            background: '#ececec',
            fontSize: '13px',
            fontWeight: 'bold',
        },
        fxbodyRow: {
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'space-between !important',
        },
        inline: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
        },
        inlineFormInput: {
            border: '1px dotted #dcdbdb',
            padding: '10px',
            position: 'relative',
            justifyContent: 'space-between',

            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
        },
        quetions: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0,
            padding: '5px 0',
            borderBottom: '1px dotted #CCC',
        },
        reference: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 -5px 28px',
            paddingTop: '18px',
            position: 'relative',
        },
        referenceText: {
            display: 'block',
            fontSize: '14px',
            fontWeight: 'normal',
            textTransform: 'uppercase',
        },
        checkLabel: {
            display: 'inline-block',
            margin: '0 0',
            position: 'relative',
            paddingRight: '18px',
            fontSize: '13px',
            lineHeight: 1.1,
            marginBlock: '2px',
            maxWidth: '100%',
            fontWeight: 700,
            marginBottom: '5px'
        },
        checkInput: {
            position: 'absolute',
            top: '-4px',
            left: '1px',
            zIndex: 5,
            visibility: 'hidden',
            margin: '4px 0 0',
            lineHeight: 'normal',
            boxSizing: 'border-box',
            padding: 0,
        },
        checkSpan: {
            position: 'relative',
            paddingLeft: '20px',
        },
        inputStyle1TextArea: {
            maxWidth: '100%',
            height: '100px',
            padding: '6px',
            display: 'block',
            width: '100%',
            fontSize: '14px',
            fontFamily: 'inherit',
            fontWeight: '500',
            lineHeight: '1.2',
            color: '#555',
            backgroundColor: '#fff',
            backgroundImage: 'none',
            border: '1px solid #ccc',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
            transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',

            "&:focus": {
                outline: 'none',
                boxShadow: '0 0 3px 1px rgba(0, 136, 255, 0.5)',
            }
        },
        submitButton: {
            padding: '10px 30px',
            display: 'block',
            width: '100%',
            textAlign: 'center',
            background: '#5c2e7d',
            color: '#FFF',
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            cursor: 'pointer',
            marginBottom: 0,
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            touchAction: 'manipulation',
            userSelect: 'none',
            border: '1px solid transparent',
            borderRadius: '4px',

            "&:hover": {
                background: '#da823d'
            }
        },
        disableSubmitBtn: {
            padding: '10px 30px',
            display: 'block',
            width: '100%',
            textAlign: 'center',
            background: '#5c2e7d',
            color: '#FFF',
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            marginBottom: 0,
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            touchAction: 'manipulation',
            userSelect: 'none',
            border: '1px solid transparent',
            borderRadius: '4px',

            opacity: '0.5',
            cursor: 'not-allowed !important'
        },
        gridItemPadding: {
            padding: '8px',
            [theme.breakpoints.down('md')]: {
                padding: '0px',
                paddingBottom: '8px'
            },
        },
        gridItemPaddingOpp: {
            padding: '0px',
            paddingBottom: '8px',
            [theme.breakpoints.down('md')]: {
                padding: '8px',
            },
        },
        gridItemPaddingWT: {
            padding: '8px 30px',
            [theme.breakpoints.down('md')]: {
                padding: '15px 0px',
            },
        },
        labelResponsiveStyle: {
            display: 'inline-block', width: '100%', textAlign: 'right',

            [theme.breakpoints.down('md')]: {
                textAlign: 'left'
            },
        },
        gridContaineerResponsive: {
            alignItems: 'center', justifyContent:'center',

            [theme.breakpoints.down('md')]: {
                marginBottom: '5px'
            },
        }, 

        responsiveMTField: {
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginLeft: '-8px',
            marginRight: '-8px',
            [theme.breakpoints.down('md')]: {
                marginTop: '0px',
            },
        },
        secondPartLinkSpan: {
            color: 'red !important',
            fontSize: '0.9rem',
          }, 
    };
});

export default useStyles;