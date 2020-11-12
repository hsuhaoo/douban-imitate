import styles from './nav.module.css';
import React from 'react';
const items = ['豆瓣', '读书', '音乐', '同城', '小组','阅读','时间'];
const listItems = items.map((item) => <a className={styles.items}>{item}</a>);
const info = ['下载豆瓣客户端', '登录/注册'];
const infoItems = info.map((item)=><a className={styles.items}>{item}</a>);
const itemWrap = <div className={styles.itemWrap}>{listItems}</div>
const infoWrap = <div className={styles.infoWrap}>{infoItems}</div>
export const GlobalNav = ()=>{
    return (<div className={styles.nav}>{itemWrap}{infoWrap}</div>)
}

