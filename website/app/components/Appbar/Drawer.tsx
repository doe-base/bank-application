import React, { useState } from "react";
import {useStyles} from "./style";
import Popup from "../Popup/Popup";
import MenuComponent from "./MenuComponent";
import LoginComponent from "./LoginComponent";


interface Props{
    name: string;
    closeSearch:  () => void;
    searchActive: boolean;
};
const Drawer: React.FC<Props> = ({ name, closeSearch, searchActive }) => {
    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState<string | null>(localStorage.getItem('active-menu'));
    const [needed, setNeeded] = useState<boolean>(false);
    const [name2, setName] = useState<string>('');
   
    return(
        <>
            <section className={classes.section} onClick={closeSearch}>
                {
                    name === 'menu'

                    ?
                        <MenuComponent 
                            searchActive={searchActive} 
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu} 
                            setNeeded={setNeeded}
                            setName={setName}
                        />
                    :

                    name === 'online'
                    ?
                      <LoginComponent />
                    :
                    null
                }
            </section>

            <Popup needed={needed} setNeeded={setNeeded} name={name2} setName={setName}/>

        </>
    )
};

export default Drawer;