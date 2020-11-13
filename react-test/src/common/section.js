import styles from './section.module.css';
import React from 'react';

const h = <h2 className={styles.h}>
        <span>新书速递</span>
        <span className={styles.linkMore}>
            <a className={styles.linka}href="/latest?icn=index-latestbook-all">更多»</a>
        </span>
    </h2>
const slide = <div className={styles.slideControls}>
    <ol className={styles.slidedots}>
        <li><a dataIndex="1" href="#" className=""></a></li>
        <li><a dataIndex="2" href="#" className=""></a></li>
        <li><a dataIndex="3" href="#" className=""></a></li>
        <li><a dataIndex="4" href="#" className=""></a></li>
    </ol>
    <div className={styles.slideBtns}>
    <a href="#" className={styles.prev}>&#8249;</a>
    <a href="#" className={styles.next}>&#8250;</a>
    </div>
</div>
const li = <div className={styles.li}>
    <div class="cover">
        <a href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject" title="信">
        <img src={require("../assert/1.jpg").default} className={styles.img} alt="信"/>
        </a>
    </div>
    <div className={styles.info}>
        <div className={styles.title}>
        <a class="" href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
            title="信">信</a>
        </div>
        <div class="author">
        [日] 东野圭吾
        </div>
        <div class={styles.moreMeta}>
        <h4 class="title">
            信
        </h4>
        <p>
            <span class="author">
            [日] 东野圭吾
            </span>
            /
            <span class="year">
            2020-10-15
            </span>
            /
            <span class="publisher">
            北京联合出版公司
            </span>
        </p>
        <p class="abstract">
            
            “哥哥，你好吗？这是我写给你的最后一封信……从你离去之后，这个社会开始对我复仇……”
    武岛直贵，一个与社会格格不入的青年——父母双亡后，他和哥哥相依为命。为了给直贵筹措学费，哥哥闯入民宅偷窃，却因盗窃杀人而入狱服刑。从此，兄弟俩只能用书信沟通。犯罪的分明是哥哥，无辜的直贵却因此失去了他的全部。学业、求职、恋爱、生活、梦想，他苦苦地追求，社会...
        </p>
        </div>
    </div>
</div>

const keys = [...Array(10).keys()];
const list = keys.map((num)=>
    <div className={styles.li} key={num}>
        <div className="cover">
            <a href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject" title="信">
            <img src={require("../assert/1.png")} className={styles.img} alt="信"/>
            </a>
        </div>
        <div className={styles.info}>
            <div className={styles.title}>
            <a className="" href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
                title="信">信</a>
            </div>
            <div className="author">
            [日] 东野圭吾
            </div>
            <div className={styles.moreMeta}>
            <h4 className="title">
                信
            </h4>
            <p>
                <span className="author">
                [日] 东野圭吾
                </span>
                /
                <span className="year">
                2020-10-15
                </span>
                /
                <span className="publisher">
                北京联合出版公司
                </span>
            </p>
            <p className="abstract">
                
                “哥哥，你好吗？这是我写给你的最后一封信……从你离去之后，这个社会开始对我复仇……”
        武岛直贵，一个与社会格格不入的青年——父母双亡后，他和哥哥相依为命。为了给直贵筹措学费，哥哥闯入民宅偷窃，却因盗窃杀人而入狱服刑。从此，兄弟俩只能用书信沟通。犯罪的分明是哥哥，无辜的直贵却因此失去了他的全部。学业、求职、恋爱、生活、梦想，他苦苦地追求，社会...
            </p>
            </div>
        </div>
    </div>
)
export const Section =()=>
    <div className={styles.newBook}>
        {h}
        {slide}
    <div className={styles.listCol}>{list}</div>
    </div>

export const Hot = ()=>
    <div className={styles.hot}></div>