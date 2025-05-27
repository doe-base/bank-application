interface Props {
    classes: any;
};
const PersonalTable: React.FC<Props> = ({ classes }) => {

  return (
                                    
    <div>
        <table className="ratetable twoCol">
            <caption className={classes.caption}>Personal Loan Rates</caption>
                    <tbody>
                        <tr> 
                            <th className={classes.th}>Type</th>
                            <th className={classes.th}>APR*</th>
                        </tr>
                        <tr> 
                            <td>Personal Loans over $1,000 (Unless Special is in Effect)</td>
                            <td>As Low As 20.00%</td>
                        </tr>
                        <tr> 
                            <td>VISA Classic</td>
                            <td>15.00%</td>
                        </tr>
                        <tr> 
                            <td>VISA Classic Preferred (Ask how to become a Preferred Member)</td>
                            <td>13.00%</td>
                        </tr>
                        <tr> 
                            <td>Cash N Dash Payday Alternative Loan</td>
                            <td>20.00%</td>
                        </tr>
                        <tr> 
                            <td>*APR is the Annual Percentage Rate.</td>
                            <td></td>
                        </tr>
                        <tr> 
                            <td colSpan={3} className={classes.tablefoot}></td>
                        </tr>
                    </tbody>
        </table>
    </div>
                                
  )
};

export default PersonalTable;
