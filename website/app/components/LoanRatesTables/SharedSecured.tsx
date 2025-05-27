interface Props {
    classes: any;
};
const SharedSecured: React.FC<Props> = ({ classes }) => {

  return (
                                    
    <div>
        <table className="ratetable twoCol">
            <caption className={classes.caption}>Share Secured</caption>
                    <tbody>
                        <tr> 
                            <th className={classes.th}>Term</th>
                            <th className={classes.th}>APR*</th>
                        </tr>
                        <tr> 
                            <td>Up to 72 Months</td>
                            <td>As Low As 3.00%</td>
                        </tr>
                        <tr> 
                            <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                        </tr>
                    </tbody>
        </table>
    </div>
                                
  )
};

export default SharedSecured;
