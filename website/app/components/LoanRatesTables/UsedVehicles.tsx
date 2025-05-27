interface Props {
    classes: any;
};
const UsedVehicles: React.FC<Props> = ({ classes }) => {

  return (
                                    
    <div>
        <table className="ratetable twoCol">
                <caption className={classes.caption}>
                    <div className="inputdiv">2023-2022 Titled Vehicles</div>
                </caption>
                <tbody><tr> 
                    <th className={classes.th}>Term</th>
                    <th className={classes.th} style={{textAlign: 'center'}}>APR*</th>
                </tr>
                <tr> 
                    <td>60 Months</td>
                    <td>As Low As 6.00%</td>
                </tr>
                <tr> 
                    <td>72 Months</td>
                    <td>As Low As 6.25%</td>
                </tr>
                <tr> 
                    <td>84 Months</td>
                    <td>As Low As 6.75%</td>
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
        
        <br/>

        <table className="ratetable twoCol">
                <caption className={classes.caption}>
                    <div className="inputdiv">2021-2020 Titled Vehicles</div>
                </caption>
                <tbody>
                    <tr> 
                        <th className={classes.th}>Term</th>
                        <th className={classes.th}>APR*</th>
                    </tr>
                    <tr> 
                        <td>60 Months</td>
                        <td>As Low As 6.50%</td>
                    </tr>
                    <tr> 
                        <td>72 Months</td>
                        <td>As Low As 6.75%</td>
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
        <br/>

        <table className="ratetable twoCol">
                <caption className={classes.caption}>
                    <div className="inputdiv">2019-2018 Titled Vehicles</div>
                </caption>
                <tbody>
                    <tr> 
                        <th className={classes.th}>Term</th>
                        <th className={classes.th}>APR*</th>
                    </tr>
                    <tr> 
                        <td>60 Months</td>
                        <td>As Low As 7.25%</td>
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
        <br />

        <table className="ratetable twoCol">
                <caption className={classes.caption}>
                    <div className="inputdiv">2017-2016 Titled Vehicles</div>
                </caption>
                <tbody>
                    <tr> 
                        <th className={classes.th}>Term</th>
                        <th className={classes.th}>APR*</th>
                    </tr>
                    <tr> 
                        <td>60 Months</td>
                        <td>As Low As 7.75%</td>
                    </tr>
                    <tr> 
                        <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                    </tr>
                </tbody>
        </table>
                


        <table className="ratetable twoCol">
                <caption className={classes.caption}>
                    <div className="inputdiv">2015-2014 Titled Vehicles</div>
                </caption>
                <tbody>
                    <tr> 
                        <th className={classes.th}>Term</th>
                        <th className={classes.th}>APR*</th>
                    </tr>
                    <tr> 
                        <td>48 Months</td>
                        <td>As Low As 8.50%</td>
                    </tr>
                    <tr> 
                        <td colSpan={3} className={classes.tablefoot}>*APR is the Annual Percentage Rate.</td>
                    </tr>
                </tbody>
        </table>


    </div>
                                
  )
};

export default UsedVehicles;
