import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';


const useStyles = makeStyles((theme: Theme)=>{
    return {
        main: {
            backgroundColor: '#c74242',
            border: '1px solid #c74242',
            color: "#fff",
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            padding: '5px 15px',
            whiteSpace: 'pre-line',
            minHeight: '50px',
            borderRadius: '5px'
        }
    }
});

// APP POPUPS ARE POSITIONED IN Transaction history PAGE
interface Props{};
const SomethingWrongPopup: React.FC<Props> = ({}) => {
  const classes = useStyles()

  return (
    <>
        <div id='somethingwrong' className='somethingwrongNone'>
            <div className={classes.main}>
                <p>Something went wrong, please try again</p>
            </div>
        </div>

        <div id='somethingwrong2' className='somethingwrongNone'>
            <div className={classes.main}>
                <p>Something went wrong, please try again</p>
            </div>
        </div>

        <div id='somethingwrong3' className='somethingwrongNone'>
            <div className={classes.main}>
                <p>Something went wrong, please try again</p>
            </div>
        </div>

        <div id='somethingwrong4' className='somethingwrongNone'>
            <div className={classes.main} style={{background: '#04b304', border: '1px solid #04b304',}}>
                <p>Operation successful</p>
            </div>
        </div>

        <div id='somethingwrong5' className='somethingwrongNone'>
            <div className={classes.main}>
                <p>Operation failed</p>
            </div>
        </div>
    </>
  )
};
export default SomethingWrongPopup;
