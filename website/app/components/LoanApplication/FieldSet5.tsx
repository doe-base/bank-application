import React from 'react';
import { Grid } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';


interface Props {
    classes: any;


    lender1: string
    setLender1:  React.Dispatch<React.SetStateAction<string>>
    lender2: string
    setLender2: React.Dispatch<React.SetStateAction<string>>
    lender3: string
    setLender3: React.Dispatch<React.SetStateAction<string>>
    lender4: string
    setLender4: React.Dispatch<React.SetStateAction<string>>
    lender5: string
    setLender5: React.Dispatch<React.SetStateAction<string>>
    lender6: string
    setLender6: React.Dispatch<React.SetStateAction<string>>
    lender7: string
    setLender7: React.Dispatch<React.SetStateAction<string>>
    lender8: string
    setLender8: React.Dispatch<React.SetStateAction<string>>
    lender1Type: string
    setLender1Type: React.Dispatch<React.SetStateAction<string>>
    lender2Type: string
    setLender2Type: React.Dispatch<React.SetStateAction<string>>
    lender3Type: string
    setLender3Type: React.Dispatch<React.SetStateAction<string>>
    lender4Type: string
    setLender4Type: React.Dispatch<React.SetStateAction<string>>
    lender5Type: string
    setLender5Type: React.Dispatch<React.SetStateAction<string>>
    lender6Type: string
    setLender6Type: React.Dispatch<React.SetStateAction<string>>
    lender7Type: string
    setLender7Type: React.Dispatch<React.SetStateAction<string>>
    lender8Type: string
    setLender8Type: React.Dispatch<React.SetStateAction<string>>

    lender1Balance: string
    setLender1Balance: React.Dispatch<React.SetStateAction<string>>
    lender2Balance: string
    setLender2Balance: React.Dispatch<React.SetStateAction<string>>
    lender3Balance: string
    setLender3Balance:  React.Dispatch<React.SetStateAction<string>>
    lender4Balance: string
    setLender4Balance: React.Dispatch<React.SetStateAction<string>>
    lender5Balance: string
    setLender5Balance: React.Dispatch<React.SetStateAction<string>>
    lender6Balance: string
    setLender6Balance: React.Dispatch<React.SetStateAction<string>>
    lender7Balance: string
    setLender7Balance: React.Dispatch<React.SetStateAction<string>>
    lender8Balance: string
    setLender8Balance: React.Dispatch<React.SetStateAction<string>>

    lender1Min: string
    setLender1Min: React.Dispatch<React.SetStateAction<string>>
    lender2Min: string
    setLender2Min: React.Dispatch<React.SetStateAction<string>>
    lender3Min: string
    setLender3Min: React.Dispatch<React.SetStateAction<string>>
    lender4Min: string
    setLender4Min: React.Dispatch<React.SetStateAction<string>>
    lender5Min: string
    setLender5Min: React.Dispatch<React.SetStateAction<string>>
    lender6Min: string
    setLender6Min: React.Dispatch<React.SetStateAction<string>>
    lender7Min: string
    setLender7Min: React.Dispatch<React.SetStateAction<string>>
    lender8Min: string
    setLender8Min: React.Dispatch<React.SetStateAction<string>>
    childSupportPayment: string

    setChildSupportPayment: React.Dispatch<React.SetStateAction<string>>
    asses1: string
    setAsses1: React.Dispatch<React.SetStateAction<string>>
    asses1value:  string
    setAsses1value: React.Dispatch<React.SetStateAction<string>>
    asses2: string
    setAsses2: React.Dispatch<React.SetStateAction<string>>
    asses2Value: string
    setAsses2Value: React.Dispatch<React.SetStateAction<string>>

    bankruptcy:  string
    setBankruptcy: React.Dispatch<React.SetStateAction<string>>
    lawsuit: string
    setLawsuit:  React.Dispatch<React.SetStateAction<string>>
    foreclosed: string
    setForeclosed:  React.Dispatch<React.SetStateAction<string>>
    decline: string
    setDecline: React.Dispatch<React.SetStateAction<string>>
    endorser: string
    setEndorser: React.Dispatch<React.SetStateAction<string>>
    whom1: string
    setWhom1: React.Dispatch<React.SetStateAction<string>>
    whom2: string 
    setWhom2: React.Dispatch<React.SetStateAction<string>>

}

