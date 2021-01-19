import React, { useState } from 'react';
import Styles from "./Styles.module.css"

const Tabs = (props) => {
    const [tabOne, tabTwo, tabThree] = props.info;
    const [select, setSelect] = useState("Tab 1");

    const clickHandler = (e, item) => {
        setSelect(item.lable)
        props.onDisplayTab(item.contentProperty);
    };
    return (
        <div className={Styles.body}>
            <div className={Styles.header}>
                {props.info.map((item, i) => <button className={select == item.lable ? Styles.btnSelected : Styles.btn} key={i} onClick={(e) => clickHandler(e, item)}>{item.lable}</button>)}
            </div>
        </div>
    );
}
export default Tabs;