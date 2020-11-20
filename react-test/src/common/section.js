import styles from "./section.module.css";
import React from "react";

const h = (
  <h2 className={styles.h}>
    <span>新书速递</span>
    <span className={styles.linkMore}>
      <a href="/latest?icn=index-latestbook-all">更多»</a>
    </span>
  </h2>
);
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

const keys = [...Array(10).keys()];
const list = keys.map((num) => (
  <div className={styles.li} key={num}>
    <div className="cover">
      <a
        href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
        title="信"
      >
        <img src={require("../assert/1.png")} className={styles.img} alt="信" />
      </a>
    </div>
    <div className={styles.info}>
      <div className={styles.title}>
        <a
          className=""
          href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
          title="信"
        >
          信
        </a>
      </div>
      <div className="author">[日] 东野圭吾</div>
      <div className={styles.moreMeta}>
        <h4 className="title">信</h4>
        <p>
          <span className="author">[日] 东野圭吾</span>/
          <span className="year">2020-10-15</span>/
          <span className="publisher">北京联合出版公司</span>
        </p>
        <p className="abstract">
          “哥哥，你好吗？这是我写给你的最后一封信……从你离去之后，这个社会开始对我复仇……”
          武岛直贵，一个与社会格格不入的青年——父母双亡后，他和哥哥相依为命。为了给直贵筹措学费，哥哥闯入民宅偷窃，却因盗窃杀人而入狱服刑。从此，兄弟俩只能用书信沟通。犯罪的分明是哥哥，无辜的直贵却因此失去了他的全部。学业、求职、恋爱、生活、梦想，他苦苦地追求，社会...
        </p>
      </div>
    </div>
  </div>
));
export const Section = () => (
  <div className={styles.section}>
    <div className={styles.nav}>
      {h}
      {slide}
    </div>
    <div className={styles.list5}>{list}</div>
  </div>
);

export const Hot = () => <div className={styles.hot}></div>;