const FieldSet5: React.FC<Props> = ({ 
        classes,
        lender1,
        setLender1,  
        lender2,
        setLender2, 
        lender3,
        setLender3, 
        lender4,
        setLender4, 
        lender5,
        setLender5, 
        lender6,
        setLender6, 
        lender7,
        setLender7, 
        lender8,
        setLender8, 
        lender1Type,
        setLender1Type, 
        lender2Type,
        setLender2Type, 
        lender3Type,
        setLender3Type, 
        lender4Type,
        setLender4Type, 
        lender5Type,
        setLender5Type, 
        lender6Type,
        setLender6Type, 
        lender7Type,
        setLender7Type, 
        lender8Type,
        setLender8Type, 

        lender1Balance,
        setLender1Balance, 
        lender2Balance,
        setLender2Balance, 
        lender3Balance,
        setLender3Balance,  
        lender4Balance,
        setLender4Balance, 
        lender5Balance,
        setLender5Balance, 
        lender6Balance,
        setLender6Balance, 
        lender7Balance,
        setLender7Balance, 
        lender8Balance,
        setLender8Balance, 

        lender1Min,
        setLender1Min, 
        lender2Min,
        setLender2Min, 
        lender3Min,
        setLender3Min, 
        lender4Min,
        setLender4Min, 
        lender5Min,
        setLender5Min, 
        lender6Min,
        setLender6Min, 
        lender7Min,
        setLender7Min, 
        lender8Min,
        setLender8Min, 
        
        childSupportPayment,
        setChildSupportPayment, 
        asses1,
        setAsses1, 
        asses1value,
        setAsses1value, 
        asses2,
        setAsses2, 
        asses2Value,
        setAsses2Value, 

        bankruptcy,
        setBankruptcy, 
        lawsuit,
        setLawsuit,  
        foreclosed,
        setForeclosed,  
        decline,
        setDecline, 
        endorser,
        setEndorser, 
        whom1,
        setWhom1, 
        whom2, 
        setWhom2,
    }) => {
    return (
        <>
{/* Data & Assets */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Debts & Assets</legend>


                <div className={classes.fieldResponsive}>
                    <div style={{width: '100%'}}>

                        <Grid container className={classes.fxhead}>
                            <Grid item xs={5} container className={classes.fxheadInner}>Lender</Grid>
                            <Grid item xs={3} container className={classes.fxheadInner}>Type</Grid>
                            <Grid item xs={2} container className={classes.fxheadInner}>Balance</Grid>
                            <Grid item xs={2} container className={classes.fxheadInner}>Min. Pmt.</Grid>
                        </Grid>
                        <div className={classes.fxbody}>
                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_1" 
                                            id="lender_1" 
                                            className={classes.inputStyle1}
                                            value={lender1} 
                                            onChange={(event)=> setLender1(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender1Type}
                                            onChange={(event)=> setLender1Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender1Balance}
                                            onChange={(event)=> setLender1Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender1Min}
                                            onChange={(event)=> setLender1Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_2" 
                                            id="lender_2" 
                                            className={classes.inputStyle1}
                                            value={lender2} 
                                            onChange={(event)=> setLender2(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender2Type}
                                            onChange={(event)=> setLender2Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender2Balance}
                                            onChange={(event)=> setLender2Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender2Min}
                                            onChange={(event)=> setLender2Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_3" 
                                            id="lender_3" 
                                            className={classes.inputStyle1}
                                            value={lender3} 
                                            onChange={(event)=> setLender3(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender3Type}
                                            onChange={(event)=> setLender3Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender3Balance}
                                            onChange={(event)=> setLender3Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender3Min}
                                            onChange={(event)=> setLender3Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_4" 
                                            id="lender_4" 
                                            className={classes.inputStyle1}
                                            value={lender4} 
                                            onChange={(event)=> setLender4(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender4Type}
                                            onChange={(event)=> setLender4Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender4Balance}
                                            onChange={(event)=> setLender4Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender4Min}
                                            onChange={(event)=> setLender4Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_5" 
                                            id="lender_5" 
                                            className={classes.inputStyle1}
                                            value={lender5} 
                                            onChange={(event)=> setLender5(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender5Type}
                                            onChange={(event)=> setLender5Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender5Balance}
                                            onChange={(event)=> setLender5Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1}
                                            value={lender5Min}
                                            onChange={(event)=> setLender5Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_6" 
                                            id="lender_6" 
                                            className={classes.inputStyle1}
                                            value={lender6} 
                                            onChange={(event)=> setLender6(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender6Type}
                                            onChange={(event)=> setLender6Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender6Balance}
                                            onChange={(event)=> setLender6Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender6Min}
                                            onChange={(event)=> setLender6Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_7" 
                                            id="lender_7" 
                                            className={classes.inputStyle1}
                                            value={lender7} 
                                            onChange={(event)=> setLender7(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender7Type}
                                            onChange={(event)=> setLender7Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender7Balance}
                                            onChange={(event)=> setLender7Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender7Min}
                                            onChange={(event)=> setLender7Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.fxbodyRow}>
                                <Grid item xs={5} style={{padding: '3px 5px 3px 0px'}}>
                                    <span className={classes.val}>
                                        <input 
                                            type="text" 
                                            name="lender_8" 
                                            id="lender_8" 
                                            className={classes.inputStyle1}
                                            value={lender8} 
                                            onChange={(event)=> setLender8(event.currentTarget.value)} 
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={3} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val}>
                                        <select 
                                            className={classes.inputStyle1} 
                                            value={lender8Type}
                                            onChange={(event)=> setLender8Type(event.currentTarget.value)}
                                        >
                                            <option defaultValue=''>Select...</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Credit Line">Credit Line</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Mortgage">Mortgage</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 5px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender8Balance}
                                            onChange={(event)=> setLender8Balance(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={2} style={{padding: '3px 0px 3px 5px'}}>
                                    <span className={classes.val2}>
                                        <CurrencyInput 
                                            style={{paddingLeft: '35px'}} 
                                            decimalsLimit={2} 
                                            className={classes.inputStyle1} 
                                            value={lender8Min}
                                            onChange={(event)=> setLender8Min(event.currentTarget.value)}
                                        />
                                    </span>
                                </Grid>
                            </Grid>
                            
                        </div>
                    </div>
                </div>

                <div className={classes.fieldResponsive2}>


                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_1" 
                                        id="lender_1" 
                                        className={classes.inputStyle1}
                                        value={lender1} 
                                        onChange={(event)=> setLender1(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender1Type}
                                        onChange={(event)=> setLender1Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender1Balance}
                                        onChange={(event)=> setLender1Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender1Min}
                                        onChange={(event)=> setLender1Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_2" 
                                        id="lender_2" 
                                        className={classes.inputStyle1}
                                        value={lender2} 
                                        onChange={(event)=> setLender2(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender2Type}
                                        onChange={(event)=> setLender2Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender2Balance}
                                        onChange={(event)=> setLender2Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender2Min}
                                        onChange={(event)=> setLender2Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_3" 
                                        id="lender_3" 
                                        className={classes.inputStyle1}
                                        value={lender3} 
                                        onChange={(event)=> setLender3(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender3Type}
                                        onChange={(event)=> setLender3Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender3Balance}
                                        onChange={(event)=> setLender3Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender3Min}
                                        onChange={(event)=> setLender3Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_4" 
                                        id="lender_4" 
                                        className={classes.inputStyle1}
                                        value={lender4} 
                                        onChange={(event)=> setLender4(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender4Type}
                                        onChange={(event)=> setLender4Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender4Balance}
                                        onChange={(event)=> setLender4Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender4Min}
                                        onChange={(event)=> setLender4Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_5" 
                                        id="lender_5" 
                                        className={classes.inputStyle1}
                                        value={lender5} 
                                        onChange={(event)=> setLender5(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender5Type}
                                        onChange={(event)=> setLender5Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender5Balance}
                                        onChange={(event)=> setLender5Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender5Min}
                                        onChange={(event)=> setLender5Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_6" 
                                        id="lender_6" 
                                        className={classes.inputStyle1}
                                        value={lender6} 
                                        onChange={(event)=> setLender6(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender6Type}
                                        onChange={(event)=> setLender6Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender6Balance}
                                        onChange={(event)=> setLender6Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender6Min}
                                        onChange={(event)=> setLender6Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>


                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_7" 
                                        id="lender_7" 
                                        className={classes.inputStyle1}
                                        value={lender7} 
                                        onChange={(event)=> setLender7(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender7Type}
                                        onChange={(event)=> setLender7Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender7Balance}
                                        onChange={(event)=> setLender7Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender7Min}
                                        onChange={(event)=> setLender7Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <strong className={classes.strong} style={{fontSize: '1rem', textTransform: 'uppercase'}}>Lender 1:</strong>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Lender:</span></label>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="lender_8" 
                                        id="lender_8" 
                                        className={classes.inputStyle1}
                                        value={lender8} 
                                        onChange={(event)=> setLender8(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Type:</span></label>
                                <span className={classes.val}>
                                    <select 
                                        className={classes.inputStyle1} 
                                        value={lender8Type}
                                        onChange={(event)=> setLender8Type(event.currentTarget.value)}
                                    >
                                        <option defaultValue=''>Select...</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Credit Line">Credit Line</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Balance:</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender8Balance}
                                        onChange={(event)=> setLender8Balance(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                            <Grid item className={classes.gridItemPadding} xs={12} sm={5.9}>
                                <label><span style={{lineHeight: '1.5'}}>Min. Pmt.</span></label>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                        style={{paddingLeft: '35px'}} 
                                        decimalsLimit={2} 
                                        className={classes.inputStyle1} 
                                        value={lender8Min}
                                        onChange={(event)=> setLender8Min(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                    </div>

                </div>



                <div className={classes.responsiveMTField} >
                    <div style={{width: '100%'}}>
                        <Grid container style={{alignItems: 'center'}}>
                            <Grid item xs={12} md={4}>
                                <label htmlFor="child_support_payment" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Child Support Payments / Alimony:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="child_support_payment" 
                                        id="child_support_payment" 
                                        className={classes.inputStyle1} 
                                        value={childSupportPayment} 
                                        onChange={(event)=> setChildSupportPayment(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <div className={classes.inline} style={{marginTop: '15px'}}><strong>Assets:</strong></div>

                        <div style={{width: '100%', position: 'relative', top: '5px'}}>
                            <div className={classes.inlineFormInput}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <span className={classes.val}>
                                            <input 
                                                placeholder='Description' 
                                                type="text" 
                                                className={classes.inputStyle1} 
                                                value={asses1} 
                                                onChange={(event)=> setAsses1(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <span className={classes.val}>
                                            <input 
                                                placeholder='Value' 
                                                type="text" 
                                                className={classes.inputStyle1} 
                                                value={asses1value} 
                                                onChange={(event)=> setAsses1value(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.inlineFormInput}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <span className={classes.val}>
                                            <input 
                                                placeholder='Description' 
                                                type="text" 
                                                className={classes.inputStyle1} 
                                                value={asses2} 
                                                onChange={(event)=> setAsses2(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <span className={classes.val}>
                                            <input 
                                                placeholder='Value' 
                                                type="text" 
                                                className={classes.inputStyle1} 
                                                value={asses2Value} 
                                                onChange={(event)=> setAsses2Value(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        <div style={{marginTop: '55px', width: '100%'}}>
                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="backrupcy" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>Have you ever filed for bankruptcy or had debt adjustment under Chapter 13?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div id='radio-buttons' className={classes.radio} style={{paddingLeft: '0'}}>
                                            <label htmlFor="backrupcy_yes" className={classes.radioLabel}>
                                                <input 
                                                    type="radio" 
                                                    name="backrupcy"
                                                    id="backrupcy_yes" 
                                                    value="Yes"
                                                    checked={bankruptcy === 'Yes'}
                                                    onChange={(event)=> setBankruptcy(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>Yes</span>
                                            </label>
                                            <label htmlFor="backrupcy_no">
                                                <input 
                                                    type="radio" 
                                                    name="backrupcy" 
                                                    id="backrupcy_no" 
                                                    value="No"
                                                    checked={bankruptcy === 'No'}
                                                    onChange={(event)=> setBankruptcy(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>No</span>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="lawsuit" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>Are you a party in a lawsuit?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div id='radio-buttons' className={classes.radio} style={{paddingLeft: '0'}}>
                                            <label htmlFor="lawsuit_yes" className={classes.radioLabel}>
                                                <input 
                                                    type="radio" 
                                                    name="lawsuit" 
                                                    id="lawsuit_yes" 
                                                    value="Yes" 
                                                    checked={lawsuit === 'Yes'}
                                                    onChange={(event)=> setLawsuit(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>Yes</span>
                                            </label>
                                            <label htmlFor="lawsuit_no">
                                                <input 
                                                    type="radio" 
                                                    name="lawsuit" 
                                                    id="lawsuit_no" 
                                                    value="No" 
                                                    checked={lawsuit === 'No'}
                                                    onChange={(event)=> setLawsuit(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>No</span>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="foreclosed" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>Have you ever had property foreclosed or repossesion in the last 7 years?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div id='radio-buttons' className={classes.radio} style={{paddingLeft: '0'}}>
                                            <label htmlFor="foreclosed_yes" className={classes.radioLabel}>
                                                <input 
                                                    type="radio" 
                                                    name="foreclosed" 
                                                    id="foreclosed_yes" 
                                                    value="Yes" 
                                                    checked={foreclosed === 'Yes'}
                                                    onChange={(event)=> setForeclosed(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>Yes</span>
                                            </label>
                                            <label htmlFor="foreclosed_no">
                                                <input 
                                                    type="radio" 
                                                    name="foreclosed" 
                                                    id="foreclosed_no" 
                                                    value="No" 
                                                    checked={foreclosed === 'No'}
                                                    onChange={(event)=> setForeclosed(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>No</span>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="decline" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>Is your income likely to decline in the next two years?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div id='radio-buttons' className={classes.radio} style={{paddingLeft: '0'}}>
                                            <label htmlFor="decline_yes" className={classes.radioLabel}>
                                                <input type="radio" 
                                                    name="decline" 
                                                    id="decline_yes" 
                                                    value="Yes" 
                                                    checked={decline === 'Yes'}
                                                    onChange={(event)=> setDecline(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>Yes</span>
                                            </label>
                                            <label htmlFor="decline_no">
                                                <input 
                                                    type="radio"
                                                    name="decline"
                                                    id="decline_no"
                                                    value="No"
                                                    checked={decline === 'No'}
                                                    onChange={(event)=> setDecline(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>No</span>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="endorser" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>Are you co-maker/endorser on any loan not listed above?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div id='radio-buttons' className={classes.radio} style={{paddingLeft: '0'}}>
                                            <label htmlFor="endorser_yes" className={classes.radioLabel}>
                                                <input 
                                                    type="radio" 
                                                    name="endorser" 
                                                    id="endorser_yes" 
                                                    value="Yes" 
                                                    
                                                    checked={endorser === 'Yes'}
                                                    onChange={(event)=> setEndorser(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>Yes</span>
                                            </label>
                                            <label htmlFor="endorser_no">
                                                <input 
                                                    type="radio" 
                                                    name="endorser" 
                                                    id="endorser_no" 
                                                    value="No" 

                                                    checked={endorser === 'No'}
                                                    onChange={(event)=> setEndorser(event.target.value)}
                                                />
                                                <span className={classes.radioLabelSpan}>No</span>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="yes" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>If yes then for whom?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <span className={classes.val}>
                                            <input type="text" className={classes.inputStyle1} value={whom1} onChange={(event)=> setWhom1(event.target.value)}/>
                                        </span>
                                    </Grid>
                                </Grid>
                            </div>


                            <div className={classes.quetions}>
                                <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Grid item xs={7.8}>
                                        <label htmlFor="yes" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong} style={{ lineHeight: '1' }}>If yes then for whom?</strong></label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <span className={classes.val}><input type="text" className={classes.inputStyle1} value={whom2} onChange={(event)=> setWhom2(event.target.value)}/></span>
                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </fieldset>
        </>
    );
};
export default FieldSet5;