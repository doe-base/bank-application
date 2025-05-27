import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';


interface Props {
    classes: any;
    preferedContact: string[];
    setPreferedContact: React.Dispatch<React.SetStateAction<string[]>>;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
}

const FieldSet7: React.FC<Props> = ({ 
    classes, 
    preferedContact, 
    setPreferedContact, 
    comment, 
    setComment 
}) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isSelected = e.target.checked;
      
        if (isSelected) {
          setPreferedContact([...preferedContact, value]);
        } else {
          setPreferedContact(preferedContact.filter((item) => item !== value));
        };
    };



    return (
        <>
{/* Contact Method */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Contact Method</legend>


                <Grid container style={{alignItems: 'center', justifyContent:'left'}}>
                    <Grid item xs={12} md={3.7}>
                        <label style={{display: 'inline-block', width: '100%', textAlign: 'left', marginBottom: '10px'}}><strong className={classes.strong}>How would you prefer to be contacted?</strong></label>
                    </Grid>
                    <Grid item xs={12} md={5} style={{ display: 'inline-block', width: '100%', textAlign: 'left'}}>
                        <div className='checkbox-options' style={{display: 'inline-block', margin: '0 0 5px 0px'}}>
                            <label className={classes.checkLabel} htmlFor="contact_home_phone">
                                <input className={classes.checkInput} type="checkbox" name="contact_home_phone" id="contact_home_phone" value="Home Phone" onChange={handleChange}/>
                                <span className="checkSpan">Home Phone</span>
                            </label>
                            <label className={classes.checkLabel} htmlFor="contact_cell_phone">
                                <input className={classes.checkInput} type="checkbox" name="contact_cell_phone" id="contact_cell_phone" value="Cell Phone" onChange={handleChange}/>
                                <span className="checkSpan">Cell Phone</span>
                            </label>
                            <label className={classes.checkLabel} htmlFor="contact_email">
                                <input className={classes.checkInput} type="checkbox" name="contact_email" id="contact_email" value="Email" onChange={handleChange}/>
                                <span className="checkSpan">Email</span>
                            </label>
                        </div>
                    </Grid>
                </Grid>


                <Grid container style={{marginTop: '15px'}}>
                    <Grid item xs={12}>
                        <label htmlFor="comments"><strong className={classes.strong}>Additional Comments:</strong></label>
                        <textarea className={classes.inputStyle1TextArea} name="comments" value={comment} onChange={(e)=> setComment(e.currentTarget.value)}></textarea>
                    </Grid>
                </Grid>
            </fieldset>
        </>
    )
};
export default FieldSet7;