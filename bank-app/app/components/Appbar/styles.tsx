import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";



const useStyles = makeStyles((theme: Theme)=>{
    return {
        nav: {
            position: 'relative',
            padding: '15px 10px',
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            flexFlow: 'row nowrap',
            justifyContent: 'flex-start',
            display: 'flex',
            alignItems: 'center',
        },
        navInner: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
    }
});

export default useStyles;