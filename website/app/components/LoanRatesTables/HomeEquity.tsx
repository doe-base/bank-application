interface Props {
    classes: any;
};
const HomeEquityTable: React.FC<Props> = ({ classes }) => {

  return (
                                    
    <div>
        <table className="ratetable twoCol">
                <caption className={classes.caption}>Home Equity Rates (85% LTV**)</caption>
                <tbody><tr> 
                    <th className={classes.th}>Term</th>
                    <th className={classes.th}>APR*</th>
                </tr>
                <tr> 
                    <td>5 Year</td>
                    <td>As Low As 7.50%</td>
                </tr>
                <tr> 
                    <td>6 Year - 7 Year</td>
                    <td>As Low As 8.00%</td>
                </tr>
                <tr> 
                    <td>8 Year - 10 Year</td>
                    <td>As Low As 8.75%</td>
                </tr>
                <tr> 
                    <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                </tr>
                </tbody>
        </table>
        <br/>

        <table className="ratetable twoCol">
                <caption className={classes.caption}>Home Equity Rates (80% LTV**)</caption>
                <tbody><tr> 
                    <th className={classes.th}>Term</th>
                    <th className={classes.th}>APR*</th>
                </tr>
                <tr> 
                    <td>5 Year</td>
                    <td>As Low As 6.75%</td>
                </tr>
                <tr> 
                    <td>6 Year - 7 Year</td>
                    <td>As Low As 7.50%</td>
                </tr>
                <tr> 
                    <td>8 Year - 10 Year</td>
                    <td>As Low As 8.25%</td>
                </tr>
                <tr> 
                    <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                </tr>
                </tbody>
        </table>



    </div>
                                
  )
};

export default HomeEquityTable;
