interface Props {
    classes: any;
};
const NewCarTable: React.FC<Props> = ({ classes }) => {

  return (
                                    
        <div>
            <table className="ratetable twoCol" id="new-cars">
                <caption className={classes.caption}>
                    <div className="inputdiv">2024-2023 Untitled Vehicles</div>
                </caption>
                <tbody>
                    <tr> 
                        <th className={classes.th}>Term</th>
                        <th className={classes.th}>APR*</th>
                    </tr>
                    <tr> 
                        <td>60 Months</td>
                        <td>As Low As 5.50%</td>
                    </tr>
                    <tr> 
                        <td>72 Months</td>
                        <td>As Low As 6.00%</td>
                    </tr>
                    <tr> 
                        <td>84 Months</td>
                        <td>As Low As 6.50%</td>
                    </tr>
                    <tr> 
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> 
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> 
                        <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                    </tr>
                </tbody>
            </table>
        </div>
                                
  )
};

export default NewCarTable;
