import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";



const useStyles = makeStyles((theme: Theme)=>{
    return {
        row: {
            display: 'flex',
            justifyContent: 'space-between !important',
        },
        switchAccount: {
            display: 'flex',
            alignItems: 'center',
            jutifyContent: 'center'
        }
    }
});

export default useStyles;