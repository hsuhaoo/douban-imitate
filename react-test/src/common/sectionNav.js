import React from 'react';
import styles from "./section.module.css";
const slide = (
    <div className={styles.slideControls}>
      <div className={styles.slidedots}>
        <li>
          <a dataIndex="1" href="#" className=""></a>
        </li>
        <li>
          <a dataIndex="2" href="#" className=""></a>
        </li>
        <li>
          <a dataIndex="3" href="#" className=""></a>
        </li>
        <li>
          <a dataIndex="4" href="#" className=""></a>
        </li>
      </div>
      <div className={styles.slideBtns}>
        <a href="#" className={styles.prev}>
          &#8249;
        </a>
        <a href="#" className={styles.next}>
          &#8250;
        </a>
      </div>
    </div>
);
export const SectionNav = (props)=>{
    return (
    <div className={styles.nav}>
        <h2 className={styles.h}>
        <span>{props.title}</span>
        </h2>
        {props.slide && slide} 
    </div>
    )
};