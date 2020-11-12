import styles from './header.module.css';
import React from 'react';

const items = ['购书单', '电子图书', '豆瓣书店', '2019年度榜单', '2019书影音报告','购物车'];
const listItems = items.map((item) => <div className={styles.navItems}><a className={styles.navItemsa}>{item}</a></div>);

export const Nav =()=>{
    return(
    <div className={styles.nav}>
        <div className={styles.navWrap}>
            <div className={styles.navPrimary}>
                <div className={styles.navLogo}>
                    <a className={styles.navLogoa} href="https:&#47;&#47;book.douban.com"></a>
                </div>
                <div className={styles.navSearch}>
                    <div>
                        <input className={styles.inp} placeholder="书名、作者、ISBN" value=""/>
                    </div>
                    <div className={styles.inpBtn}></div>
                </div>
            </div>
        </div>
        <div className={styles.navSecondary}>
            {listItems}
        </div>
        <a href="https://book.douban.com/annual/2019?source=book_navigation" className={styles.bookannual}></a>
    </div>
);

}

{/* <div class="nav">
<div class="nav-wrap">
    <div class="nav-primary">
        <div class="nav-logo">
            <a href="https:&#47;&#47;book.douban.com">豆瓣读书</a>
        </div>
        <div class="nav-search">
            <form action="" method="get" accept-charset="utf-8"></form>
                <div class="inp"><input placeholder="书名、作者、ISBN" value=""></div>
                <div class="inp-btn"></div>
            </form>
        </div>
    </div>
</div>
<div class="nav-secondary">
    <ul class="nav-items">
        <li><a href="https://book.douban.com/cart/">购书单</a></li>
        <li><a href="https://read.douban.com/ebooks/?dcs=book-nav&dcm=douban" target="_blank"
            >电子图书</a>
        </li>
        <li    ><a href="https://market.douban.com/book?utm_campaign=book_nav_freyr&utm_source=douban&utm_medium=pc_web"
            >豆瓣书店</a>
        </li>
        <li    ><a href="https://book.douban.com/annual/2019?source=navigation"
                target="_blank"
            >2019年度榜单</a>
        </li>
        <li    ><a href="https://m.douban.com/standbyme/annual2019?source=navigation"
                target="_blank"
            >2019书影音报告</a>
        </li>
        <li          class=" book-cart"
        ><a href="https://market.douban.com/cart/?biz_type=book&utm_campaign=book_nav_cart&utm_source=douban&utm_medium=pc_web"
                target="_blank"
            >购物车</a>
        </li>
    </ul>
        <a href="https://book.douban.com/annual/2019?source=book_navigation" class="bookannual"></a>
</div>
</div> */}